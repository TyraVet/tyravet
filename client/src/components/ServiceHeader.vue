<template>
  <section id='service-header' class='title-container'>
	<h3 class='is-size-4 has-text-primary-dark'>{{ title }}</h3>
	<b-button type='is-primary'
			  icon-pack='fas'
			  icon-left='plus'
			  @click='launchModal()'>
	  {{ labelButton }}
	</b-button>
  </section>
</template>

<script>
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
