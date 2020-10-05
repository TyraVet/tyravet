<template>
  <div class='page-not-found-container'>
	<div class='page-not-found'>
	  <h1 class='is-size-1'>Page Not Found</h1>
	  <b-button title='Go Back'
				type='is-primary'
				@click=goBack()>
		Go Back
	  </b-button>
	</div>
  </div>
</template>

<script lang='js'>
export default {
	name: 'PageNotFound',
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	}
}
</script>

<style scoped>
@import '../assets/css/page-not-found.css'
</style>
