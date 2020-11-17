<!--
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-17 15:04:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-17 15:28:54
-->
<template>
  <div>
    <button @click="handleDownload">下载</button>
  </div>
</template>

<script>
import axios from 'axios'
import byteDownload from '../../../dist/byte-download'

export default {
  methods: {
    async handleDownload() {
      const data = axios.get('/manager/task/exportToFile?taskId=8860b5d97a1f4hdbc4f74893c3g0011')
      console.log(data);
    }
  }
}
</script>

<style>

</style>