# byte-download.js
A library for files download

##

## install
```
npm install byte-download
```

### use in js
```
import byteDownload from 'byteDownload'

async downloadFile() {
  const data = await axios.get('.....')
  const result = await byteDownload.download(data)
  // to do 
}

```