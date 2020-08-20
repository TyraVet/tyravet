<template>
  <section>
	<b-sidebar type='is-light'
			   :fullheight='fullheight'
			   :fullwidth='fullwidth'
			   :open.sync='open'>
	  <div class='p-1'>
		<b-menu>
		  <b-menu-list label='Menu'>
			<b-menu-item icon='information-outline' label='Info'></b-menu-item>
			<b-menu-item icon='settings'>
			  <b-menu-item icon='account' label='Users'></b-menu-item>
			</b-menu-item>
		  </b-menu-list>
		  <span @click=changeSideBarState()>Close</span>
		</b-menu>
	  </div>
	</b-sidebar>
  </section>
</template>

<script>
export default {
	name: 'SideBar',
	data() {
		return {
			fullwidth: true,
			fullheight: true
		}
	},
	computed: {
		open(){
			return this.$store.state.sideBarOpen
		}
	},
	methods: {
		changeSideBarState(){
			this.$store.commit('changeSideBarState')
		}
	}
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
