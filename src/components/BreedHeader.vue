<template lang='pug'>
section#breed-header.title-container
	h3.is-size-4.has-text-primary-dark {{ title }}
	b-button(
		type='is-primary'
		icon-pack='fas'
		icon-left='plus'
		@click='launchForm()'
	) {{ labelButton }}
</template>

<script lang='js'>
export default {
	name: 'BreedHeader',
	data(){
		return{
			title: 'Breeds',
			labelButton: 'Add'
		}
	},
	methods: {
		launchForm(){
			this.$router.push({ path: '/panel/breeds/create' })
		}
	}
}
</script>

<style scoped>
@import '../assets/css/titles.css'
</style>
