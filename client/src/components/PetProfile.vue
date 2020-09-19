<template>
  <div class='pet-profile'>
	{{ id }}
  </div>
</template>

<script>
export default {
	name: 'PetProfile',
	props: {
		id: String
	},
	data(){
		return{
			pet: {}
		}
	}
}
</script>
