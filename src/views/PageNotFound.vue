<template lang='pug'>
div#page-not-found-container
	div#page-not-found
		h1.is-size-1 {{ title }}
		b-button(
			title='Go Back'
			type='is-primary'
			@click='goBack()'
		) {{ labelButton }}
</template>

<script lang='js'>
export default {
	name: 'PageNotFound',
	data(){
		return{
			title: 'Page Not Found',
			labelButton: 'Go Back'
		}
	},
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>

<style scoped>
@import '../assets/css/page-not-found.css'
</style>
