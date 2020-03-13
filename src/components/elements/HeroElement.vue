<template>
	<section class="hero is-small">
		<div class="hero-head">
		  	<b-navbar>
		        <template slot="brand">
		            <b-navbar-item tag="router-link" :to="{ path: '/' }">
		                <img
		                    src="./../../assets/images/logo.png"
		                    alt="Jobhun Indonesia"
		                >
		            </b-navbar-item>
		        </template>
			    <template slot="start">
			    	<div v-for="menu in menus">
			    		<div v-if="menu.hasOwnProperty('child')">
			    			<b-navbar-dropdown :label="menu.text">
			    				<div v-for="mn in menu.child">
			    					<b-navbar-item :href="mn.path">
			    						{{mn.text}}
			    					</b-navbar-item>
			    				</div>
			    			</b-navbar-dropdown>
			    		</div>
			    		<div v-else>
			    			<b-navbar-item :href="menu.path">
			    				{{menu.text}}
			    			</b-navbar-item>
			    		</div>
			    	</div>
			    </template>

		        <template slot="end">
		            <b-navbar-item tag="div">
		                <div class="buttons">
		                    <a class="button is-primary">
		                        <strong>Sign up</strong>
		                    </a>
		                    <a class="button is-light">
		                        Log in
		                    </a>
		                </div>
		            </b-navbar-item>
		        </template>
		    </b-navbar>
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
export default {
	components:{
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