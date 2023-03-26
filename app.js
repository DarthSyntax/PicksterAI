const express = require('express');
const cors = require('cors');
const port = 5000;
const aiRoutes = require('./routes/aiRoutes');
const app = express();

app.use(express.json());

app.use(cors());

app.use('/openai', aiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
