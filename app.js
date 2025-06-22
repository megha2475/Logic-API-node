const express = require('express');
const app = express();
const port = 3005;
const logicRoutes = require('./routes/logicRoutes');

app.use('/',logicRoutes);

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});
