const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:kjqVOHsDhByvY0pw@cluster0.corvi.mongodb.net/DatabaseWord01032021?retryWrites=true&w=majority', 
                    { 
                        useNewUrlParser: true, 
                        useUnifiedTopology: true 
                    });

const Word = mongoose.model('Word', { 
    en: { type: String, required: true, lowercase: true, unique: true, trim : true },
    vn: { type: String, required: true, unique: true, lowercase: true, trim : true },
    isMemorized: { type: Boolean, required: true , default : false}
});



// kitty.save().then(() => console.log('meow'));
// SELECT ALl
// Word.find({})
// .then(words => console.log(words))
// .catch(error => console.log(error))

// INSERT
// const newWord = new Word({ en: 'One', vn: 'Một' });
// newWord.save()
// .then(word => console.log(word))
// .catch(error => {
//     if (error.code === 11000) return console.log(new Error("Duplicate").message)
// })

// UPDATE
// Word.findByIdAndUpdate('606b10fe3562f406396adbc0',{isMemorized : true} , {new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))

// DELETE
Word.findByIdAndRemove('606b10fe3562f406396adbc0')
.then(word => console.log(word))
.catch(error => console.log(error))
