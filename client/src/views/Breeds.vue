<template>
  <div class='breeds'>
	<span class='title-container'>
	  <h3 class='is-size-4 has-text-primary-dark'>Breeds</h3>
	  <b-button type='is-primary'
				icon-pack='fas'
				icon-left='plus'
				@click=changeModalState()>
		Add
	  </b-button>
	</span>
  </div>
</template>

<script>
import BreedForm from '@/components/BreedForm.vue'

export default {
	name: 'Breeds',
	methods: {
		changeModalState(){
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

<style>
@import '../assets/css/titles.css'
</style>
