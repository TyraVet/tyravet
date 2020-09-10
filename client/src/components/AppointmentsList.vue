<template>
  <div class='appointments-list-comp'>
	<div class='appointments-list'
		 v-if='schedule'>
	  <div v-for='(hour, index) in hours'
		   :key='index'
		   class='hour-container has-background-primary-white'
		   @click=addAppointment(hour)>
		<span class='is-size-4'>
		  {{ hour.hour }}
		</span>
		<div v-for='(appointment, index) in hour.appointments'
			 :key='index'>
		  <span class='appointment'>
			<h3 class='is-size-5 has-text-primary'>
			  {{ appointment.service.name }}
			</h3>
			<h3 class='is-size-5 has-text-dark'>
			  |
			  {{ appointment.client.pets[0].name }},
			  ({{ appointment.client.pets[0].breed.name }})
			  -
			</h3>
			<h3 class='is-size-5 has-text-grey-darker'>
			  {{ appointment.client.name }}, {{ appointment.client.phone }}
			</h3>
		  </span>
		</div>
	  </div>
	</div>
	<b-message title='Error'
			   type='is-danger'
			   aria-close-label='Close message'
			   icon-pack='fas'
			   icon-size='is-medium'
			   icon='exclamation'
			   has-icon
			   class='message'
			   v-if='error'>
	  {{ errorMessage }}
	</b-message>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import AppointmentForm from '@/components/AppointmentForm.vue'
import AppointmentError from '@/components/AppointmentError.vue'
import { EventBus } from '../eventBus.js'

export default {
	name: 'AppointmentsList',
	data(){
		return{
			schedule: {},
			hours: [],
			day: null,
			error: false,
			errorMessage: 'No Data Available'
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		},
		today(){
			return this.$store.state.today
		}
	},
	methods: {
		init(){
			this.day = this.today
			/* Wait until we have our user so we fetch
			 * data from the API. */
			if(this.user){
				this.getDaySchedule(this.day)
			}
		},
		fillHours(){
			const maxLength = 13
			const initialHour = 8

			/* Clear Array */
			this.hours = []

			for(let i = 0; i < maxLength; i++){
				if(i !== 0)
					this.hours.push({
						hour: (initialHour + i) + ':00',
						appointments: []
					})
				this.hours.push({
					hour: (initialHour + i) + ':30',
					appointments: []
				})
			}
		},
		syncAppointments(){
			this.fillHours()

			this.hours.forEach(hour => {
				this.schedule.appointments.forEach(appointment => {
					if(hour.hour === appointment.hour)
						hour.appointments.push(appointment)
				})
			})
		},
		addAppointment(hour){
			/* Check dates, prevent the user to add an
			 * appointment if the day has already passed. */
			if(this.day < this.today)
				this.launchErrorModal()
			else if(this.schedule)
			   this.launchAppointmentModal(hour, this.schedule)
		},
		/* Launch custom component programmactically,
		 * to create a new appointment. */
		launchAppointmentModal(hour, schedule){
			this.$buefy.modal.open({
				parent: this,
				component: AppointmentForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					hour: hour,
					schedule: schedule
				}
			})
		},
		launchErrorModal(){
			this.$buefy.modal.open({
				parent: this,
				component: AppointmentError,
				hadModalCard: true,
				trapFocus: true
			})
		},
		/* Execute methods on Request Success. */
		setOnSuccess(response){
			this.error = false
			this.schedule = response.data
			this.syncAppointments()
		},
		/* Prints Error on Request Failure. */
		setOnError(error){
			console.error(error)
			this.schedule = null
			this.error = true
		},
		/* POST request to the API.
		 * params : none
		 * return on response : schedule - Object
		 * return on error : error - Object */
		getDaySchedule(date){
			axios.post(process.env.VUE_APP_TYRAWEB_DAY_SCHEDULES, {
				date: moment(date).format('YYYY-MM-DD')
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		}
	},
	created(){
		this.init()

		/* Set event listener once the component is created. */

		/* Receives the appointments from the API and sync
		 * them with the ones of the component's data. */
		EventBus.$on('received-appointments', appointments => {
			this.schedule.appointments = appointments
			this.syncAppointments()
			this.$nextTick()
		})

		/* Receives the updated date so we can fetch the API
		 * and get the day's schedule. */
		EventBus.$on('update-date', date => {
			this.day = date
			this.getDaySchedule(this.day)
		})
	},
	watch: {
		/* Wait until we have our user so we fetch
		 * data from the API. */
		user(){
			this.getDaySchedule(this.today)
		}
	}
}
</script>

<style>
@import '../assets/css/appointments-list.css'
</style>
