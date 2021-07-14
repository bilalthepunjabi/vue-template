<template>
  <svg
    @click="$emit('click')"
    :class="computed_class"
    :style="computed_style"
    :id="'svg_' + identifier"
    :width="computed_width"
    :height="computed_height"
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="computed_viewbox"
    :fill="computed_fill"
    :stroke="computed_stroke"
  ></svg>
</template>
<script>
import svgs from "./data/hero.js";
export default {
  name: "svg-icon",
  props: [
    "width",
    "height",
    "fill",
    "stroke",
    "icon",
    "viewbox",
    "x_class",
    "x_style",
  ],
  setup() {},
  data() {
    return {
      identifier: Math.floor(Math.random() * 100000000000).toString(),
    };
  },
  mounted() {
    this.load_svg_content();
  },
  methods: {
    load_svg_content: function () {
      if (this.$props.icon === undefined) {
        return "";
      }
      document.getElementById("svg_" + this.identifier).innerHTML =
        svgs[this.$props.icon];
    },
  },
  watch: {
    icon: {
      deep: true,
      handler() {
        this.load_svg_content();
      },
    },
  },
  computed: {
    computed_width: function () {
      if (this.$props.width === undefined) {
        return "20px";
      }
      return this.$props.width.toString() + "px";
    },
    computed_height: function () {
      if (this.$props.height === undefined) {
        return "20px";
      }
      return this.$props.height.toString() + "px";
    },
    computed_fill: function () {
      if (this.$props.fill === undefined) {
        if (this.$props.icon.includes("solid-")) {
          return "#F06923";
        } else {
          return "transparent";
        }
      }
      return this.$props.fill;
    },
    computed_stroke: function () {
      if (this.$props.stroke === undefined) {
        if (this.$props.icon.includes("outline-")) {
          return "#F06923";
        } else {
          return "";
        }
      }
      return this.$props.stroke;
    },
    computed_viewbox: function () {
      if (this.$props.viewbox === undefined) {
        if (this.$props.icon.includes("outline-")) {
          return "0 0 24 24";
        }
        if (this.$props.icon.includes("solid-")) {
          return "0 0 20 20";
        }
        return "0 0 20 20";
      }
      return this.$props.viewbox;
    },
    computed_class: function () {
      return this.$props.x_class;
    },
    computed_style: function () {
      return this.$props.x_style;
    },
  },
};
</script>