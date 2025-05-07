import mongoose from 'mongoose';
import colors from 'colors';

export const connectDB = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_URI);
    const url = `${connection.host}:${connection.port}`;
    console.log(colors.cyan.bold(`✅ MongoDB Connected: ${url}`));
  } catch (error) {
    console.error(colors.bgRed.white.bold(`❌ MongoDB connection error: ${error.message}`));
    process.exit(1); // salir del proceso si la conexión falla
  }
};
