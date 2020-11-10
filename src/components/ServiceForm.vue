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
			b-field#service-label-name( label='Name' )
			b-input#service-input-name(
				type='text'
				v-model='serviceName',
				required='true'
			)
			b-field#service-label-price( label='Price' )
			b-input#service-input-price(
				type='phonenumber'
				v-model='servicePrice',
				required='true'
			)
			b-field#service-label-type( label='Type' )
			b-select#service-select-type(
				v-model='serviceType'
				required='true'
			)
				option(
					v-for='(type, index) in TYPES'
					:key='index'
					:value='type') {{ type }}
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
				v-if='status === OK || status === CREATED'
			)
			b-icon#error-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === AUTH || status === NOT_FOUND || status === ERROR'
			)
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 200
export const CREATED = 201
export const AUTH = 401
export const NOT_FOUND = 404
export const ERROR = 406
export const TYPES = ['grooming', 'vaccination']

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
			OK,
			CREATED,
			AUTH,
			NOT_FOUND,
			ERROR,
			TYPES,
			title: '',
			serviceName: '',
			servicePrice: 0,
			serviceType: '',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			status: null
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		/* Init method to set the type of the form Edit or Create. */
		init(){
			if(this.serviceId){
				this.title = 'Edit Service'
				this.getService()
			}else{
				this.title = 'Create Service'
			}
		},
		/* Close the modal through emitting the event. */
		close(){
			this.$emit('close')
		},
		/* on Edit should send a request to the API's edit method,
		 * the same way on Create should send a request to the API's
		 * create method. */
		send(){
			if(this.serviceId)
				this.updateService()
			else
				this.createService()
		},
		/* Set Success status to show check icon. */
		setOnSuccess(response){
			this.status = response.status
			this.clearInputs()
			EventBus.$emit('update-services')
		},
		/* Set Error status to show warning icon. */
		setOnError(error){
			this.status = error.response.status
		},
		/* Clear inputs on success request. */
		clearInputs(){
			if(!this.serviceId){
				this.serviceName = ''
				this.servicePrice = 0
			}
		},
		/* POST request to the API. Only executes on Create type. */
		createService(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_SERVICE, {
				name: this.serviceName,
				price: this.servicePrice,
				type: this.serviceType
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		/* GET request to the API. Only executes on Edit type. */
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
		/* POST request to the API. Only executes on Edit type. */
		updateService(){
			axios.post(process.env.VUE_APP_TYRAWEB_UPDATE_SERVICE, {
				id: this.serviceId,
				name: this.serviceName,
				price: this.servicePrice,
				type: this.serviceType
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
