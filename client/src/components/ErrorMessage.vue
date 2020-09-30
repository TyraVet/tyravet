<template>
  <section id='error-message'
		   class='has-background-danger-alpha'>
	<b-icon pack='fas'
			icon='exclamation-circle'
			size='is-large'
			type='is-danger'>
	</b-icon>
	<span id='message'>
	  <h1 :class='isForModal ? white : black' class='is-size-5'>
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
		},
		isForModal: {
			type: Boolean,
			default: false
		}
	},
	data(){
		return{
			black: 'has-text-black',
			white: 'has-text-white'
		}
	}
}
</script>

<style scoped>
@import '../assets/css/error-message.css'
</style>
