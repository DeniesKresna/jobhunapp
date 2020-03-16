<template>
	<section class="hero is-small">
		<div class="hero-head">
		  	<header-element />
		</div>
		<div class="hero-body">
			<div class="columns">
				<div class="column is-half has-vertical-centered">
					<div class="container has-text-centered">
						<div>
							<div>
							<h1 class="title">
								Mau update Ilmu yang mudah?
							</h1>
							<p>
								Bergabunglah bersama Jobhun Academy Virtual
							</p>
							<p>
								Belajar kapanpun di manapun
							</p>
							</div>
						</div>
					</div>
				</div>
				<div class="column">
					<figure class="image">
						<img src="../../assets/images/vectororang.jpg" height="150px" />
					</figure>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import HeaderElement from './HeaderElement'
export default {
	components:{
		HeaderElement
    },
  data:()=>({
    activeItem: 0,
    search: '',
  }),
  computed:{
    isSidebar(){
        return this.$store.getters.isSidebar;
    },
    menus(){
    	return this.$store.getters.menus;
    }
  }
}
</script>