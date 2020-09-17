<template>
  <div class='panel'>
	<UsersHeader></UsersHeader>
	<UsersList></UsersList>
  </div>
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
