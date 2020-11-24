# byte-to-file.js
A library for files download, small size, no dependencies, use the axios response which contains file stream.

## install
```
npm install byte-to-file
```

### use in js
```
import byteToFile from 'byte-to-file'

async downloadFile() {
  const data = await axios.get('.....')
  const result = await byteToFile.download(data)
  // complete to do
}

```

### apis
```
byteToFile.download(
  data, // axios response
  /*
  * resopnse {
    config: {...},
    data: /streams/,
    headers: {...}
    ...
  }
  */,
  filename: 'test' // rename the file that u want to download
)

```

### others
This is the v1 package, I consider to add some new features in the future

