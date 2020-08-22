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
			  <span @click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/inventory'>
				</b-menu-item>
			  </span>
			</b-menu-item>
			<b-menu-item label='Schedule'
						 icon-pack='fas'
						 icon='calendar'>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/'>
				</b-menu-item>
			  </span>
			</b-menu-item>
		  </b-menu-list>
		  <b-menu-list label='Actions'>
			<span @click=logOut()>
			  <b-menu-item label='Log Out'
						   icon-pack='fas'
						   icon='sign-out-alt'>
			  </b-menu-item>
			</span>
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
		user(){
			return this.$store.state.user
		},
		open(){
			return this.$store.state.sideBarOpen
		}
	},
	methods: {
		changeSideBarState(){
			this.$store.commit('changeSideBarState')
		},
		logOut(){
			this.$store.commit('logOutUser')
			this.changeSideBarState()
			this.$router.push({ name: 'log-in' })
		}
	}
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
