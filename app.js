const express = require('express');

const app = express();
app.use(express.json());



app.get('/mean', (req,res) =>{
    const nums = req.query.nums;
    const operation = 'mean'
    return res.json({ operation: operation, value: nums });
})
    
app.get('/median ', (req,res) =>{
        const nums = req.query.nums;
        const operation = 'median '
        return res.json({ operation: operation, value: nums });
    })

app.get('/mode', (req,res) =>{
        const nums = req.query.nums;
        const operation = 'mean'
        return res.json({ operation: operation, value: nums });
    })


    app.listen(3000, function () {
        console.log('App on port 3000');
      })