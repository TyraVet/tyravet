<template>
  <div id='breeds'>
	<BreedHeader></BreedHeader>
	<BreedList></BreedList>
  </div>
</template>

<script lang='js'>
import BreedHeader from '@/components/BreedHeader.vue'
import BreedList from '@/components/BreedList.vue'

export default {
	name: 'Breeds',
	components: { BreedHeader, BreedList }
}
</script>
