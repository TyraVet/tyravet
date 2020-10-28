<template lang='pug'>
section#vaccination-title
	b-icon(
		pack='fas'
		icon='syringe'
		size='is-large'
		type='is-icon'
	)
	h1.is-size-3 {{ title }}
	b-button(
		title='Add Vaccination/Deworming Log'
		type='is-primary'
		size='is-medium'
		has-icon
		icon-pack='fas'
		icon-left='plus'
		@click='launchVaccinationForm()'
	) {{ labelButton }}
</template>

<script lang='js'>
import VaccinationForm from '@/components/VaccinationForm.vue'

export default {
	name: 'VaccinationTitle',
	props: {
		petId: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			title: 'Vaccination and Deworming Record',
			labelButton: 'Add'
		}
	},
	methods: {
		launchVaccinationForm(){
			this.$buefy.modal.open({
				parent: this,
				component: VaccinationForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					petId: this.petId
				}
			})
		}
	}
}
</script>

<style scoped>
@import '../assets/css/vaccination-record.css'
</style>
