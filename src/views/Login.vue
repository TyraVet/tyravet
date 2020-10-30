<template lang='pug'>
div.login
	UserForm(
		type='login'
	)
</template>

<script lang='js'>
import UserForm from '@/components/UserForm.vue'

export default {
	name: 'LogIn',
	components: { UserForm }
}
</script>
