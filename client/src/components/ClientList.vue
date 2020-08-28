<template>
  <div class='client-list'>
	<span class='no-clients'
		  v-if='clients.length == 0'>
	  <b-message type='is-danger'
				 icon-pack='fas'
				 icon-size='is-large'
				 icon='exclamation-circle'
				 has-icon
				 class='message'>
		<h1 class='has-text-danger'>{{ noClients }}</h1>
	  </b-message>
	</span>
	<span class='no-clients'
		  v-if='clients.length > 0'>
	  <h1>There are clients</h1>
	</span>
  </div>
</template>

<script>
export default {
	name: 'ClientList',
	data(){
		return{
			clients: [],
			noClients: "You don't have Clients now. Add One!"
		}
	}
}
</script>

<style>
.no-clients {
  margin: 50px;
 }
</style>
