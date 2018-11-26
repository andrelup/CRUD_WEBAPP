const mongoose = require('mongoose');

const URI = 'mongodb://localhost/tutorial';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.err(err));

    module.exports = mongoose;