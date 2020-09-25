<template>
  <section id='medical-title'>
	<b-icon pack='fas'
			icon='stethoscope'
			size='is-large'
			type='is-icon'></b-icon>
	<h1 class='is-size-3'>{{ title }}</h1>
  </section>
</template>

<script>
export default {
	name: 'MedicalTitle',
	data(){
		return{
			title: 'Medical Record'
		}
	}
}
</script>
