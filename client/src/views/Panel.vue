<template>
  <div class='panel'>
	<UsersList></UsersList>
  </div>
</template>

<script>
import UsersList from '@/components/UsersList.vue'

export default {
	name: 'Panel',
	components: { UsersList }
}
</script>
