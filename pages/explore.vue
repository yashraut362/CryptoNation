<template>
  <div class="md:p-5 lg:p-8 bg-secbg min-h-screen">
    <div
      class="flex items-center justify-center  bg-secbg font-sans overflow-hidden "
    >
      <div class="block items-center justify-center space-y-10">
        <img
          class="block items-center justify-center"
          src="../assets/images/newlogo.webp"
          alt="logo"
        />
        <div
          class="
        relative
        text-primarybg
        focus-within:text-primarybg
        w-96
      "
        >
          <span class="absolute top-4 left-0 flex items-center pl-4">
            <search />
          </span>
          <input
            v-model="search"
            type="search"
            class="inputs focus:outline-none focus:shadow-outline"
            placeholder="Search any crypto"
            autocomplete="off"
          />
        </div>
      </div>
    </div>
    <cryptotable :allcoins="searchcrypto" />
  </div>
</template>

<script>
import cryptotable from "../components/explore/cryptotable.vue";
export default {
  components: { cryptotable },
  computed: {
    searchcrypto() {
      if (this.search) {
        return this.allcoins.filter(item => {
          return this.search
            .toLowerCase()
            .split("")
            .every(v => item.name.toLowerCase().includes(v));
        });
      } else {
        return this.allcoins;
      }
    }
  },
  data() {
    return {
      search: "",
      allcoins: []
    };
  },
  created() {
    this.$store.dispatch("crypto/Getallcrypto").then(response => {
      this.allcoins = response;
    });
  }
};
</script>

<style scoped>
.inputs {
  @apply shadow
            appearance-none
        bg-gray-100
            w-full
            rounded-xl
            py-3
            px-6
            pl-10
            text-gray-400
            leading-tight;
}
</style>
