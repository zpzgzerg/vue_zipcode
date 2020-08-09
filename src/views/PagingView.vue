<template>
  <div>
    <span v-if="isPrePage" style="margin: 5px; cursor:hand;"><a v-on:click="goToPrePage">◁</a></span>
    <span v-for="page in pages" :key="page" style="margin: 5px; cursor:hand;" :style="isCurrentPage">
      <a v-on:click="goPage(page)">{{ page }}</a>
    </span>
    <span v-if="isNextPage" style="margin: 5px; cursor:hand;"><a v-on:click="goToNextPage">▷</a></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalPages: 0,
      firstPage: 0,
      lastPage: 0,
      nextPage: 0,
      prePage: 0,
      pages: [],
    }
  },
  props: {
    common: {
      type: Object,
    },
  },
  computed: {
    isPrePage: function() {
      return (this.firstPage > this.common.countPerPage);
    },
    isNextPage: function() {
      return (this.lastPage < this.totalPages);
    },
    isCurrentPage: function(page) {
      var style = "";
      if(page === this.common.currentPage) {
        style = "font-weight:bold;color:blue;font-size:15px;";
      }
      return style;
    },
  },
  methods: {
    goToPrePage() {
      this.$emit('refPage', String(this.prePage));
      console.log(this.prePage);
    },
    goToNextPage() {
      this.$emit('refPage', String(this.nextPage));
      console.log(this.nextPage);
    },
    goPage(page) {
      this.$emit('refPage', String(page));
      console.log(page);
    }
  },
  watch: {
    common: function () {
      this.pages = [];
      const total = Number(this.common.totalCount);     // 총건수
      const pageNum = Number(this.common.currentPage);  // 현재페이지
      if (total > 0) {
        const pageBlock = Number(this.common.countPerPage);
        const pageSize = Number(this.common.countPerPage);
        this.totalPages = Math.floor((total - 1) / pageSize) + 1;
        this.firstPage = Math.floor((pageNum - 1) / pageBlock) * pageBlock + 1;
        if (this.firstPage <= 0) this.firstPage = 1;
        this.lastPage = this.firstPage - 1 + pageBlock;
        if (this.lastPage > this.totalPages) this.lastPage = this.totalPages;
        this.nextPage = this.lastPage + 1;
        this.prePage = this.firstPage - 5;

        for (let i = this.firstPage; i <= this.lastPage; i++) {
          this.pages.push(i);
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
