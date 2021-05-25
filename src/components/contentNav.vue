<template>
    <ul class="contentNav">
        <span>Catalog</span>
        <li><router-link to="/countryList">Country List</router-link></li>
        <li><router-link to="/item">Item</router-link></li>
    </ul>
</template>

<script>
// import { axios } from '@/plugins/axios'

export default {
    name: 'contentNav',
    // props: {
    // }
}
</script>

<style scoped>
.contentNav{
    text-align: center;
}
.contentNav span {
    line-height: 4rem;
    font-size: 1.5rem;
    letter-spacing: 2px;
    border-bottom: 3px dotted rgb(180, 180, 180, 0.5);
}
.contentNav li {
    line-height: 2.5rem;
}
.contentNav li:hover {
    background-color: #e6e6e6;
}
.contentNav a{
    text-decoration: none;
    color: black;
}
</style>