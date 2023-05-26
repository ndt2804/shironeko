<template>
  <nav id="navbar" class="relative z-10 w-full text-neutral-800">
    <div
      class="flex flex-row max-w-screen-xl px-8 mx-auto lg:items-center  py-4 items-center space-x-4 xl:space-x-8   lg:flex-row">
      <div
        class="font-mono font-bold flex flex-row items-center justify-between py-6  text-2xl text-green-400  gap-3 space-x-8">
        <NuxtLink to="/">shironeko</NuxtLink>
      </div>

      <ul class=" justify-center gap-3 lg:flex font-mono  space-x-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>


    </div>
  </nav>
</template>



<script lang="ts">
export default {
  name: 'Navbar',
}

</script>
<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>