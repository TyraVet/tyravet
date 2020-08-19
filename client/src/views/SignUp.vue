<template>
  <div class='sign-up'>
	<UserForm type='signup'></UserForm>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
	name: 'SignUp',
	components: { UserForm },
	data() {
		return {
		}
	}
}
</script>
