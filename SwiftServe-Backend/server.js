import express from 'express';
import mongoose from 'mongoose'
// import { data } from './mainServicesData.js';
import dotenv from 'dotenv'
import ServiceRouter from './routers/servicesRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import cors from 'cors'
dotenv.config()


const app = express()
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Mongoose connection error:', error.message);
  });
//   :) thank youuuu sign up krke dekho

// mongoose.connect('mongodb://localhost:27017/Ecommerce')
// app.get('/', (req, res) => {
//     res.send('Server started successfully!')
// })

// app.use(express.static('assets/images'))
app.use('/api/users', userRouter)
app.use('/api/services', ServiceRouter)
app.use('/api/orders', orderRouter);
// app.get('/api/services', (req, res) => {
//     res.send(data.services)
// })
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
app.listen(process.env.PORT || 5000, () => {
    console.log("server started at localhost:5000")
})
