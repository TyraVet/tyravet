<template lang='pug'>
div#panel
	UsersHeader
	UsersList
	Configuration
</template>

<script>
import UsersHeader from '@/components/UsersHeader.vue'
import UsersList from '@/components/UsersList.vue'
import Configuration from '@/components/Configuration.vue'

export default {
	name: 'Panel',
	components: {
		UsersHeader,
		UsersList,
		Configuration
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
