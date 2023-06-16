<template>
    <h1>home</h1>
    <TrendingAnime></TrendingAnime>
</template>
<script>
import TrendingAnime from '@/components/TrendingAnime.vue'

export default {
    name: "App",
    components: {
        TrendingAnime, // Đăng ký component TrendingAnime
    },
    // Các phần khác của script
}
</script>