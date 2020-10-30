<template lang='pug'>
div.users-header
	span.title-container
		h3.is-size-4.has-text-primary-dark {{ title }}
		b-button(
			title='Add User'
			type='is-primary'
			icon-pack='fas'
			icon-left='plus'
			@click='launchModal()'
		) {{ labelButton }}
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
