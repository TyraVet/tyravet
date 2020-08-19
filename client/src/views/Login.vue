<template>
  <div class='login'>
	<UserForm type='login'></UserForm>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
	name: 'LogIn',
	components: { UserForm },
	data() {
		return {
		}
	}
}
</script>
