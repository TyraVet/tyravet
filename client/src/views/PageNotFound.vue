<template>
  <div class='page-not-found'>
	<h1 class='is-size-1'>Page Not Found</h1>
	<button @click=goBack()>Go Back</button>
  </div>
</template>

<script>
export default {
	name: 'PageNotFound',
	methods: {
		goBack(){
			this.$router.go(-1)
		}
	}
}
</script>
