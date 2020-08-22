<template>
  <footer class='footer content has-text-centered'>
	<p class='has-text-primary-white'>
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

<style type="text/css" media="screen">

.footer {
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>
