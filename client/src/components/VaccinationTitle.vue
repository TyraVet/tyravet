<template lang='pug'>
section#vaccination-title
	b-icon(
		pack='fas'
		icon='syringe'
		size='is-large'
		type='is-icon'
	)
	h1.is-size-3 {{ title }}
	b-button(
		title='Add Vaccination/Deworming Log'
		type='is-primary'
		size='is-medium'
		has-icon
		icon-pack='fas'
		icon-left='plus'
	) {{ labelButton }}
</template>

<script lang='js'>
export default {
	name: 'VaccinationTitle',
	data(){
		return{
			title: 'Vaccination and Deworming Record',
			labelButton: 'Add'
		}
	}
}
</script>

<style scoped>
@import '../assets/css/vaccination-record.css'
</style>
