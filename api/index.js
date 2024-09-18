import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.router.js';
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json())
app.use(cors())

app.listen(3000, () => {
  console.log("server running on port 3000");
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err,re,res,next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message
    })
})
