export default function useApi(url: string = 'https://graphql.anilist.co') {
    const data: Ref<any> = ref(null);
    const loading: Ref<boolean> = ref(true);
    const error: Ref<string | null> = ref(null);

    async function doFetch() {
        try {
            const response = await fetch(url);
            const json = await response.json();
            data.value = json.data; 
            loading.value = false;
        } catch (err: any) {
            error.value = err.message;
            loading.value = false;
        }
    }

    doFetch();

    return { data, loading, error };
}