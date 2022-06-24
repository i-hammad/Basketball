import swal from "sweetalert2";

export default {
  install(Vue, options) {
    Vue.prototype.$alert = swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 6000,
      timerProgressBar: true,
      showCloseButton: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", swal.stopTimer);
        toast.addEventListener("mouseleave", swal.resumeTimer);
      },
    });
  },
};
