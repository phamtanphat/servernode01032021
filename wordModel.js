const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://abc:kjqVOHsDhByvY0pw@cluster0.corvi.mongodb.net/DatabaseWord01032021?retryWrites=true&w=majority', 
                    { 
                        useNewUrlParser: true, 
                        useUnifiedTopology: true 
                    });

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));