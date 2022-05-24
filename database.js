const { default: mongoose } = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tanveer:023-18-0041@test.jwf08.mongodb.net/animals?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;