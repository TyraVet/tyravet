<template>
  <div class='appointments-list'>
	<div v-for='(hour, index) in hours'
		 :key='index'
		 class='hour-container has-background-primary-white'
		 @click=addAppointment(hour)>
	  <span class='is-size-4'>
		{{ hour.hour }}
	  </span>
	  <div>
	  </div>
	</div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import AppointmentForm from '@/components/AppointmentForm.vue'
import { EventBus } from '../eventBus.js'

export const NOT_FOUND = 404

EventBus.$on('received-appointments', appointments => {
	console.log(appointments)
})

export default {
	name: 'AppointmentsList',
	data(){
		return{
			NOT_FOUND,
			schedule: null,
			hours: [],
			appointment: '',
			count: 1,
			isInDB: null
		}
	},
	methods: {
		/* Fill the hours array with the available hours
		 * where you can set an appointment. */
		async init(){
			await this.getDaySchedule()
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
		addAppointment(hour){
			if(this.schedule)
				this.launchModal(hour, this.schedule)
		},
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
		setOnSuccess(response){
			console.log(response)
			this.schedule = response.data
		},
		setOnError(error){
			console.error(error)
			if(error.response.status === this.NOT_FOUND)
				this.isInDB = false
		},
		getDaySchedule(){
			axios.get(process.env.VUE_APP_TYRAWEB_DAY_SCHEDULES, {
				params: {
					date: moment(this.$store.state.today).format('YYYY-MM-DD')
				},
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		createDaySchedule(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_DAY_SCHEDULE, {
				date: moment(this.$store.state.date).format('YYYY-MM-DD')
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		}
	},
	mounted(){
		this.init()
	},
	watch: {
		isInDB(){
			if(!this.isInDB)
				this.createDaySchedule()
		}
	}
}
</script>

<style>
@import '../assets/css/appointments-list.css'
</style>
