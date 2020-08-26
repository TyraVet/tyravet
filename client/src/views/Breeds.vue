<template>
  <div class='breeds'>
	<span class='title-container'>
	  <h3 class='is-size-4 has-text-primary-dark'>{{ title }}</h3>
	  <b-button type='is-primary'
				icon-pack='fas'
				icon-left='plus'
				@click=launchModal()>
		{{ labelButton }}
	  </b-button>
	</span>
	<BreedList></BreedList>
  </div>
</template>

<script>
import BreedList from '@/components/BreedList.vue'
import BreedForm from '@/components/BreedForm.vue'

export default {
	name: 'Breeds',
	components: { BreedList },
	data() {
		return {
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

<style>
@import '../assets/css/titles.css'
</style>
