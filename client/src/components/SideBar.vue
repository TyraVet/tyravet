<template>
  <section class='side-bar'>
	<b-sidebar type='is-primary-light'
			   :can-cancel='canCancel'
			   :fullheight='fullheight'
			   :fullwidth='fullwidth'
			   :open.sync='open'>
	  <div class='p-1'>
		<b-menu>
		  <b-menu-list label='Menu'>
			<b-menu-item label='Panel'
						 icon-pack='fas'
						 icon='database'
						 v-if='isAdmin'>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/panel'>
				</b-menu-item>
			  </span>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Services'
							 icon-pack='fas'
							 icon='database'
							 tag='router-link'
							 to='/panel/services'>
				</b-menu-item>
			  </span>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Breeds'
							 icon-pack='fas'
							 icon='database'
							 tag='router-link'
							 to='/panel/breeds'>
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
			  <span @click=changeSideBarState()>
				<b-menu-item label='Clients Book'
							 icon-pack='fas'
							 icon='address-book'
							 tag='router-link'
							 to='/clients'>
				</b-menu-item>
			  </span>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Pets Book'
							 icon-pack='fas'
							 icon='paw'
							 tag='router-link'
							 to='/pets'>
				</b-menu-item>
			  </span>
			</b-menu-item>
			<b-menu-item label='Hospital'
						 icon-pack='fas'
						 icon='hospital'>
			  <span @click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/hospital'>
				</b-menu-item>
			  </span>
			</b-menu-item>
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
		  </b-menu-list>
		  <b-menu-list label='Actions'>
			<span @click=logOut()>
			  <b-menu-item label='Log Out'
						   icon-pack='fas'
						   icon='sign-out-alt'>
			  </b-menu-item>
			</span>
		  </b-menu-list>
		  <b-menu-list label='About'>
			<b-menu-item label='Found a Bug?'
						 icon-pack='fas'
						 icon='bug'
						 tag='a'
						 :href='bug'
						 target='_blank'>
			</b-menu-item>
			<b-menu-item label='License'
						 icon-pack='fas'
						 icon='balance-scale'
						 tag='a'
						 :href='mit'
						 target='_blank'>
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
			canCancel: false,
			fullwidth: true,
			fullheight: true,
			bug: process.env.VUE_APP_NEW_ISSUE,
			mit: process.env.VUE_APP_MIT,
			isAdmin: false
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
		init(){
			if(this.user.type.name === 'admin')
				this.isAdmin = true
			else
				this.isAdmin = false
		},
		changeSideBarState(){
			this.$store.commit('changeSideBarState')
		},
		logOut(){
			this.$store.commit('logOutUser')
			this.$cookies.remove('user')
			this.changeSideBarState()
			this.$router.push({ name: 'log-in' })
		}
	},
	created(){
		this.init()
	}
}
</script>

<style>
.p-1 {
  padding: 1em;
}
</style>
