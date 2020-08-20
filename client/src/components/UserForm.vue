<template>
  <div class='user-form'>
	<form id='user-form'>
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
				  :value='labelButton'
				  @click='send()' />
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
			   class='message'
			   v-if='status === 201 || status === 200'>
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
			   v-if='status === 401 || status === 404'>
	  {{ error }}
	</b-message>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'UserForm',
	props: {
		type: String
	},
	data(){
		return {
			labelSignUp: 'signup',
			labelLogIn: 'login',
			labelUsername: 'Username',
			labelPassword: 'Password',
			labelButton: '',
			apiCall: '',
			username: '',
			password: '',
			status: null,
			statusText: '',
			error: ''
		}
	},
	methods: {
		init(){
			if(this.type === this.labelSignUp){
				this.labelButton = 'Sign Up'
				this.apiCall = process.env.VUE_APP_TYRAWEB_CREATE_USER
			}else if(this.type === this.labelLogIn){
				this.labelButton = 'Log In'
				this.apiCall = process.env.VUE_APP_TYRAWEB_LOGIN_USER
			}
		},
		clearInputs(){
			this.username = ''
			this.password = ''
		},
		fillUser(user){
			this.$store.commit('fillUser', user)
		},
		send(){
			axios.post(this.apiCall, {
				username: this.username,
				password: this.password
			}).then((response) => {
				this.status = response.status
				this.statusText = response.statusText + response.data.msg ? (' ' + response.data.msg + '.') : '.'
				this.fillUser({
					_id: response.data.user._id,
					username: response.data.user.username,
					token: 'nothingfornow'
				})
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
	},
	mounted(){
		this.init()
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		/* When user is logged in redirect to Home */
		user: function(){
			this.$router.push('/')
		}
	}
}
</script>

<style>
@import '../assets/css/user-form.css'
</style>
