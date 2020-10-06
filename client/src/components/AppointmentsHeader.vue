<template lang='pug'>
div.appointments-header
	b-button(
		icon-left='chevron-left'
		icon-pack='fas'
		type='is-primary-light'
		size='is-large'
		title='Previous'
		@click='startTimeMachine(PAST)'
	)
	b-button(
		title='Pick Date'
		type='is-primary-light'
		size='is-large'
		@click='pickDate()'
	)
		h1.is-size-4.has-text-centered.has-text-weight-semibold
			| {{ formattedDay }}
	b-button(
		icon-right='chevron-right'
		icon-pack='fas'
		type='is-primary-light'
		size='is-large'
		title='Next'
		@click='startTimeMachine(FUTURE)'
	)
</template>

<script lang='js'>
import moment from 'moment'
import { EventBus } from '../eventBus.js'
import PickDate from '@/components/PickDate.vue'

export const FUTURE = 'future'
export const PAST = 'past'

export default {
	name: 'AppointmentsHeader',
	data(){
		return{
			FUTURE,
			PAST,
			formattedDay: moment(this.day).format('MMMM Do YYYY'),
			day: null,
			back: null,
			next: null
		}
	},
	computed: {
		today(){
			return this.$store.state.today
		}
	},
	methods: {
		init(){
			this.day = this.today

			/* Set event listener once the component is created.
			 * Receives the updated day from PickDate component. */
			EventBus.$on('update-header', day => {
				this.day = day
				this.formattedDay = moment(this.day).format('MMMM Do YYYY')
			})
		},
		/* Set the respective day the user wants to see */
		startTimeMachine(where){
			if(!this.back || !this.next){
				this.back = new Date(this.day)
				this.next = new Date(this.day)
			}

			/* Depending on going backwards or forward
			 * we change both 'back' and 'next' variables
			 * to have consistency in the timeline. */
			if(where === 'past'){
				this.back.setDate(this.day.getDate() - 1)
				this.next = this.day
				this.day = this.back
			}else if(where === 'future'){
				this.next.setDate(this.day.getDate() + 1)
				this.back = this.day
				this.day = this.next
			}

			this.formattedDay = moment(this.day).format('MMMM Do YYYY')

			/* Emit event so the Appointments List can listen to
			 * and receive the updated date. */
			EventBus.$emit('update-date', this.day)
		},
		pickDate(){
			this.$buefy.modal.open({
				parent: this,
				component: PickDate,
				hasModalCard: true,
				trapFocus: true,
				props: {
					day: this.day
				}
			})
		}
	},
	created(){
		this.init()
	}
}
</script>

<style>
@import '../assets/css/appointments-header.css'
</style>
