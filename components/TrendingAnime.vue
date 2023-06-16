<template>
  <div>
    <div class="flex justify-items-start mx-10">
      <h1 class="text-xl font-semibold mb-3 py-2 filter drop-shadow-sm">
        <i class="text-red-600 fas fa-fire"></i> Trending
        <span class="text-xl font-semibold text-green-500 filter drop-shadow-sm tracking-wide">Anime</span>
      </h1>
    </div>
    <div class="mx-10 flex flex-wrap justify-items-start justify-between align-middle space-y-1">
      <div v-for="(t, i) in trendingAnime" :key="i" class="transform hover:scale-105 transition ease-in-out duration-500">
        <a :href="t.siteUrl" target="_blank" rel="noopener noreferrer">
          <img class="relative h-full w-full object-cover object-top rounded-md shadow-lg" :src="t.coverImage.large"
            :alt="t.title.english === null ? t.title.romaji : t.title.english" />
          <p class="text-gray-600 mt-1 text-center font-medium">
            {{ t.title.english === null ? t.title.romaji : t.title.english }}
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendingAnime",
  data() {
    return {
      trendingAnime: [],
    };
  },
  async mounted() {
    const query = `
      query ($page: Int, $perPage: Int) {
          Page(page: $page, perPage: $perPage) {
            pageInfo {
              total
              currentPage
              lastPage
              hasNextPage
              perPage
            }
              media(type: ANIME, sort: TRENDING_DESC) {
                id
                title {
                  romaji
                  english
                }
                siteUrl
                isAdult
                coverImage {
                  large
                }
            }
          }
      }`;

    const variables = {
      page: 1,
      perPage: 10,
    };

    try {
      const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables }),
      });

      const result = await response.json();

      if (result.data && result.data.Page && result.data.Page.media) {
        this.trendingAnime = result.data.Page.media.filter(a => !a.isAdult);
      }
    } catch (error) {
      this.handleErrors(error);
    }
  },
  methods: {
    handleErrors(error) {
      console.log(error.message);
    },
  },
};
</script>

<style scoped>
/* Fix blurry images on scale */
img {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
}
</style>
