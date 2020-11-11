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
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
