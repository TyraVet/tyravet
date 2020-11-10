<template lang='pug'>
div.login
	h1.is-size-1.has-text-primary-dark {{ title }}
	UserForm(
		type='login'
	)
</template>

<script lang='js'>
import UserForm from '@/components/UserForm.vue'

export default {
	name: 'LogIn',
	components: { UserForm },
	data(){
		return{
			title: 'TyraWeb'
		}
	}
}
</script>

<style lang='css'>
 @import '../assets/css/login-view.css';
</style>
