const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Word = require('./wordModel')

app.use(bodyParser.json())

app.get("/word", (req, res) => {
    Word.find({})
        .then(words => res.send({ success: true, words: words.reverse() }))
        .catch(error => res.send({ success: false, message: error }))
})

//insert 
app.post("/word", (req, res) => {
    const { en, vn } = req.body
    if (en.trim() === '' || vn.trim() === '') {
        return res.send({ success: false, message: "Emty value" })
    }
    const newWord = new Word({ en, vn })
    newWord.save()
        .then(w => {
            if (w) {
                res.send({ success: true, word: w })
            } else {
                res.send({ success: false, message: "Thêm thất bại" })
            }
        })
        .catch(error => {
            if (error.code === 11000){
               return res.send({ success: false, message: "Duplicate value" })
            }
            return res.send({ success: false, message: error})
        })
})
//update
app.put("/word/:_id", (req, res) => {
    const { _id } = req.params
    const { isMemorized } = req.body
    if (_id.trim() === '' || isMemorized === null) {
        return res.send({ success: false, message: "Emty value" })
    }
    Word.findByIdAndUpdate(_id, { isMemorized }, { new: true })
        .then(w => {
            if (w) {
                res.send({ success: true, word: w })
            } else {
                res.send({ success: false, message: "Cập nhật thất bại" })
            }
        })
        .catch(error => res.send({ success: false, message: error }))
})
//delete
app.delete("/word/:_id", (req, res) => {
    const { _id } = req.params
    if (_id.trim() === '') {
        return res.send({ success: false, message: "Emty value" })
    }
    Word.findByIdAndDelete(_id)
        .then(w => {
            if (w) {
                res.send({ success: true, word: w })
            } else {
                res.send({ success: false, message: "Xoá thất bại" })
            }
        })
        .catch(error => res.send({ success: false, message: error }))
})

app.listen(process.env.PORT || '3000', () => console.log("Server started"))