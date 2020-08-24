<template>
  <div class='user-form' @keyup.enter=send()>
	<form id='user-form'>
	  <section>
		<b-field :label='labelUsername'>
		  <b-input type='text'
				   v-model='username'
				   validation-message='Username Required'
				   required
				   autofocus></b-input>
		</b-field>
		<b-field :label='labelPassword'>
		  <b-input type='password'
				   v-model='password'
				   validation-message='Password Required'
				   required></b-input>
		</b-field>
		<b-field class='stay-logged-in'>
		  <b-switch type='is-primary'
					v-model='stayLoggedIn'>
			{{ labelStayLoggedIn }}
		  </b-switch>
		</b-field>
	  </section>
	  <section class='form-button'>
		<b-button type='is-success'
				  icon-pack='fas'
				  icon-left='sign-in-alt'
				  @click='send()'>
		  {{ labelButton }}
		</b-button>
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
			   auto-close
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
			labelStayLoggedIn: 'Stay Logged In?',
			labelButton: '',
			apiCall: '',
			username: '',
			password: '',
			stayLoggedIn: false,
			status: null,
			statusText: '',
			error: ''
		}
	},
	methods: {
		/* Know if the user is going to log in or sign up a new user.
		 * So when the component is mounted we initialize where are
		 * we going to send our request */
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
		clearErrors(){
			this.status = null
			this.error = ''
		},
		setOnSuccess(response){
			this.status = response.status
			this.statusText = response.statusText +
							  response.data.msg ? (' ' + response.data.msg + '.') : '.'
			this.fillUser({
				_id: response.data.user._id,
				username: response.data.user.username,
				type: response.data.user.type,
				token: response.data.accessToken
			})
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
		setCookies(){
			this.$cookies.set('user', this.user)
		},
		/* Commit to our Vuex Store and have the user that is going
		 * to be logged in */
		fillUser(user){
			this.$store.commit('fillUser', user)
		},
		/* POST request to out API */
		send(){
			axios.post(this.apiCall, {
				username: this.username,
				password: this.password
			}).then((response) => {
				this.setOnSuccess(response)

				if(this.type === this.labelLogIn && this.stayLoggedIn)
					this.setCookies()
			}).catch((error) => {
				this.setOnError(error)

				/* To clear the error and status variable so we
				 * can show again our error mesasge if needed. */
				setTimeout(this.clearErrors, 2000)
			})

			if(this.type === this.labelSignUp)
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
