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
	}
}
</script>
