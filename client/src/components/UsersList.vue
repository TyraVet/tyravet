<template>
  <div class='users-list'>
	<b-table :data='users'
			 :bordered='isBordered'
			 :mobile-cards='hasMobileCards'>
	  <b-table-column field='Username'
					  label='Username'
					  v-slot='props'>
		{{ props.row.username  }}
	  </b-table-column>
	  <b-table-column field='Type'
					  label='Type'
					  v-slot='props'>
		{{ props.row.type.name }}
	  </b-table-column>
	</b-table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'UsersList',
	data(){
		return{
			isBordered: true,
			hasMobileCards: true,
			users: []
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	methods: {
		init(){
			this.getUsers()
		},
		getUsers(){
			axios.get(process.env.VUE_APP_TYRAWEB_USERS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				console.log(response)
				this.users = response.data
			}).catch(error => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>
