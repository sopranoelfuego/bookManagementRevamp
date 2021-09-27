import mongoose from 'mongoose';
export const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Database connected!'))
    .catch((err) => console.log(err));
};
