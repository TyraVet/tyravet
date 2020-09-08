<template>
  <div class='home'>
	<AppointmentsHeader></AppointmentsHeader>
	<AppointmentsList></AppointmentsList>
  </div>
</template>

<script>
import AppointmentsHeader from '@/components/AppointmentsHeader.vue'
import AppointmentsList from '@/components/AppointmentsList.vue'

export default {
	name: 'Home',
	components: {
		AppointmentsHeader,
		AppointmentsList
	}
}
</script>
