<template>
    <div class="display-flex asd" >
        <div v-for="tile in tiles"  v-bind:class="{normal:tile.type==='normal', double:tile.type==='double'}">
                <elem v-bind:title="tile.title" v-bind:description="tile.description"></elem>
                <router-link class="router" :to="{name: 'page', params: {id: tile.id}}" >more</router-link>
        </div>
    </div>
</template>

<script>
    import elem from './elem.vue'
    export default {
         components: {
            elem,
        },
        name: "tiles",
        data: () => ({

            tiles: ''
        }),

        created()  {
            fetch ('http://localhost:9000/api/tiles').then((data) => data.json())
                .then((data) => this.tiles = data.tiles)
        }
    };
</script>

<style scoped>
    .router{
        color: white;
        text-shadow:  1px 1px 2px black, 0 0 1em white;
        padding: 20px;
    }
    .asd{
        padding: 20px;
    }
    .display-flex{
        flex-direction: row ;
        display: flex;
        flex-wrap: wrap;
        display: inline-flex;
    }
    .normal{
        width: 30%;
        height: 150px;
        border: 1px solid black;
        margin: 10px;
        background: url("http://placekitten.com/500/150");
        color: white;
        text-shadow:  1px 1px 2px black, 0 0 1em white;
    }
    .double{
        width: 63%;
        height: 150px;
        border: 1px solid black;
        margin: 10px;
        background: url("http://placekitten.com/1100/150");
        color: white;
        text-shadow:  1px 1px 2px black, 0 0 1em white;
    }

    @media (max-width: 1024px ){
        .normal{
            width:  45%;
            height: 150px;
            border: 1px solid black;
            margin: 10px;


        }
        .double{
            width: 92%;
            height: 150px;
            border: 1px solid black;
            margin: 10px;

        }
    }
    @media  (max-width: 480px){
        .normal{
            width: 98%;
            height: 150px;
            border: 1px solid black;
            margin: 10px;

        }
        .double{
            width: 98%;
            height: 150px;
            border: 1px solid black;
            margin: 10px;

        }
    }
</style>