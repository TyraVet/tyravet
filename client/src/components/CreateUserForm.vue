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
			b-field( label='Username' )
				b-input(
					type='text'
					minlength='4'
					v-model='username'
					required
				)
			b-field#change-password(
				label='Change Password'
				v-if='userId'
			)
			b-field( label='Password' )
				b-input(
					type='password'
					minlength='8'
					v-model='password'
					required
				)
			b-field( label='Confirm Password' )
				b-input(
					type='password'
					minlength='8'
					:validation-message='validationMessageConfirmPassword'
					v-model='confirmPassword'
					required
				)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) Cancel
			b-button.button.is-success(
				@click='send()'
			) Accept
			b-message.message(
				title='Success'
				type='is-success'
				aria-close-label='Close message'
				icon-pack='fas'
				icon-size='is-medium'
				icon='check'
				has-icon
				auto-close
				v-if='status === OK'
			) {{ statusText }}
			b-message.message(
				title='Error'
				type='is-danger'
				aria-close-label='Close message'
				icon-pack='fas'
				icon-size='is-medium'
				icon='exclamation'
				has-icon
				auto-close
				v-if='status === ERROR'
			) {{ error }}
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 201
export const ERROR = 401

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
			ERROR,
			title: '',
			username: '',
			password: '',
			confirmPassword: '',
			validationMessageConfirmPassword: '',
			status: null,
			statusText: '',
			error: '',
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
			if(this.userId)
				this.title = 'Edit User'
			else
				this.title = 'Create User'
		},
		clearInput(){
			this.username = ''
			this.password = ''
			this.confirmPassword = ''
		},
		setOnSuccess(response){
			this.status = response.status
			this.statusText = response.statusText
			this.clearInput()

			if(this.status === this.OK)
				EventBus.$emit('update-users')
		},
		setOnError(error){
			if(error.response){
				this.status = error.response.status
				this.error = error.response.statusText
			}else if(error.request){
				this.error = error.request
			}else{
				this.error = error.message
			}
		},
		close(){
			this.$emit('close')
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_USER, {
				username: this.username,
				password: this.password,
				type: this.type
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)
			}).catch((error) => {
				this.setOnError(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
