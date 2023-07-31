import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    // Set `strictQuery` option to `false` to avoid the DeprecationWarning
    mongoose.set('strictQuery', false);

    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(
      `Connected To MongoDB Database`.bgMagenta.white
    );
  } catch (error) {
    console.error(`Error in MongoDB: ${error.message}`.bgRed.white);
    process.exit(1); // Exit the process with an error code (optional)
  }
};

export default connectDB;
