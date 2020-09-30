<template>
  <section id='error-message'
		   class='has-background-danger-alpha'>
	<b-icon pack='fas'
			icon='exclamation-circle'
			size='is-large'
			type='is-danger'>
	</b-icon>
	<span id='message'>
	  <h1 class='has-text-black is-size-5'>
		{{ message }}
	  </h1>
	</span>
  </section>
</template>

<script>
export default {
	name: 'ErrorMessage',
	props: {
		message: {
			type: String,
			required: true
		}
	}
}
</script>

<style scoped>
@import '../assets/css/error-message.css'
</style>
