<template>
  <div class='sign-up-form'>
	<form id='sign-up-form'>
	  <section>
		<b-field :label='labelUsername'>
		  <b-input type='text' v-model='username'></b-input>
		</b-field>
		<b-field :label='labelPassword'>
		  <b-input type='password' v-model='password'></b-input>
		</b-field>
	  </section>
	  <section class='form-button'>
		<b-button tag='input'
				  type='is-success'
				  value='Sign Up'
				  @click='signUpUser()' />
	  </section>
	</form>
	<br>
	<b-message title='Success'
			   type='is-success'
			   aria-close-label='Close message'
			   icon-pack='fas'
			   icon-size='is-medium'
			   icon='check'
			   has-icon
			   auto-close
			   duration='3000'
			   class='message'
			   v-if='status === 201'>
	  {{ statusText }}
	</b-message>
	<b-message title='Error'
			   type='is-danger'
			   aria-close-label='Close message'
			   icon-pack='fas'
			   icon-size='is-medium'
			   icon='exclamation'
			   has-icon
			   class='message'
			   v-if='status === 401'>
	  {{ error }}
	</b-message>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'SignUpForm',
	data() {
		return {
			labelUsername: 'Username',
			labelPassword: 'Password',
			username: '',
			password: '',
			status: null,
			statusText: '',
			error: ''
		}
	},
	methods: {
		clearInputs(){
			this.username = ''
			this.password = ''
		},
		signUpUser(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_USER, {
				username: this.username,
				password: this.password
			}).then((response) => {
				this.status = response.status
				this.statusText = response.statusText
			}).catch((error) => {
				if(error.response){
					this.status = error.response.status
					this.error = error.response.statusText
				}else if(error.request){
					this.error = error.request
				}else{
					this.error = error.message
				}
			})
			this.clearInputs()
		}
	}
}
</script>

<style>
@import '../assets/css/sign-up-form.css'
</style>
