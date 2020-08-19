<template>
  <div class='log-in-form'>
	<form id='log-in-form'>
	  <section>
		<b-field :label='labelUsername'>
		  <b-input type='text' v-model='username'></b-input>
		</b-field>
		<b-field :label='labelPassword'>
		  <b-input type='password' v-model='password'></b-input>
		</b-field>
	  </section>
	  <section></section>
	</form>
  </div>
</template>

<script>
export default {
	name: 'LoginForm',
	data() {
		return {
			labelUsername: 'Username',
			labelPassword: 'Password',
			username: '',
			password: ''
		}
	}
}
</script>

<style>
@import '../assets/css/log-in-form.css'
</style>
