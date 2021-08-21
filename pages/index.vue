<template>
  <div class="h-auto w-auto bg-secbg font-sans space-y-6 pt-6 pb-6" id="app">
    <landing />
    <topcrypto />
    <trending />
    <bfooter />
  </div>
</template>
<script>
import Bfooter from "~/components/bfooter.vue";
import Topcrypto from "~/components/topcrypto.vue";
import Trending from "~/components/trending.vue";
import landing from "../components/landing.vue";
export default {
  components: { landing, Topcrypto, Trending, Bfooter },
  head() {
    return {
      title: 'CryptoNation',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  }
};
</script>
<style></style>
