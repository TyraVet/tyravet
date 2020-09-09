<template>
  <div class='appointments-header'>
	<b-button icon-left='chevron-left'
			  icon-pack='fas'
			  type='is-primary-light'
			  size='is-large'
			  title='Previous'>
	</b-button>
	<span class='date-title'
		  title='Pick date'>
	  <h1 class='is-size-4 has-text-centered has-text-weight-semibold'>
		{{ formattedToday }}
	  </h1>
	</span>
	<b-button icon-right='chevron-right'
			  icon-pack='fas'
			  type='is-primary-light'
			  size='is-large'
			  title='Next'>
	</b-button>
  </div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'AppointmentsHeader',
	data(){
		return{
			formattedToday: moment(this.today).format('MMMM Do YYYY')
		}
	},
	computed: {
		today(){
			return this.$store.state.today
		}
	}
}
</script>

<style>
@import '../assets/css/appointments-header.css'
</style>
