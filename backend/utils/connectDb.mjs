import mongoose from "mongoose";
import colors from "colors";

const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      colors.bgWhite(
        colors.black(
          `> Connection esatblished to MongoDB on host: ${connection.host}`
        )
      )
    );
  } catch (err) {
    console.log(colors.red(err));
  }
};

export { connectDb };
