const mongoose = require('mongoose');

const connectToMongo = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        .then(()=>{
            console.log("Connected to Mongo Atlas")
        });
    }
    catch(err){
        console.log("Something went wrong", err)
    }
}

module.exports = connectToMongo;