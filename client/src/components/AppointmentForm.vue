<template>
  <form id='client-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
			<b-field label='Client'>
			 <b-select v-model='client'
					   required>
			   <option v-for='(pet, index) in pets'
					   :key=index
					   :value='pet'>
				 {{ pet.name }}, ({{ pet.breed }}). {{ pet.clientName }}
			   </option>
			 </b-select>
		   </b-field>
		   <b-field label='Service'>
			 <b-select v-model='service'
					   required>
			   <option v-for='(service, index) in services'
					   :key=index
					   :value='service'>
				 {{ service.name }}
			   </option>
			 </b-select>
		   </b-field>
		   <b-field label='Hour'>
			 <b-input type='text'
					  v-model='hour.hour'
					  required
					  disabled>
			 </b-input>
		   </b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<b-button class='button is-success'
				  @click=send()>
		  Accept
		</b-button>
	  </footer>
	</div>
  </form>
</template>

<script>
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
			services: [],
			clients: [],
			pets: [],
			service: null,
			client: null
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		clients: function(){
			this.processPets()
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
			console.log(response)
			if(response.status === this.OK)
				EventBus.$emit('received-appointments', response.data)
		},
		processPets(){
			this.clients.forEach(client => {
				client.pets.forEach(pet => {
					const processedPet = {
						clientId: client._id,
						clientName: client.name,
						petId: pet._id,
						name: pet.name,
						breed: pet.breed.name
					}

					this.pets.push(processedPet)
				})
			})
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
