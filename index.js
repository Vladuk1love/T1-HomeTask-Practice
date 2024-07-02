import express from 'express'

const app = express()
app.use(express.json())

function encode(email, code) {
  let buffer = Buffer.from(`${email}:${code}`, 'utf8')
  return buffer.toString("base64");
}


app.post('/set-status', (req, res) => {
  try {
    const encodedString = encode(req.body.email, req.body.code)

    res.json({
      "encoded_string": encodedString
    })
  } catch (error){
    console.log(error)
  }
})


app.listen(9000, (error) => {
  if (error) {
    return console.log('Server Error: ', error)
  } else {
    return console.log('Server is successfully started')
  }
})