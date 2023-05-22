import mongoose from 'mongoose'
import User from './userModel.js'

const connectDB = async () => {
    try {
        const databaseName = 'FunLanguage';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`);
        console.log(`Connection successful : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB;