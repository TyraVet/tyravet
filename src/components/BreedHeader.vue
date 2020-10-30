<template lang='pug'>
section#breed-header.title-container
	h3.is-size-4.has-text-primary-dark {{ title }}
	b-button(
		type='is-primary'
		icon-pack='fas'
		icon-left='plus'
		@click='launchModal()'
	) {{ labelButton }}
</template>

<script lang='js'>
import BreedForm from '@/components/BreedForm.vue'

export default {
	name: 'BreedHeader',
	data(){
		return{
			title: 'Breeds',
			labelButton: 'Add'
		}
	},
	methods: {
		launchModal(){
			this.$buefy.modal.open({
				parent: this,
				component: BreedForm,
				hasModalCard: true,
				trapFocus: true
			})
		}
	}
}
</script>

<style scoped>
@import '../assets/css/titles.css'
</style>
