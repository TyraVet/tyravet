<template>
  <div class='login'>
	<LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
	name: 'Login',
	components: { LoginForm },
	data() {
		return {
		}
	}
}
</script>
