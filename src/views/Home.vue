<template lang='pug'>
div.home
	AppointmentsHeader
	AppointmentsList
</template>

<script lang='js'>
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
