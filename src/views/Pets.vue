<template lang='pug'>
div#pets
	PetsList
</template>

<script lang='js'>
import PetsList from '@/components/PetsList.vue'

export default {
	name: 'Pets',
	components: { PetsList },
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
