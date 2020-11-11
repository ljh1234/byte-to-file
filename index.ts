/*
 * @Description: 
 * @Author: liujunhua
 * @Date: 2020-11-11 18:24:53
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-11 18:36:11
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


export const download = async (url: string, resOpts: any = {}) => {
  const { type = 'get', data = '' } = resOpts
  const queryArgs = {
    url,
    method: type,
    data,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      withCredentials: true,
    },
  }
  // tips: 这里直接返回的是response整体!
  const res = await axios.request(queryArgs).catch(err => console.log(err))
  const result = ((res: any) => res)(res)
  convertRes2Blob(result)
}