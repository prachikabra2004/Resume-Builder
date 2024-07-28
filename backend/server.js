const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/template', require('./routes/template'));
// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/template', require('./routes/template'));
app.use('/api/sections', require('./routes/sections'));
// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profile', require('./routes/profile'));
app.use('/api/template', require('./routes/template'));
app.use('/api/sections', require('./routes/sections'));
app.use('/api/export', require('./routes/export'));
