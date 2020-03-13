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
		            <b-navbar-item href="#">
		                Home
		            </b-navbar-item>
		            <b-navbar-item href="#">
		                Documentation
		            </b-navbar-item>
		            <b-navbar-dropdown label="Info">
		                <b-navbar-item href="#">
		                    About
		                </b-navbar-item>
		                <b-navbar-item href="#">
		                    Contact
		                </b-navbar-item>
		            </b-navbar-dropdown>
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
    }
  }
}
</script>