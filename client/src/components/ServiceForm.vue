<template lang='pug'>
form#service-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field( label='Name' )
			b-input(
				type='text'
				v-model='serviceName',
				required
			)
			b-field( label='Price' )
			b-input(
				type='phonenumber'
				v-model='servicePrice',
				required
			)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) {{ labelButtonCancel }}
			b-button.button.is-success(
				@click='send()'
			) {{ labelButtonAccept }}
			b-icon#success-icon(
				title='Success'
				type='is-success'
				pack='fas'
				size='is-large'
				icon='check'
				v-if='status === 201 || status === 200'
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === 401 || status === 403 || status === 404'
			)
</template>

<script lang='js'>
import axios from 'axios'

export default {
	name: 'ServiceForm',
	props: {
		serviceId: {
			type: String,
			default: null,
			required: false
		}
	},
	data(){
		return{
			title: '',
			serviceName: '',
			servicePrice: 0,
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			status: 0
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		init(){
			if(this.serviceId){
				this.title = 'Edit Service'
				this.getService()
			}else{
				this.title = 'Create Service'
			}
		},
		close(){
			this.$emit('close')
		},
		send(){
			if(this.serviceId)
				this.updateService()
			else
				this.createService()
		},
		setOnSuccess(response){
			this.status = response.status
		},
		setOnError(error){
			this.status = error.response.status
		},
		clearInputs(){
			this.serviceName = ''
			this.servicePrice = 0
		},
		createService(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_SERVICE, {
				name: this.serviceName,
				price: this.servicePrice
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
				this.clearInputs()
			}).catch(error => {
				this.setOnError(error)
			})
		},
		getService(){
			axios.get(process.env.VUE_APP_TYRAWEB_SERVICE, {
				params: {
					id: this.serviceId
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.serviceName = response.data.name
				this.servicePrice = response.data.price
			}).catch(error => {
				console.error(error)
			})
		},
		updateService(){
			axios.post(process.env.VUE_APP_TYRAWEB_UPDATE_SERVICE, {
				id: this.serviceId,
				name: this.serviceName,
				price: this.servicePrice
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
