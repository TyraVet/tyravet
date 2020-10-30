<template lang='pug'>
div.user-form(
  @keyup.enter='send()'
)
	form#user-form
		section
			b-field( :label='labelUsername' )
			b-input(
				type='text'
				v-model='username'
				validation-message='Username Required'
				required
				autofocus)
			b-field( :label='labelPassword' )
			b-input(
				type='password'
				v-model='password'
				validation-message='Password Required'
				required
			)
			b-field.stay-logged-in
			b-checkbox(
				type='is-primary'
				v-model='stayLoggedIn'
			) {{ labelStayLoggedIn }}
		section.form-button
			b-button(
				type='is-success'
				icon-pack='fas'
				icon-left='sign-in-alt'
				@click='send()'
			) {{ labelButton }}
	br
	b-message.message(
		title='Success'
		type='is-success'
		aria-close-label='Close message'
		icon-pack='fas'
		icon-size='is-medium'
		icon='check'
		has-icon
		auto-close
		v-if='status === 201 || status === 200'
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
		v-if='status === 401 || status === 404'
	) {{ error }}
</template>

<script lang='js'>
import axios from 'axios'

export default {
	name: 'UserForm',
	data(){
		return {
			labelLogIn: 'login',
			labelUsername: 'Username',
			labelPassword: 'Password',
			labelStayLoggedIn: 'Stay Logged In?',
			labelButton: 'Log In',
			username: '',
			password: '',
			stayLoggedIn: false,
			status: null,
			statusText: '',
			error: ''
		}
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
	},
	methods: {
		clearErrors(){
			this.status = null
			this.error = ''
		},
		setOnSuccess(response){
			this.status = response.status
			this.statusText = response.statusText +
							  response.data.msg ? (' ' + response.data.msg + '.') : '.'
			const user = {
				_id: response.data.user._id,
				username: response.data.user.username,
				type: response.data.user.type,
				token: response.data.accessToken
			}
			this.fillUser(user)

			if(this.stayLoggedIn)
				this.setCookies()
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
		/* GET request to fetch user */
		send(){
			axios.get(process.env.VUE_APP_TYRAWEB_LOGIN_USER, {
				params: {
					username: this.username,
					password: this.password
				}
			}).then((response) => {
				this.setOnSuccess(response)
			}).catch((error) => {
				this.setOnError(error)

				/* To clear the error and status variable so we
				 * can show again our error mesasge if needed. */
				setTimeout(this.clearErrors, 2000)
			})
		}
	}
}
</script>

<style>
@import '../assets/css/user-form.css'
</style>
