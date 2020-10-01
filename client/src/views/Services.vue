<template>
  <section id='services'>
	<ServiceHeader></ServiceHeader>
	<ServiceList></ServiceList>
  </section>
</template>

<script>
import ServiceHeader from '@/components/ServiceHeader.vue'
import ServiceList from '@/components/ServiceList.vue'

export default {
	name: 'Services',
	components: { ServiceHeader, ServiceList }
}
</script>
