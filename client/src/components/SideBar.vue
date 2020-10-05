<template>
  <section id='side-bar'>
	<b-sidebar type='is-primary-light'
			   :can-cancel='canCancel'
			   :fullheight='fullheight'
			   :fullwidth='fullwidth'
			   :open.sync='open'>
	  <div id='menu-container'>
		<b-menu>
		  <b-menu-list label='Menu'>
			<b-menu-item id='panel'
						 label='Panel'
						 icon-pack='fas'
						 icon='database'
						 v-if='isAdmin'>
			  <span id='panel-home'
					@click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/panel'>
				</b-menu-item>
			  </span>
			  <span id='panel-services'
					@click=changeSideBarState()>
				<b-menu-item label='Services'
							 icon-pack='fas'
							 icon='database'
							 tag='router-link'
							 to='/panel/services'>
				</b-menu-item>
			  </span>
			  <span id='panel-breeds'
					@click=changeSideBarState()>
				<b-menu-item label='Breeds'
							 icon-pack='fas'
							 icon='database'
							 tag='router-link'
							 to='/panel/breeds'>
				</b-menu-item>
			  </span>
			</b-menu-item>
			<b-menu-item id='schedule'
						 label='Schedule'
						 icon-pack='fas'
						 icon='calendar'>
			  <span id='schedule-home'
					@click=changeSideBarState()>
				<b-menu-item label='Home'
							 icon-pack='fas'
							 icon='home'
							 tag='router-link'
							 to='/'>
				</b-menu-item>
			  </span>
			  <span id='schedule-clients'
					@click=changeSideBarState()>
				<b-menu-item label='Clients Book'
							 icon-pack='fas'
							 icon='address-book'
							 tag='router-link'
							 to='/clients'>
				</b-menu-item>
			  </span>
			  <span id='schedule-pets'
					@click=changeSideBarState()>
				<b-menu-item label='Pets Book'
							 icon-pack='fas'
							 icon='paw'
							 tag='router-link'
							 to='/pets'>
				</b-menu-item>
			  </span>
			</b-menu-item>
			<b-menu-item id='hospital'
						 label='Hospital'
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
			<b-menu-item id='inventory'
						 label='Inventory'
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
		  <b-menu-list id='actions'
					   label='Actions'>
			<span @click=logOut()>
			  <b-menu-item label='Log Out'
						   icon-pack='fas'
						   icon='sign-out-alt'>
			  </b-menu-item>
			</span>
		  </b-menu-list>
		  <b-menu-list id='about'
					   label='About'>
			<b-menu-item label='Contributing'
						 icon-pack='fas'
						 icon='beer'
						 tag='a'
						 :href='contribute'
						 target='_blank'>
			</b-menu-item>
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

<script lang='js'>
export default {
	name: 'SideBar',
	data() {
		return {
			canCancel: false,
			fullwidth: true,
			fullheight: true,
			contribute: process.env.VUE_APP_CONTRIBUTE,
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

<style scoped>
#menu-container {
  padding: 1em;
}
</style>
