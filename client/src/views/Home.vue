<template>
  <div class='home'>
	<h1 class='is-size-4 has-text-centered has-text-weight-semibold'>{{ formattedToday }}</h1>
	<AppointmentsList></AppointmentsList>
  </div>
</template>

<script>
import moment from 'moment'
import AppointmentsList from '@/components/AppointmentsList.vue'

export default {
	name: 'Home',
	components: { AppointmentsList },
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
