<template>
  <div class="post">
    <div class="content">
      <h2>Interval : {{ selectInterval }}</h2>
      <h2>Total Amount : ${{ finalPrice }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      error: null,
      selectInterval: "",
      finalPrice: 0.0
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  watch: {
    // call again the method if the route changes
    $route: "fetchData"
  },
  methods: {
    fetchData() {
      this.selectInterval = this.$route.params.selectInterval;
      this.finalPrice = this.$route.params.finalPrice;
    }
  }
};
</script>