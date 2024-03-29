const app = Vue.createApp({
  data: () => ({
    title: "Generador de Degradados",
    fcolor: "#d5ee11",
    scolor: "#f59e24",
    orientation: 1,
  }),
  computed: {
    setColor() {
      if (this.orientation == 1) {
        return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor});`;
      } else if (this.orientation == 2) {
        return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor});`;
      } else if (this.orientation == 3) {
        return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor});`;
      } else if (this.orientation == 4) {
        return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor});`;
      }
    },
  },
});
