<template>
  <div id='vaccination-record'>
	<VaccinationTitle></VaccinationTitle>
	<VaccinationList></VaccinationList>
  </div>
</template>

<script>
import VaccinationTitle from './VaccinationTitle.vue'
import VaccinationList from './VaccinationList.vue'

export default {
	name: 'VaccinationRecord',
	components: { VaccinationTitle, VaccinationList }
}
</script>
