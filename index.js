const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.post('/', (req, res) => {
    console.log(req.body)
})


app.listen(3000, () => console.log("Server started"))

// http://localhost:3000/?a=5&b=10

// http://localhost:3000/10/5

// app.get('/:a/:b', function (request, response) {
//     // const {a , b} = request.query
//     // const ketqua = parseInt(a) + parseInt(b)
//     // response.send({value : ketqua})

//     // const {a , b} = request.params
//     // console.log(a , b)

// })

