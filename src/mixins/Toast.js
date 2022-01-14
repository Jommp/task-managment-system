export const Toast = {
  methods: {
    makeToast(toast_title, toast_body, toast_variant = null, ) {
      this.$bvToast.toast(toast_body, {
        title: `${toast_title}`,
        variant: toast_variant,
        solid: true
      })
    }
  }
}