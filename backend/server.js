// server.js page
const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env file

require("./db/conn");


const port = process.env.PORT || 5000;

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.use(express.json({ extended: false }));

const newsRouter = require("./routes/news")
const blogRouter = require("./routes/blog")
const workRouter = require("./routes/ourWorks")
// const registerRouter = require("./routes/register")
const aboutUsRouter = require("./routes/aboutUs")
const servicesRouter = require("./routes/services")
const teamRouter = require("./routes/team")
const testimonialRouter = require("./routes/testimonial")
const productRouter = require("./routes/product")
const contactRouter = require("./routes/contact")


const authRouter = require("./routes/authRoutes");

app.use(newsRouter);
app.use(blogRouter);
app.use(workRouter);
// app.use(registerRouter);
app.use(aboutUsRouter);
app.use(servicesRouter);
app.use(teamRouter);
app.use(testimonialRouter);
app.use(productRouter);
app.use(contactRouter);


app.use(authRouter);




// Handle preflight requests
// app.options('*', cors());

 app.listen(port, () => {
    console.log(`Connection is setup at port ${port}`);
});