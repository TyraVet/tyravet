<template lang='pug'>
section#service-header.title-container
	h3.is-size-4.has-text-primary-dark {{ title }}
	b-button(
		type='is-primary'
		icon-pack='fas'
		icon-left='plus'
		@click='launchModal()'
	) {{ labelButton }}
</template>

<script lang='js'>
export default {
	name: 'ServicedHeader',
	data(){
		return{
			title: 'Services',
			labelButton: 'Add'
		}
	},
	methods: {
		launchModal(){
		}
	}
}
</script>

<style scoped>
@import '../assets/css/titles.css'
</style>
