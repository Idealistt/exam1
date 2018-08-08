<template >
    <div class="asd" v-bind:class="{'t-class':  title.type}">
        <div>
            <div>
                {{title}}
            </div>
            <div>
                {{description}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:[
            'title',
            'description',
        ],
        data:()=>({
        }),
        name: "elem"
    }
</script>

<style scoped>
.asd{
    padding: 20px;
}
</style>