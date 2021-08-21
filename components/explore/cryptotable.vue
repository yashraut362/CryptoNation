<template>
  <div class="w-full">
    <div class="bg-white shadow-md rounded my-6">
      <table class="w-full">
        <thead>
          <tr
            class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
          >
            <th class="px-4 py-3">Name</th>
            <th class="px-4 py-3">Current Price</th>
            <th class="px-4 py-3">Market Cap</th>
            <th class="px-4 py-3">Last 24 hours</th>
          </tr>
        </thead>
        <tbody class="bg-white">
          <tr class="text-gray-700" v-for="coin in allcoins" :key="coin.id">
            <td class="px-4 py-3 border">
              <div class="flex items-center text-sm">
                <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                  <img
                    class="object-cover w-full h-full rounded-full"
                    :src="coin.image"
                    alt=""
                    loading="lazy"
                  />
                  <div
                    class="absolute inset-0 rounded-full shadow-inner"
                    aria-hidden="true"
                  ></div>
                </div>
                <div>
                  <p class="font-semibold text-black">{{ coin.name }}</p>
                  <p class="text-xs text-gray-600">{{ coin.symbol }}</p>
                </div>
              </div>
            </td>
            <td class="px-4 py-3 text-ms font-semibold border">
             ₹ {{ coin.current_price }}
            </td>
            <td class="px-4 py-3 text-xs border">
              <span class="px-2 py-1 font-semibold leading-tight rounded-sm">
               $ {{coin.market_cap.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}}
              </span>
            </td>
            <td class="px-4 py-3 text-sm border">{{coin.market_cap_change_percentage_24h}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
 props:['allcoins']
};
</script>

<style></style>
