<template>
  <section id='vaccination-title'>
	<h1 class='is-size-2'>{{ title }}</h1>
	<b-button title='Add Vaccination/Deworming Log'
			  type='is-primary'
			  size='is-medium'
			  has-icon
			  icon-pack='fas'
			  icon-left='plus'>
	  {{ labelButton }}
	</b-button>
  </section>
</template>

<script>
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
