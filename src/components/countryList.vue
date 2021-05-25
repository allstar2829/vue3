<template>
  <div id="countryList">

    <country-list-nav></country-list-nav>

    <main>
      <div class="intro">
          <p>Get information about countries via a RESTful API</p>
          <country-list-order-btn @click="changeOrder"></country-list-order-btn>
      </div>

      <div class="content">
        <ul style="display:flex;flex-wrap:wrap">
            <country-list-content-data v-for="(item,index) in showTableData" :key="index" :show-table-data="item" @click="infoOpen(index)"></country-list-content-data>
          </ul>
      </div>
    </main>

    <transition name="fade">
      <country-list-info-bg 
        v-if="showTableData[this.$store.state.currentChooseInfo]"
        @click="infoClose"></country-list-info-bg>
    </transition>

    <transition name="fade">
      <country-list-info 
        v-if="showTableData[this.$store.state.currentChooseInfo]" 
        :show-table-data="showTableData[this.$store.state.currentChooseInfo]"></country-list-info>
    </transition>

    <country-list-pagination :max-page="maxPage()"></country-list-pagination> 
  </div>
</template>


<script>
import axios from 'axios';

import countryListNav from './countryListNav';
import countryListOrderBtn from './countryListOrderBtn';
import countryListContentData from './countryListContentData';
import countryListInfo from './countryListInfo';
import countryListInfoBg from './countryListInfoBg';
import countryListPagination from './countryListPagination';


export default {
  name: 'countryList',
  components: {
    countryListNav,
    countryListOrderBtn,
    countryListContentData,
    countryListInfo,
    countryListInfoBg,
    countryListPagination,
  },
  methods: {
    infoOpen(index) {
      this.$store.commit('infoOpen',index);
    },
    infoClose() {
      this.$store.commit('infoClose');
    },
    changeOrder() {
      this.$store.commit('changeOrder');
    },
    previousPage() {
      this.$store.commit('previousPage');
    },
    nextPage() {
      this.$store.commit('nextPage');
    },
    maxPage() {
      let calculatedPage = Math.ceil(this.searchedCountries.length / this.$store.state.pageSize);

      this.$store.commit('calculatedPage', calculatedPage);
      return calculatedPage
    },
    reset(page) {
      this.$store.state.currentPage = page;
    },
  },
  computed:{
    searchedCountries() {
      const copiedData = this.$store.state.allCountries.map((x) => x);
      let searchedCountriesNum = [];

      if (this.$store.state.isSearch) {
        searchedCountriesNum = copiedData.filter((country) => {
          return country.name
            .toLowerCase()
            .includes(this.$store.state.isSearch.toLowerCase());
        });
      } else {
        return copiedData;
      }
      return searchedCountriesNum;
    },

    orderedCountries() {
      const copiedData = this.searchedCountries.map((x) => x);

      if (this.$store.state.isReverse) {
        return copiedData.reverse();
      } else {
        return copiedData;
      }
    },

    showTableData() {
      const copiedData = this.orderedCountries.map((x) => x);

      const start = (this.$store.state.currentPage - 1) * this.$store.state.pageSize;
      const end = this.$store.state.currentPage * this.$store.state.pageSize;

      return copiedData.slice(start, end);
    },
  },
  mounted() {
    axios.get(`https://restcountries.eu/rest/v2/all`).then((response) => {
      
      const data = response.data.map((element) => element)
      this.$store.commit('setCountries', data)
    });
  },
}
</script>

<style src="../assets/css/countryList.css" />