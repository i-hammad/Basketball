<template>
  <span>
    <slot v-if="inlineSpinner" v-bind:message="message">
      <p v-if="message" class="generic-content-loader-message">
        {{ message }}
      </p>
      <b-spinner label="Spinning" :class="loaderPosition"></b-spinner>
      <div class="loading-overlay" v-if="showOverlay"></div>
    </slot>
    <slot v-if="defaultRequestTemplate" name="defaultRequestTemplate"> </slot>
    <slot v-if="beforeRequestTemplate" name="beforeRequestTemplate"> </slot>
    <slot v-if="afterRequestTemplate" name="afterRequestTemplate"> </slot>
  </span>
</template>
<script>
import { eventHub } from "../eventhub";
export default {
  props: ["id", "size"],
  data() {
    return {
      inlineSpinner: false,
      message: "",
      showOverlay: false,
      defaultRequestTemplate: true,
      beforeRequestTemplate: false,
      afterRequestTemplate: false
    };
  },

  computed: {
    loaderPosition() {
      return this.id == "global"
        ? "generic-app-loader"
        : "generic-content-loader";
    }
  },
  methods: {
    showSpinner(param) {
      this.inlineSpinner = true;
      this.message = param.message;
      this.showOverlay = param.showOverlay;
    },
    hideSpinner(param) {
      this.inlineSpinner = false;
      this.message = "";
      this.showOverlay = false;
    }
  },
  created() {
    eventHub.$on("before-request-" + this.id, param => {
      this.defaultRequestTemplate = false;
      this.afterRequestTemplate = false;
      this.beforeRequestTemplate = true;

      this.showSpinner(param);
    });
    eventHub.$on("request-error-" + this.id, param => {
      this.defaultRequestTemplate = true;
      this.afterRequestTemplate = false;
      this.beforeRequestTemplate = false;
      this.hideSpinner(param);
    });
    eventHub.$on("after-response-" + this.id, param => {
      this.defaultRequestTemplate = false;
      this.beforeRequestTemplate = false;
      this.afterRequestTemplate = true;

      this.hideSpinner(param);
    });
    eventHub.$on("response-error-" + this.id, param => {
      this.defaultRequestTemplate = true;
      this.afterRequestTemplate = false;
      this.beforeRequestTemplate = false;
      this.hideSpinner(param);
    });
  },
  beforeDestroy() {
    eventHub.$off("before-request-" + this.id, this.showSpinner);
    eventHub.$off("request-error-" + this.id, this.hideSpinner);
    eventHub.$off("after-response-" + this.id, this.hideSpinner);
    eventHub.$off("response-error-" + this.id, this.hideSpinner);
  }
};
</script>
<style scoped>
.generic-app-loader {
  position: fixed;
  z-index: 999;
  height: 4rem;
  width: 4rem;
  top: 50%;
  left: 50%;
  margin-left: -39px;
  margin-top: -39px;
  color: #848b90 !important;
  border: 0.5em solid currentColor;
  border-right-color: transparent;
}
.generic-content-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  /* transform: translate(-50%, -50%); */
  z-index: 9999;
  color: #848b90 !important;
  border: 0.4em solid currentColor;
  border-right-color: transparent;
}
.generic-content-loader-message {
  position: absolute;
  z-index: 9999;
  background-color: #fff;
  padding: 7px 35px;
  border: 1px solid #ccc;
  border-radius: 4px;
  top: 50%;
  left: 50%;
  margin-left: -74px;
  margin-top: 40px;
}
</style>
