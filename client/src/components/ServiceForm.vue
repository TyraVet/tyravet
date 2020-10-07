<template lang='pug'>
section#service-form
</template>

<script lang='js'>
export default {
	name: 'ServiceForm',
	props: {
		serviceId: {
			type: String,
			default: '',
			required: false
		}
	},
	data(){
		return{
			serviceName: '',
			servicePrice: 0
		}
	}
}
</script>
