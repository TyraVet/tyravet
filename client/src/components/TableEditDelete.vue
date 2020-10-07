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
			@click='deleteAt()'
		)
</template>

<script lang='js'>
import ServiceForm from '@/components/ServiceForm.vue'

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
		}
	},
	data(){
		return{
			isForServices: false
		}
	},
	methods: {
		init(){
			if(this.type === 'service')
				this.isForServices = true
		},
		edit(){
			if(this.isForServices)
				this.launchServiceForm()
		},
		deleteAt(){},
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
