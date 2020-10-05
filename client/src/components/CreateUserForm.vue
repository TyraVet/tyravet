<template>
  <form id='create-user-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		   <b-field label='Username'>
			 <b-input type='text'
					  minlength='4'
					  v-model='username'
					  required>
			 </b-input>
		   </b-field>
		   <b-field label='Password'>
			 <b-input type='password'
					  minlength='8'
					  v-model='password'
					  required>
			 </b-input>
		   </b-field>
		   <b-field label='Confirm Password'>
			 <b-input type='password'
					  minlength='8'
					  :validation-message='validationMessageConfirmPassword'
					  v-model='confirmPassword'
					  required>
			 </b-input>
		   </b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<b-button class='button is-success'
				@click=send()>
		  Accept
		</b-button>
		<b-message title='Success'
				   type='is-success'
				   aria-close-label='Close message'
				   icon-pack='fas'
				   icon-size='is-medium'
				   icon='check'
				   has-icon
				   auto-close
				   class='message'
				   v-if='status === OK'>
		  {{ statusText }}
		</b-message>
		<b-message title='Error'
				   type='is-danger'
				   aria-close-label='Close message'
				   icon-pack='fas'
				   icon-size='is-medium'
				   icon='exclamation'
				   has-icon
				   auto-close
				   class='message'
				   v-if='status === ERROR'>
		  {{ error }}
		</b-message>
	  </footer>
	</div>
  </form>
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 201
export const ERROR = 401

export default {
	name: 'CreateUserForm',
	data() {
		return {
			OK,
			ERROR,
			title: 'Create User',
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
	}
}
</script>
