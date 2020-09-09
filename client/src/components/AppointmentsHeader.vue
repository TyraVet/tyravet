<template>
  <div class='appointments-header'>
	<b-button icon-left='chevron-left'
			  icon-pack='fas'
			  type='is-primary-light'
			  size='is-large'
			  title='Previous'
			  @click=startTimeMachine(PAST)>
	</b-button>
	<span class='date-title'
		  title='Pick date'>
	  <h1 class='is-size-4 has-text-centered has-text-weight-semibold'>
		{{ formattedDay }}
	  </h1>
	</span>
	<b-button icon-right='chevron-right'
			  icon-pack='fas'
			  type='is-primary-light'
			  size='is-large'
			  title='Next'
			  @click=startTimeMachine(FUTURE)>
	</b-button>
  </div>
</template>

<script>
import moment from 'moment'
import { EventBus } from '../eventBus.js'

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
