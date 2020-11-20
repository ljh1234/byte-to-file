<!--
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-17 15:04:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-20 15:34:50
-->
<template>
  <div>
    <button @click="handleDownload">下载</button>
  </div>
</template>

<script>
import axios from 'axios'
import byteDownload from '../../../src/main'

console.log('byteDownload',byteDownload)

export default {
  methods: {
    async handleDownload() {
      const data =await axios.get('/manager/task/exportToFile?taskId=4c92219611404c92b8c972d7a96b0858')
      byteDownload.download(data).then((res) => {
        console.log('res',res)
      })
    }
  }
}
</script>

<style>

</style>