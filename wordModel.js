const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:kjqVOHsDhByvY0pw@cluster0.corvi.mongodb.net/DatabaseWord01032021?retryWrites=true&w=majority', 
                    { 
                        useNewUrlParser: true, 
                        useUnifiedTopology: true 
                    });

const Word = mongoose.model('Word', { 
    en: { type: String, required: true, lowercase: true, unique: true, trim : true },
    vn: { type: String, required: true, unique: true, trim : true },
    isMemorized: { type: Boolean, required: true , default : false}
});

const newWord = new Word({en : 'One' , vn : 'Một'});

// kitty.save().then(() => console.log('meow'));
// SELECT ALl
Word.find({})
.then(words => console.log(words))
.catch(error => console.log(error))