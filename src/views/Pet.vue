<template lang='pug'>
div#pet
	PetProfile(
		:id='$route.params.id'
	)
</template>

<script lang='js'>
import PetProfile from '@/components/PetProfile.vue'

export default {
	name: 'Pet',
	components: { PetProfile },
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
