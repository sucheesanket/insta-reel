const express=require("express");
const app=express();
const cors=require("cors")

const cookieparser=require("cookie-parser")
const authRouter=require("./routes/auth.routes")
const postRouter=require("./routes/post.routes");

const userRouter = require("./routes/user.routes");


app.use(express.json());
app.use(cookieparser());
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173"
}))
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter)
app.use("/api/users",userRouter)
module.exports=app;

