<template lang='pug'>
section#error-message.has-background-danger-alpha
	b-icon(
		pack='fas'
		icon='exclamation-circle'
		size='is-large'
		type='is-danger'
	)
	span#message
		h1(
			:class='isForModal ? white : black' class='is-size-5'
		) {{ message }}
</template>

<script lang='js'>
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
