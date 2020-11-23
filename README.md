# byte-to-file.js
A library for files download

##

## install
```
npm install byte-to-file
```

### use in js
```
import byteDownload from 'byte-to-file'

async downloadFile() {
  const data = await axios.get('.....')
  const result = await byteDownload.download(data)
  // to do 
}

```