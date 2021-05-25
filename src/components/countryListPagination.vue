<template>
    <div class="pagination">
        <i class="fa fa-caret-left" @click="previousPage"></i>
        {{$store.state.currentPage}} / {{maxPage}}
        <i class="fa fa-caret-right" @click="nextPage"></i>
    </div>
</template>

<script>
export default {
    props: ["max-page"],
    methods: {
        nextPage() {
            this.$store.commit("nextPage");
        },
        previousPage(){
            this.$store.commit("previousPage");
        }
    },
}
</script>