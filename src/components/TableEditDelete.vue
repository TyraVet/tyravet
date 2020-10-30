<template lang='pug'>
section#table-edit-delete
	p {{ text }}
	div#button-container
		b-button#edit(
			title='Edit'
			type='is-warning'
			icon-pack='fas'
			icon-left='edit'
			class='has-text-dark'
			@click='edit()'
		)
		b-button#delete(
			title='Delete'
			type='is-danger'
			icon-pack='fas'
			icon-left='trash-alt'
			class='has-text-white'
			@click='launchDeleteConfirmation()'
		)
</template>

<script lang='js'>
import ServiceForm from '@/components/ServiceForm.vue'
import CreateUserForm from '@/components/CreateUserForm.vue'
import BreedForm from '@/components/BreedForm.vue'
import DeleteConfirmation from '@/components/DeleteConfirmation.vue'

export default {
	name: 'TableEditDelete',
	props: {
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		},
		userType: {
			type: String,
			required: false,
			default: null
		}
	},
	data(){
		return{
			isForServices: false,
			isForUsers: false,
			isForBreed: false
		}
	},
	methods: {
		init(){
			if(this.type === 'service')
				this.isForServices = true
			else if(this.type === 'user')
				this.isForUsers = true
			else if(this.type === 'breed')
				this.isForBreed = true
		},
		edit(){
			if(this.isForServices)
				this.launchServiceForm()
			else if(this.isForUsers)
				this.launchUserForm()
			else if(this.isForBreed)
				this.launchBreedForm()
		},
		launchDeleteConfirmation(){
			this.$buefy.modal.open({
				parent: this,
				component: DeleteConfirmation,
				hasModalCard: true,
				trapFocus: true,
				props: {
					type: this.type,
					objectId: this.id,
					userType: this.userType
				}
			})
		},
		launchServiceForm(){
			this.$buefy.modal.open({
				parent: this,
				component: ServiceForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					serviceId: this.id
				}
			})
		},
		launchUserForm(){
			this.$buefy.modal.open({
				parent: this,
				component: CreateUserForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					userId: this.id
				}
			})
		},
		launchBreedForm(){
			this.$buefy.modal.open({
				parent: this,
				component: BreedForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					breedId: this.id
				}
			})
		}
	},
	created(){
		this.init()
	}
}
</script>

<style scoped>
@import '../assets/css/table-edit-delete.css'
</style>
