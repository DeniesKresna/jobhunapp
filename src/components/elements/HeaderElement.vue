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
	        	<b-dropdown position="is-bottom-left" aria-role="menu" trap-focus style="margin-top: 5px;">
	        		<button class="button is-primary" slot="trigger" slot-scope="{ loginActive }">
		                <span>Login</span>
		                <b-icon :icon="loginActive ? 'menu-up' : 'menu-down'"></b-icon>
		            </button>

                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <form @submit.prevent="login">
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Your email"
                                            v-model="email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Your password"
                                            v-model="password"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-checkbox>Remember me</b-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>
                <b-dropdown position="is-bottom-left" aria-role="menu" trap-focus style="margin-top: 5px;">
                    <button class="button is-light" slot="trigger" slot-scope="{ signupActive }">
		                <span>Signup</span>
		                <b-icon :icon="signupActive ? 'menu-up' : 'menu-down'"></b-icon>
		            </button>

                    <b-dropdown-item
                        aria-role="menu-item"
                        :focusable="false"
                        custom
                        paddingless>
                        <form @submit.prevent="signup">
                            <div class="modal-card" style="width:300px;">
                                <section class="modal-card-body">
                                    <b-field label="Email">
                                        <b-input
                                            type="email"
                                            placeholder="Emailmu"
                                            v-model="email"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Name">
                                        <b-input
                                            type="text"
                                            placeholder="Nama Lengkapmu"
                                            v-model="name"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Nick Name">
                                        <b-input
                                            type="text"
                                            placeholder="Nama Panggilanmu"
                                            v-model="nickname"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Phone Numb">
                                        <b-input
                                            type="text"
                                            placeholder="No Teleponmu"
                                            v-model="phone"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Passwordmu"
                                            v-model="password"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-field label="Password Confirm">
                                        <b-input
                                            type="password"
                                            password-reveal
                                            placeholder="Ulangi Passwordmu"
                                            v-model="password_confirmation"
                                            required>
                                        </b-input>
                                    </b-field>

                                    <b-checkbox>Remember me</b-checkbox>
                                </section>
                                <footer class="modal-card-foot">
                                    <button class="button is-primary">Login</button>
                                </footer>
                            </div>
                        </form>
                    </b-dropdown-item>
                </b-dropdown>
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
	    email: '',
	    name: '',
	    nickname: '',
	    password: '',
	    password_confirmation: '',
	    phone: '',
	    signupActive: false,
	    loginActive: false
	}),
	methods: {
		signup(){

		},
		login(){

		}
	},
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