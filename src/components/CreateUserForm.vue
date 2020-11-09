<template lang='pug'>
form#create-user-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field#username( label='Username' )
				b-input(
					type='text'
					minlength='4'
					v-model='username'
					required='true'
				)
			b-field#change-password(
				label='Change Password'
				v-if='userId'
			)
			b-field#password( label='Password' )
				b-input(
					type='password'
					minlength='8'
					v-model='password'
					required='true'
				)
			b-field#confirm-password( label='Confirm Password' )
				b-input(
					type='password'
					minlength='8'
					:validation-message='validationMessageConfirmPassword'
					v-model='confirmPassword'
					required='true'
				)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) Cancel
			b-button.button.is-success(
				@click='send()'
			) Accept
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
				v-if='status === AUTH || status === ERROR'
			)
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 200
export const CREATED = 201
export const AUTH = 401
export const ERROR = 406

export default {
	name: 'CreateUserForm',
	props: {
		userId: {
			type: String,
			default: null,
			required: false
		}
	},
	data() {
		return {
			OK,
			CREATED,
			AUTH,
			ERROR,
			title: '',
			username: '',
			password: '',
			confirmPassword: '',
			validationMessageConfirmPassword: '',
			status: null,
			type: 'medic'
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		confirmPassword(){
			if(this.password !== this.confirmPassword)
				this.validationMessageConfirmPassword = "Passwords doesn't match"
			else
				this.validationMessageConfirmPassword = ''
		}
	},
	methods: {
		/* Init method to set the type of the form Edit or Create. */
		init(){
			if(this.userId){
				this.title = 'Edit User'
				this.getUser()
			}else{
				this.title = 'Create User'
			}
		},
		close(){
			this.$emit('close')
		},
		send(){
			if(this.userId)
				this.updateUser()
			else
				this.createUser()
		},
		clearInput(){
			if(this.userId){
				this.password = ''
				this.confirmPassword = ''
			}else{
				this.username = ''
				this.password = ''
				this.confirmPassword = ''
			}
		},
		setOnSuccess(response){
			this.status = response.status
			this.clearInput()
			EventBus.$emit('update-users')
		},
		setOnError(error){
			if(error.response)
				this.status = error.response.status
		},
		/* POST request to create an User. */
		createUser(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_USER, {
				username: this.username,
				password: this.password,
				type: this.type
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
		/* GET request to retreive the user we want to edit. */
		getUser(){
			axios.get(process.env.VUE_APP_TYRAWEB_FIND_USER, {
				params: {
					id: this.userId
				},
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.username = response.data.username
				this.type = response.data.type.name
			}).catch(error => {
				this.setOnError(error)
			})
		},
		/* POST request to edit the user. */
		updateUser(){
			axios.post(process.env.VUE_APP_TYRAWEB_UPDATE_USER, {
				id: this.userId,
				username: this.username,
				password: this.password,
				type: this.type
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
