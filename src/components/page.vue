<template>
    <div>
        {{tiles}}
        <br>
        <router-link :to="{name: 'home'}">back</router-link>

    </div>
</template>

<script>
    export default {
        name: "page",
        components: {},
        data: () => ({
            tiles: []
        }),
        created() {
            fetch('http://localhost:9000/api/tiles/' + this.$route.params.id).then((data) => data.json())
                .then((data) => {
                    this.tiles = data;
                })
        }

    }
</script>

<style scoped>

</style>