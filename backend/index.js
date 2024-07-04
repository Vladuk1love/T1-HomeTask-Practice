import express from 'express'
import axios from "axios";
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())


function encode(email, code) {
  let buffer = Buffer.from(`${email}:${code}`, 'utf8')
  return buffer.toString("base64");
}


app.post('/set-status', async (req, res) => {
  try {
    const encodedString = encode(req.body.email, req.body.code)
    const data = {
      "token": encodedString,
      "status": "increased"
    }
    await axios.post('http://193.19.100.32:7000/api/set-status', data).then((result) => {
      res.json({message:result.data})
    }).catch(e => {
      console.log(e)
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