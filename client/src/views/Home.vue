<template>
  <div class='home'>
	<h1 class='is-size-5'>Today is {{ today }}</h1>
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
			today: moment(new Date()).format('MMMM Do YYYY')
		}
	}
}
</script>
