<template>
  <div class="contents_area">
    <table>
      <thead>
      <tr>
        <td>우편번호</td>
        <td>주소</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="juso in jusos" v-bind:key="juso.roadAddr">
        <td>{{juso.zipNo}}</td>
        <td>{{juso.roadAddr}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    jusos: {
      type: Array,
    },
  },
}
</script>

<style scoped>

</style>
