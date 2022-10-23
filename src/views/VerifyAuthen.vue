<template>
  <main class="mt-0 main-content">
    <section>
      <div class="page-header min-vh-100">
        <div class="container">
          <center>
            <Logo />
          </center>
          <div class="row justify-content-center">
            <div class="mx-auto col-xl-5 col-lg-5 col-md-7 d-flex flex-column mx-lg-0">
              <div class="pb-0 card-header text-start">
                <h4 class="font-weight-bolder">Please enter the code sent to your email.</h4>
              </div>
              <div class="card card-plain">
                <form role="form" v-on:submit.prevent="submitForm">
                  <div class="mb-3">
                    <argon-input type="text" placeholder="Code" name="code" size="lg"/>
                    <div class="input-errors" >
                      <div class="error-msg">{{ error }}</div>
                    </div>
                  </div>
                  <div class="text-center">
                    <argon-button
                        class="mt-4"
                        variant="gradient"
                        color="success"
                        fullWidth
                        size="lg"
                    >Submit</argon-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { onMounted, ref } from "vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Logo from "@/components/icons/iconLaptop88.vue";
import store from "@/store/index.js";
const body = document.getElementsByTagName("body")[0];

onMounted(() => {
  store.state.hideConfigButton = true;
  store.state.showNavbar = false;
  store.state.showSidenav = false;
  store.state.showFooter = false;
  body.classList.remove("bg-gray-100");
})
function submitForm(submitEvent) {
  const code = submitEvent.target.elements.code.value;
  const validation = validate(code);
  if (!validation) {
    console.log(1)
    error.message = ref('a');
  }

}

function validate(code) {
  var reg = /^\d+$/;
  if (!code.match(reg) || code.length != 6) {
    return false
  }
  return true;
}

</script>