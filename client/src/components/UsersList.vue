<template lang='pug'>
section#users-list
	b-table(
		:data='users'
		:bordered='isBordered'
		:mobile-cards='hasMobileCards'
	)
		b-table-column#name-column(
			field='username'
			label='Username'
			v-slot='props'
			searchable
		)
			TableEditDelete(
				:text='props.row.username'
				:id='props.row._id'
				:type='"user"'
				:userType='props.row.type.name'
			)
		b-table-column#type-column(
			field='type'
			label='Type'
			v-slot='props'
		) {{ props.row.type.name }}
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'
import TableEditDelete from '@/components/TableEditDelete.vue'

export default {
	name: 'UsersList',
	components: { TableEditDelete },
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
				this.users = response.data
			}).catch(error => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()

		/* Event Listeners */

		/* When new user is created, fetch API to get users
		 * and re-render list */
		EventBus.$on('update-users', () => {
			this.getUsers()
		})
	}
}
</script>
