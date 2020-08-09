<template>
  <div class="zipcode_area">
    <div class="form_area">
      <form @submit.prevent="submitForm">
        <label for="keyworkd">주소 : </label>
        <input type="text" id="keyworkd" v-model="keyword">
        <button type="submit" class="btn">검색</button>
      </form>
      <p class="log">
        {{ logMessage }}
      </p>
    </div>
  </div>
</template>

<script>
import { instance } from '@/api/index';

export default {
  data() {
    return {
      keyword: '',
      logMessage: '',
    };
  },
  props: {
    common: {
      type: Object,
    },
    currentPage: {
      type: String,
    },
  },
  watch: {
    currentPage: function() {
      this.common.currentPage = this.currentPage;
      this.submitForm();
    }
  },
  methods: {
    async submitForm() {
      if(this.keyword !== '') {
        try {
          var params = "keyword="+this.keyword+"&confmKey=devU01TX0FVVEgyMDIwMDgwOTIyNDY1NjExMDA0MDQ=&resultType=json&currentPage="+this.common.currentPage+"&countPerPage="+this.common.countPerPage;
          const response = await instance.get('/addrlink/addrLinkApi.do?'+params);
          console.log(response);
          this.$emit("syncData", response.data.results);
          if(response.data.results.common.errorCode !== '0') {
            this.logMessage = response.data.results.common.errorMessage;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        alert('주소를 입력하세요.');
      }
    },
  }
}
</script>

<style scoped>

</style>
