<template>
  <div class="flex md:items-center justify-center w-screen h-auto px-3 md:px-6">
    <div class="rounded-3xl bg-primarybg flex items-center justify-center">
      <div class="w-3/5 md:pl-12 space-y-3">
        <img src="../assets/images/newlogo.webp" alt="brandlogo" />
        <p class="label2">
          The best way to track cryptocurrency, watch latest market trends with
          ease !
        </p>
        <div class="flex justify-evenly md:justify-start md:space-x-5 md:pt-4">
          <nuxt-link to="/explore">
            <button class="btn bg-secbg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-8 md:w-8 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                />
              </svg>
              <span class="pl-2"> Explore</span>
            </button>
          </nuxt-link>
          <a
            class="btn bg-secbg"
            href="https://github.com/yashraut362/CryptoNation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="md:h-8 md:w-8 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span class="pl-2"> Code</span>
          </a>
        </div>
      </div>
      <div class="w-2/5">
        <img class="w-15 h-15" src="../assets/images/1.png" alt="landing" />
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.label2 {
  @apply pl-2 text-xs md:text-xl lg:text-2xl xl:text-3xl font-semibold lg:font-bold text-gray-700 sm:font-medium;
}
.btn {
  @apply rounded-3xl  px-2 py-1 md:px-3 md:py-2 lg:px-6 lg:py-3 flex items-center text-gray-700 text-sm md:text-lg font-semibold;
}
</style>
