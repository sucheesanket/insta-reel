const express=require("express");
const app=express();
const cookieparser=require("cookie-parser")
const authRouter=require("./routes/auth.routes")
const postRouter=require("./routes/post.routes");

app.use(express.json());
app.use(cookieparser())
app.use("/api/auth",authRouter);
app.use("/api/posts",postRouter)
module.exports=app;

