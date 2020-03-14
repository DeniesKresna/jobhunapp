<template>
	<div>
		<b-navbar fixed-top>
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
		    					<b-navbar-item  tag="router-link" :to="mn.path">
		    						{{mn.text}}
		    					</b-navbar-item>
		    				</div>
		    			</b-navbar-dropdown>
		    		</div>
		    		<div v-else>
		    			<b-navbar-item  tag="router-link" :to="menu.path">
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
</div>
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
    	return this.$store.getters.menus
    }
  }
}
</script>