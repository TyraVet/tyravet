<template lang='pug'>
section#service-header.title-container
	h3.is-size-4.has-text-primary-dark {{ title }}
	b-button(
		type='is-primary'
		icon-pack='fas'
		icon-left='plus'
		@click='launchServiceForm()'
	) {{ labelButton }}
</template>

<script lang='js'>
import ServiceForm from '@/components/ServiceForm.vue'

export default {
	name: 'ServicedHeader',
	data(){
		return{
			title: 'Services',
			labelButton: 'Add'
		}
	},
	methods: {
		launchServiceForm(){
			this.$buefy.modal.open({
				parent: this,
				component: ServiceForm,
				hasModalCard: true,
				trapFocus: true
			})
		}
	}
}
</script>

<style scoped>
@import '../assets/css/titles.css'
</style>
