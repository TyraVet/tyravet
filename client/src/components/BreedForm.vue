<template lang='pug'>
form#breed-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button(
				type='button'
				class='delete'
				@click='close()'
			)
		section.modal-card-body
			b-field( label='Name' )
			b-input(
				type='text'
				v-model='breedName'
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

export const OK = 200
export const CREATED = 201
export const AUTH = 401
export const NOT_FOUND = 404
export const ERROR = 406

export default {
	name: 'BreedForm',
	props: {
		breedId: {
			type: String,
			required: false,
			default: null
		}
	},
	data() {
		return {
			OK,
			CREATED,
			AUTH,
			NOT_FOUND,
			ERROR,
			title: 'Create Breed',
			labelButtonCancel: 'Cancel',
			labelButtonAccept: 'Accept',
			breedName: '',
			status: null
		}
	},
	methods: {
		init(){
			if(this.breedId){
				this.title = 'Edit Breed'
				this.getBreed()
			}
		},
		clearInput(){
			this.breedName = ''
		},
		setOnSuccess(response){
			this.status = response.status

			if(!this.breedId)
				this.clearInput()
		},
		fillOnSuccess(response){
			this.breedName = response.data.name
		},
		setOnError(error){
			if(error.response)
				this.status = error.response.status
		},
		close(){
			this.$emit('close')
		},
		send(){
			if(!this.breedId)
				this.createBreed()
			else
				this.updateBreed()
		},
		createBreed(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_BREED, {
				name: this.breedName
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		getBreed(){
			axios.get(process.env.VUE_APP_TYRAWEB_FIND_BREED, {
				params: {
					id: this.breedId
				},
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.fillOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		updateBreed(){
			axios.post(process.env.VUE_APP_TYRAWEB_UPDATE_BREED, {
				id: this.breedId,
				name: this.breedName
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
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
