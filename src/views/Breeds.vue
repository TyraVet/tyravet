<template lang='pug'>
div#breeds
	BreedHeader
	BreedList
</template>

<script lang='js'>
import BreedHeader from '@/components/BreedHeader.vue'
import BreedList from '@/components/BreedList.vue'

export default {
	name: 'Breeds',
	components: { BreedHeader, BreedList },
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
