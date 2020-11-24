/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-13 10:34:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-24 10:07:45
 */
/* jshint esversion: 6 */
function convertRes2Blob(response, name) {
  const {
    headers,
    data
  } = response
  let fileName = ''
  // 提取文件名
  if (name) {
    fileName = name
  } else {
    fileName = headers['content-disposition'].match(
      /filename=(.*)/
    )[1]
  }
  if(!data) {
    console.error('data is empty')
    return
  }




  // 将二进制流转为blob
  const blob = new Blob([data], {
    type: 'application/octet-stream'
  })

  if (typeof window.navigator.msSaveBlob !== 'undefined') {
    // 兼容IE，window.navigator.msSaveBlob：以本地方式保存文件
    window.navigator.msSaveBlob(blob, decodeURI(fileName))
  } else {
    // 创建新的URL并指向File对象或者Blob对象的地址
    const blobURL = window.URL.createObjectURL(blob)
    // 创建a标签，用于跳转至下载链接
    const tempLink = document.createElement('a')
    tempLink.style.display = 'none'
    tempLink.href = blobURL
    tempLink.setAttribute('download', decodeURI(fileName))
    // 兼容：某些浏览器不支持HTML5的download属性
    if (typeof tempLink.download === 'undefined') {
      tempLink.setAttribute('target', '_blank')
    }
    // 挂载a标签
    document.body.appendChild(tempLink)
    tempLink.click()
    document.body.removeChild(tempLink)
    // 释放blob URL地址
    window.URL.revokeObjectURL(blobURL)
  }
}

function byteDownload(response, filename) {
  return new Promise((resolve, reject) => {
    try {
      convertRes2Blob(response, filename)
      resolve(response)
    } catch (error) {
      reject(error)
    }
  })
}
export default {
  download: byteDownload
}