
/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-13 10:34:21
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-13 16:11:38
 */

function convertRes2Blob(response: any) {
  // 提取文件名
  const fileName = response.headers['content-disposition'].match(
    /filename=(.*)/
  )[1]
  
  // 将二进制流转为blob
  const blob = new Blob([response.data], { type: 'application/octet-stream' })

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


export default function byteDownload(response: any) {
  return new Promise(() => { convertRes2Blob(response) })
}
