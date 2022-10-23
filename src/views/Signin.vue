<template>
  <div class="container top-0 position-sticky z-index-sticky">
    <div class="row">
      <div class="col-12">
        <navbar
            isBlur="blur  border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
            v-bind:darkMode="true"
            isBtn="bg-gradient-success"
        />
      </div>
    </div>
  </div>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <center>
            <Logo />
          </center>
          <div class="row justify-content-center">
            <div class="mx-auto col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="card card-plain">
                <div class="pb-0 card-header text-start">
                  <h4 class="font-weight-bolder">Sign In</h4>
                  <p class="mb-0">Enter your email and password to sign in</p>
                </div>
                <div class="card-body">
                  <form role="form" v-on:submit.prevent="submitForm">
                    <div class="mb-3">
                      <argon-input type="text" placeholder="Email" name="email" size="lg"/>
                    </div>
                    <div class="mb-3">
                      <argon-input type="password" placeholder="Password" name="password" size="lg"/>
                    </div>
                    <argon-switch id="rememberMe" name="rememberMe">Remember me</argon-switch>
                    <span class="message_error">Login error</span>

                    <div class="text-center">
                      <argon-button
                          class="mt-4"
                          variant="gradient"
                          color="success"
                          fullWidth
                          size="lg"
                      >Sign in</argon-button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Logo from "@/components/icons/iconLaptop88.vue";

const body = document.getElementsByTagName("body")[0];
export default {
  name: "signin",
  components: {
    ArgonInput,
    ArgonSwitch,
    ArgonButton,
    Logo,
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },

  methods: {
    submitForm(submitEvent) {
      const email = submitEvent.target.elements.email.value;
      const password = submitEvent.target.elements.password.value;
      const rememberMe = submitEvent.target.elements.rememberMe.checked;
    }
  }
};
</script>
<style scoped>
.message_error {
  color: #c00;
}
</style>
