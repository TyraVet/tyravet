<template>
  <div class='appointment'>
	<section title='Appointment'>
	  <div class='field'>
		<b-checkbox type='is-success'
					v-model='isDone'>
		  <div class='appointment-container' :class='{ done: isDone }'>
			<h3 class='is-size-5 has-text-primary'>
			  {{ appointment.service.name }}
			</h3>
			<h3 class='is-size-5 has-text-dark'>
			  | {{ pet.name }}, ({{ pet.breed.name }}) -
			</h3>
			<h3 class='is-size-5 has-text-grey-darker'>
			  {{ client.name }}, {{ client.phone }}
			</h3>
		  </div>
		</b-checkbox>
	  </div>
	</section>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export default {
	name: 'Appointment',
	props: {
		appointment: Object
	},
	data(){
		return{
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

				this.client.pets.forEach(pet => {
					if(pet._id === this.appointment.petId)
						this.pet = pet
				})
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
