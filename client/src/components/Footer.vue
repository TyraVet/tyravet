<template>
  <footer class='footer content has-text-centered'>
	<p>
	  <a :href='bug'>Found a Bug?</a> |
	  <a :href='mit'>License</a>
	</p>
  </footer>
</template>

<script>
export default {
	name: 'Footer',
	data(){
		return {
			bug: process.env.VUE_APP_NEW_ISSUE,
			mit: process.env.VUE_APP_MIT
		}
	}
}
</script>

<style scoped>
.footer {
  background-color: #E0E0E0;
}
</style>
