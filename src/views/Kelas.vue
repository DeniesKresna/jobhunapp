<template>
<div class="container">
	<div class="has-text-centered" style="margin-top: 100px; margin-bottom: 40px;">
		<h1 class="title">Pilih Kelas Akademi keinginan Kamu</h1>
	</div>
	<div class="columns is-multiline">
		<div class="column is-3" v-for="jaclass in jaclasses">
			<div class="box" style="margin-top: 20px;">
			  <article class="media">
			    <div class="media-left">
			      <figure class="image is-64x64">
			        <img :src="jaclass.picture" alt="Image">
			      </figure>
			    </div>
			    <div class="media-content">
			      <div class="content">
			        <p>
			          <strong>{{jaclass.title}}</strong> <!--<small>@johnsmith</small> <small>31m</small>-->
			          <br>
			          {{jaclass.description}}
			        </p>
			      </div>
			      <nav class="level is-mobile">
			        <div class="level-left">
			          <a class="level-item" aria-label="reply">
			            <span class="icon is-small">
			              <i class="fas fa-reply" aria-hidden="true"></i>
			            </span>
			          </a>
			          <a class="level-item" aria-label="retweet">
			            <span class="icon is-small">
			              <i class="fas fa-retweet" aria-hidden="true"></i>
			            </span>
			          </a>
			          <a class="level-item" aria-label="like">
			            <span class="icon is-small">
			              <i class="fas fa-heart" aria-hidden="true"></i>
			            </span>
			          </a>
			        </div>
			      </nav>
			    </div>
			  </article>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default{
	data(){
		return {
		}
	},
	computed:{
		jaclasses(){
			let res = this.$store.getters['jaclass/jaclasses'];
			return res;
		}
	}
}
</script>

<!--let res = await this.$store.dispatch('layout/' + mtd,payload, { root: true });-->