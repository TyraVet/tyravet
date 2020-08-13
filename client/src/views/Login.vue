<template>
  <div class='login'>
	<h1 class='has-text-primary'>{{ welcomeMessage }}</h1>
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
			welcomeMessage: 'Tyra Web'
		}
	}
}
</script>

<style></style>
