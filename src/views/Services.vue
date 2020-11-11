<template lang='pug'>
section#services
	ServiceHeader
	ServiceList
</template>

<script lang='js'>
import ServiceHeader from '@/components/ServiceHeader.vue'
import ServiceList from '@/components/ServiceList.vue'

export default {
	name: 'Services',
	components: { ServiceHeader, ServiceList },
	computed: {
		user(){ return this.$store.state.user }
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
