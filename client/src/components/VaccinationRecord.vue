<template lang='pug'>
section#vaccination-record
	VaccinationTitle
	VaccinationList
</template>

<script lang='js'>
import VaccinationTitle from './VaccinationTitle.vue'
import VaccinationList from './VaccinationList.vue'

export default {
	name: 'VaccinationRecord',
	components: { VaccinationTitle, VaccinationList }
}
</script>
