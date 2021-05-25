<template>
    <div>
        <li>
            <img :src="showTableData.flag"/>
        </li>
    </div>
</template>


<script>
export default {
    props: ["show-table-data"],
}
</script>

<style scoped>
/* li{
    padding: 15px 15px;
    border-radius: 15px;
    overflow: hidden;
    transition: all .4s;
}
li:hover{
    box-shadow: 2px 2px 4px rgba(0,0,0,.2);
}
img{
    width: 220px;
    height: 130px;
    display: block;
} */
</style>