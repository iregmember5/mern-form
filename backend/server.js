// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// const formRoutes = require('./routes/form');
// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI)
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.log(err));

// app.use('/api/form', formRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// // Y6kNN8pNxnICS1Y6


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config(); // Load .env variables

// // console.log("MONGODB_URI:", process.env.MONGODB_URI); // Debug
// // console.log("FRONTEND_URL:", process.env.FRONTEND_URL); // Debug

// const formRoutes = require('./routes/form');

// const app = express();
// app.use(cors(
//     {
//         origin: ['https://mern-form-kappa.vercel.app', 'http://localhost:5173'],
//         methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
//         credentials: true,
//     }
// ));




// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// app.use('/api/form', formRoutes);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


//.......

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load .env variables

const formRoutes = require('./routes/form');
const aiRoutes = require('./routes/openai'); // ✅ AI route

const app = express();

// CORS Setup
app.use(cors({
  origin: ['https://mern-form-kappa.vercel.app', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/form', formRoutes);
app.use('/api/ai', aiRoutes); // ✅ AI message generator

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
