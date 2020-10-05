<template>
  <div class='sign-up'>
	<UserForm type='signup'></UserForm>
  </div>
</template>

<script lang='js'>
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
