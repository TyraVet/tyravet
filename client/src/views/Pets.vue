<template lang='pug'>
div#pets
	PetsList
</template>

<script lang='js'>
import PetsList from '@/components/PetsList.vue'

export default {
	name: 'Pets',
	components: { PetsList }
}
</script>
