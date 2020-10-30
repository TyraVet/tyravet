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
	components: { PetProfile }
}
</script>
