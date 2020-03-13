<template>
  <div class="container">
  	<div class="feature" v-if="feature.enable">
	  	<div class="title has-text-centered">
	  		{{feature.title}}
	  	</div>
	  	<div class="columns" v-if="feature.child.length > 0" style="margin-top: 20px">
	  		<div class="column" v-for="cld in feature.child">
	  			<div class="has-text-centered">
		  			<figure class="image is-64x64 has-image-centered"><img :src="cld.picture" /></figure>
		  			<h1 class="subtitle" style="margin-top: 5px">{{cld.title}}</h1>
		  			<p>{{cld.description}}</p>
	  			</div>
	  		</div>
	  	</div>
	</div>
  </div>

  
</template>

<script>

export default {
	data(){
		return{
			feature: {
				enable: true,
				title: "Mengapa Jobhun Academy?",
				child:[
					{'picture': require('../assets/images/noimage.jpg'), 'title':'Murah', 'description':'Harga Jobhun Academy sangat murah'},
					{'picture': require('../assets/images/noimage.jpg'), 'title':'Fast Track', 'description':'Pengalaman belajar yang singkat namun efektif'},
					{'picture': require('../assets/images/noimage.jpg'), 'title':'Milenial', 'description':'Ditujukan untuk para milenial'}
				]
			}
		}
	}
}
</script>

<style scoped>
.feature{
	margin-top: 30px;
}
</style>
