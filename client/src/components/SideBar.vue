<template>
  <section>
	<b-sidebar type="is-light"
			   :fullheight="fullheight"
			   :open.sync="open">
	  <div class="p-1">
		<b-menu>
		  <b-menu-list label="Menu">
			<b-menu-item icon="information-outline" label="Info"></b-menu-item>
			<b-menu-item icon="settings">
			  <b-menu-item icon="account" label="Users"></b-menu-item>
			</b-menu-item>
		  </b-menu-list>
		</b-menu>
	  </div>
	</b-sidebar>
  </section>
</template>

<script>
export default {
	data() {
		return {
			open: false,
			overlay: true,
			fullheight: true
		}
	}
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
