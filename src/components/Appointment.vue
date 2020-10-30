<template lang='pug'>
div#appointment-main
	section#appointment-section(
		title='Appointment'
	)
		b-checkbox(
			type='is-success'
			v-model='isDone'
		)
		div
			div#appointment-container(
				:class='{ done: isDone }'
			)
				h3#service.is-size-5.has-text-primary
					| {{ appointment.service.name }}
				b-button#pet(
					title='Go Pet Profile'
					type='is-primary-light'
					@click='goPetProfile(pet._id)'
				)
					h3#pet-text.is-size-5.has-text-dark
						| {{ pet.name }}, ({{ pet.breed.name }})
				h3#client.is-size-5.has-text-grey-darker
					| {{ client.name }}, {{ client.phone }}
			div#notes-container(
				v-if='appointment.notes'
				:class='{ done: isDone }'
			)
				span#notes-title-container
					b-icon#notes-icon(
						type='is-icon'
						pack='far'
						icon='sticky-note'
						size='is-small'
					)
					h3#notes-title.is-size-6.has-text-danger
						| {{ titleNotes }} :
				h3#notes.is-size-6.has-text-dark
					| - {{ appointment.notes }}
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export default {
	name: 'Appointment',
	props: {
		appointment: Object
	},
	data(){
		return{
			titleNotes: 'Notes',
			isDone: this.appointment.done,
			client: { name: '', phone: '' },
			pet: { name: '', breed: { name: '' } }
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		isDone(){
			this.send()
		}
	},
	methods: {
		init(){
			this.getClient()
			this.getPet()
		},
		goPetProfile(id){
			this.$router.push({ name: 'pet', params: { id } })
		},
		/* Emit event to update the specific appointment */
		send(){
			EventBus.$emit('update-appointments', {
				appointment: this.appointment,
				done: this.isDone
			})
		},
		getClient(){
			axios.get(process.env.VUE_APP_TYRAWEB_CLIENT, {
				params: {
					id: this.appointment.clientId
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.client = response.data
			}).catch(error => {
				console.error(error)
			})
		},
		getPet(){
			axios.get(process.env.VUE_APP_TYRAWEB_PET, {
				params: {
					id: this.appointment.petId
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.pet = response.data
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

<style>
@import '../assets/css/appointment.css'
</style>
