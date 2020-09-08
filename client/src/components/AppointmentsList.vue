<template>
  <div class='appointments-list'>
	<div v-for='(hour, index) in hours'
		 :key='index'
		 class='hour-container has-background-primary-white'
		 @click=addAppointment(hour)>
	  <span class='is-size-4'>
		{{ hour.hour }}
	  </span>
	  <div v-for='(appointment, index) in hour.appointments'
		   :key='index'>
		{{ appointment }}
	  </div>
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import AppointmentForm from '@/components/AppointmentForm.vue'
import { EventBus } from '../eventBus.js'

export default {
	name: 'AppointmentsList',
	data(){
		return{
			schedule: {},
			hours: []
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		},
		date(){
			return this.$store.state.date
		}
	},
	methods: {
		init(){
			/* Wait until we have our user so we fetch
			 * data from the API. */
			if(this.user){
				this.getDaySchedule()
			}
		},
		fillHours(){
			const maxLength = 13
			const initialHour = 8

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
			this.hours.forEach(hour => {
				this.schedule.appointments.forEach(appointment => {
					if(hour.hour === appointment.hour)
						hour.appointments.push(appointment)
				})
			})
		},
		addAppointment(hour){
			if(this.schedule)
				this.launchModal(hour, this.schedule)
		},
		/* Launch custom component programmactically,
		 * to create a new appointment. */
		launchModal(hour, schedule){
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
		/* Execute methods on Request Success. */
		setOnSuccess(response){
			this.schedule = response.data
			this.fillHours()
			this.syncAppointments()
		},
		/* Prints Error on Request Failure. */
		setOnError(error){
			console.error(error)
		},
		/* POST request to the API.
		 * params : none
		 * return on response : schedule - Object
		 * return on error : error - Object */
		getDaySchedule(){
			axios.post(process.env.VUE_APP_TYRAWEB_DAY_SCHEDULES, {
				date: moment(this.date).format('YYYY-MM-DD')
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

		/* Set event listener once the component is created.
		 * This event listener receive the appointments from the API
		 * and sync then with the ones of the component's data. */
		EventBus.$on('received-appointments', appointments => {
			this.schedule.appointments = appointments
			this.syncAppointments()
			this.$nextTick()
		})
	},
	watch: {
		/* Wait until we have our user so we fetch
		 * data from the API. */
		user(){
			this.getDaySchedule()
		}
	}
}
</script>

<style>
@import '../assets/css/appointments-list.css'
</style>
