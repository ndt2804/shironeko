<script setup lang="ts">
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div
      class="w-full min-w-fit max-w-sm rounded-lg bg-zinc-200 p-6 dark:bg-zinc-700"
    >
      <h2 class="font-lexend mb-6 text-4xl font-bold">Đăng nhập</h2>
      <form class="space-y-3">
        <div class="space-y-1">
          <label class="block" for="email">Email</label>
          <input
            id="email"
            class="focus:ring-primary w-full rounded-xl border-none bg-zinc-300 transition-all invalid:ring-2 invalid:ring-red-400 focus:bg-zinc-100 focus:ring-2 dark:bg-zinc-600 focus:dark:bg-zinc-700"
            type="email"
            placeholder="shironeko@manga.vn"
          />
        </div>
        <div class="space-y-1">
          <label class="block" for="password">Mật khẩu</label>
          <input
            id="password"
            class="focus:ring-primary w-full rounded-xl border-none bg-zinc-300 transition-all focus:bg-zinc-100 focus:ring-2 dark:bg-zinc-600 focus:dark:bg-zinc-700"
            type="password"
            placeholder="password"
          />
        </div>
        <div class="flex items-center gap-3">
          <input
            id="remember"
            type="checkbox"
            class="text-primary focus:ring-primary rounded bg-transparent transition-all focus:ring-2"
          />
          <label for="remember">Lưu đăng nhập</label>
        </div>
        <button class="h-fit overflow-hidden rounded-xl py-2 px-3 transition-all duration-150 ease-linear bg-primary hover:bg-primary/75 text-white hover:shadow-md flex items-center justify-center gap-3 w-full">
            Đăng Nhập
        </button>
        <div class="text-center text-zinc-600 dark:text-zinc-400">
          <NuxtLink
            class="decoration-primary decoration-2 hover:underline"
            to="/forget"
            >Quên mật khẩu?</NuxtLink
          >
          &middot;
          <NuxtLink
            class="decoration-primary decoration-2 hover:underline"
            to="/register"
            >Đăng ký</NuxtLink
          >
        </div>
      </form>
    </div>
  </div>
</template>
