# byte-to-file.js
A library for files download, small size, no dependencies, use the axios response which contains file stream.

##

## install
```
npm install byte-to-file
```

### use in js
```
import byteToFile from 'byte-to-file'

async downloadFile() {
  const data = await axios.get('.....')
  byteDownload.download(data).then(() => {
    // complete to do
  })
}

```
