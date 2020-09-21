<template>
  <div class='pets'>
	<PetsList></PetsList>
  </div>
</template>

<script>
import PetsList from '@/components/PetsList.vue'

export default {
	name: 'Pets',
	components: { PetsList }
}
</script>
