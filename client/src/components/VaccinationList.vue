<template>
  <section id='vaccination-list'>
	<span id='no-records'>
	  <b-message id='message-container'
				 type='is-danger'
				 icon-pack='fas'
				 icon-size='is-large'
				 icon='exclamation-circle'
				 has-icon
				 class='message'>
		<h1 id='message'
			class='has-text-danger'>
		  {{ noRecords }}
		</h1>
	  </b-message>
	</span>
  </section>
</template>

<script>
export default {
	name: 'VaccinationList',
	data(){
		return{
			records: [],
			noRecords: 'There are no Vaccination/Deworming Records for this pet. Add one!'
		}
	}
}
</script>
