import mongoose from 'mongoose'
import User from './server/models/userModel.js'

const connectDB = async () => {
    try {
        const databaseName = 'FunLanguage';
        const con = await mongoose.connect(`mongodb://localhost:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Connection successful : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;