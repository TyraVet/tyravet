<template>
  <section>
	<b-sidebar type='is-light'
			   :fullheight='fullheight'
			   :fullwidth='fullwidth'
			   :open.sync='open'>
	  <div class='p-1'>
		<b-menu>
		  <b-menu-list label='Menu'>
			<span @click=changeSideBarState()>
			  <b-menu-item label='Panel'
						   icon-pack='fas'
						   icon='database'
						   tag='router-link'
						   to='/panel'>
			  </b-menu-item>
			</span>
			<b-menu-item label='Inventory'
						 icon-pack='fas'
						 icon='warehouse'>
			  <b-menu-item label='Home'
						   icon-pack='fas'
						   icon='home'>
			  </b-menu-item>
			</b-menu-item>
			<b-menu-item label='Schedule'
						 icon-pack='fas'
						 icon='calendar'>
			  <b-menu-item label='Home'
						   icon-pack='fas'
						   icon='home'>
			  </b-menu-item>
			</b-menu-item>
		  </b-menu-list>
		  <b-menu-list label='Actions'>
			<b-menu-item label='Log Out'
						 icon-pack='fas'
						 icon='sign-out-alt'>
			</b-menu-item>
		  </b-menu-list>
		  <br>
		  <b-button type='is-primary'
					icon-pack='fas'
					icon-left='times'
					@click=changeSideBarState()>
			Close
		  </b-button>
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
