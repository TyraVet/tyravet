<template lang='pug'>
div#panel
	UsersHeader
	UsersList
</template>

<script>
import UsersHeader from '@/components/UsersHeader.vue'
import UsersList from '@/components/UsersList.vue'

export default {
	name: 'Panel',
	components: {
		UsersHeader,
		UsersList
	}
}
</script>
