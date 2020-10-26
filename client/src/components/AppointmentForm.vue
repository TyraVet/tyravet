<template lang='pug'>
form#client-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field#client( label='Client' )
				b-select(
					v-model='client'
					required
				)
					option(
						v-for='(pet, index) in pets'
						:key='index'
						:value='pet'
					) {{ pet.name }}, ({{ pet.breed }}). {{ pet.clientName }}
			b-field#service( label='Service' )
				b-select(
					v-model='service'
					required
				)
					option(
						v-for='(service, index) in services'
						:key='index'
						:value='service'
					) {{ service.name }}
			b-field#hour( label='Hour' )
				b-input(
					type='text'
					v-model='hour.hour'
					required
					disabled
				)
			b-field#notes( label='Notes' )
				b-input(
					type='textarea'
					maxlength='500'
					v-model='notes'
				)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) {{ labelButtonCancel }}
			b-button.button.is-success(
				@click='send()'
			) {{ labelButtonAccept }}
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 201

export default {
	name: 'AppointmentForm',
	props: {
		hour: Object,
		schedule: Object
	},
	data() {
		return {
			OK,
			title: 'New Appointment',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			services: [],
			clients: [],
			pets: [],
			service: null,
			client: null,
			notes: ''
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		/* Once we have the clients from the database we fetch the API
		 * to populate the pets of each client. Then we process each pet
		 * to display correctly in the form. */
		clients: function(){
			this.clients.forEach((client, clientIndex) => {
				client.pets.forEach((pet, petIndex) => {
					axios.get(process.env.VUE_APP_TYRAWEB_PET, {
						params: {
							id: pet
						},
						headers: {
							Authorization: 'Bearer ' + this.user.token
						}
					}).then(response => {
						client.pets[petIndex] = response.data

						const processedPet = {
							clientId: client._id,
							clientName: client.name,
							petId: client.pets[petIndex]._id,
							name: client.pets[petIndex].name,
							breed: client.pets[petIndex].breed.name
						}

						this.pets.push(processedPet)
					}).catch(error => {
						console.error(error)
					})
				})
			})
		}
	},
	methods: {
		init(){
			this.getClients()
			this.getServices()
		},
		close(){
			this.$emit('close')
		},
		setOnSuccess(response){
			if(response.status === this.OK)
				EventBus.$emit('received-appointments', response.data)
		},
		getServices(){
			axios.get(process.env.VUE_APP_TYRAWEB_SERVICES, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.services = response.data
			}).catch(error => {
				console.error(error)
			})
		},
		getClients(){
			axios.get(process.env.VUE_APP_TYRAWEB_CLIENTS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.clients = response.data
			}).catch(error => {
				console.log(error)
			})
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_ADD_APPOINTMENT, {
				id: this.schedule._id,
				service: this.service,
				clientId: this.client.clientId,
				petId: this.client.petId,
				hour: this.hour.hour,
				appointments: this.schedule.appointments
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
