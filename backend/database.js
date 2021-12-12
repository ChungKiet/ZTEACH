const mongoose = require('mongoose');
const uri = 'mongodb+srv://pqhuy:10082001Db@cluster0.bmlck.mongodb.net/zteach?retryWrites=true&w=majority'

async function connect() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connect successfully!!');
 
    } catch (err) {
        console.log('Database connect failue!!');
        console.error(err);
    }
}

module.exports = { connect };
