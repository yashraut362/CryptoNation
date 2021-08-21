<template>
  <div class="w-screen h-auto px-3 md:px-6">
    <div class="rounded-3xl bg-primarybg p-2 pb-5">
      <h1 class="heading">Top 7 Trending Cryptocurrencies</h1>
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center gap-y-3"
      >
        <div v-for="coin in trendingcoins" :key="coin.item.id">
          <div class="rounded-3xl bg-secbg h-auto w-44 space-y-2 py-2">
            <img class="h-14 w-14 mx-auto" :src="coin.item.small" alt="icon" />
            <div class="block">
              <div class="flex justify-evenly">
                <h1 class="name">{{ coin.item.name }}</h1>
              </div>
              <h1 class="price">Rank : {{ coin.item.market_cap_rank }}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trendingcoins: []
    };
  },
  created() {
    this.$store.dispatch("crypto/GetTrendingcrypto").then(response => {
      this.trendingcoins = response.coins;
    });
  }
};
</script>

<style scoped>
.heading {
  @apply p-3 text-xl md:text-3xl font-semibold lg:font-bold  text-gray-700;
}
.name {
  @apply text-center text-lg font-semibold text-gray-700 truncate;
}
.value {
  @apply text-center text-lg font-semibold text-gray-700 truncate;
}
.price {
  @apply text-base font-medium text-center truncate;
}
</style>
