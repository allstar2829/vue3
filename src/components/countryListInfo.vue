<template>
    <div class="info" v-if="showTableData">
        <div class="info_content">
            <img v-if="showTableData.flag" :src="showTableData.flag" />
            <ul>
            <li v-if="showTableData.name">- {{showTableData.name}}</li>
            <br />
            <li v-if="showTableData.alpha2Code">
                2位國家代碼 : {{showTableData.alpha2Code}}
            </li>
            <li v-if="showTableData.alpha3Code">
                3位國家代碼 : {{showTableData.alpha3Code}}
            </li>
            <li v-if="showTableData.nativeName">
                母語名稱 : {{showTableData.nativeName}}
            </li>
            <li v-if="showTableData.altSpellings">
                替代國家名稱 :
                {{showTableData.altSpellings}}
            </li>
            <li v-if="showTableData.callingCodes">
                國際電話區號 :
                {{showTableData.callingCodes}}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['show-table-data'],
}
</script>
