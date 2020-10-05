<template>
  <div class='users-header'>
	<span class='title-container'>
	  <h3 class='is-size-4 has-text-primary-dark'>{{ title }}</h3>
	  <b-button title='Add User'
				type='is-primary'
				icon-pack='fas'
				icon-left='plus'
				@click=launchModal()>
		{{ labelButton }}
	  </b-button>
	</span>
  </div>
</template>

<script lang='js'>
import CreateUserForm from '@/components/CreateUserForm.vue'

export default {
	name: 'UsersHeader',
	data(){
		return{
			title: 'Users',
			labelButton: 'Add'
		}
	},
	methods: {
		launchModal(){
			this.$buefy.modal.open({
				parent: this,
				component: CreateUserForm,
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
