// database connection file to MongoDB
import { mongoose } from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log(`mongodb connected: ${conn.connection.host}`.blue.underline)
  } catch (error) {
    console.log(`Error: ${error.message}`.underline.bold)
    process.exit(1)
  }
}

export default connectDB
