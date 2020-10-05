<template>
  <section id='medical-record'>
	<MedicalTitle></MedicalTitle>
	<MedicalList></MedicalList>
  </section>
</template>

<script lang='js'>
import MedicalTitle from '@/components/MedicalTitle.vue'
import MedicalList from '@/components/MedicalList.vue'

export default {
	name: 'MedicalRecord',
	components: { MedicalTitle, MedicalList }
}
</script>

<style scoped>
@import '../assets/css/medical-record.css'
</style>
