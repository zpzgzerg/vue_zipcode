<template>
  <div id="app">
    <ZipcodeForm :common="common" :currentPage="common.currentPage" @syncData="syncData"></ZipcodeForm>
    <ZipcodeView :jusos="jusos"></ZipcodeView>
    <PagingView :common="common" @refPage="refPage"></PagingView>
  </div>
</template>

<script>
import ZipcodeForm from "@/components/ZipcodeForm";
import ZipcodeView from "@/views/ZipcodeView";
import PagingView from '@/views/PagingView';

export default {
  data() {
    return {
      common: {
        totalCount: "0",
        currentPage: "1",
        countPerPage: "5",
      },
      jusos: [],
    }
  },
  methods: {
    syncData(response) {
      this.common = response.common;
      this.jusos = response.juso;
    },
    refPage(response) {
      this.common.currentPage = response;
    },
  },
  components: {
    ZipcodeForm,
    ZipcodeView,
    PagingView,
  }
}
</script>

<style>
</style>
