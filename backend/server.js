import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './src/config/database.js';
import authRouter from './src/routes/auth.js';
import productRouter from './src/routes/product.js';
import cartRouter from './src/routes/cart.js';

const app = express();


app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: ["http://localhost:5173" ,"https://smokewears.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.use("/api/users", authRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.redirect(process.env.NEXT_PUBLIC_FRONTEND_URL)
})

export default app;


await connectDB();
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on ${port}`));

