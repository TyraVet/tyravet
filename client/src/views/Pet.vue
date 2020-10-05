<template>
  <div class='pet'>
	<PetProfile :id='$route.params.id'></PetProfile>
  </div>
</template>

<script lang='js'>
import PetProfile from '@/components/PetProfile.vue'

export default {
	name: 'Pet',
	components: { PetProfile }
}
</script>
