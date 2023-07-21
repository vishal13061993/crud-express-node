var express = require('express');
var app = module.exports = express();

app.put('/products/:id', (req, res) => {
    const product = global.products.find(p => p.id === parseInt(req.params.id));
    
    if (!product) {
        var data = {};
        data.id = parseInt(req.params.id);
        data.name = req.body.name;
        data.price = req.body.price;
        global.products.push(data);
        return res.status(200).send('The product has been added.');
    } 
    
    // console.log("body "+JSON.stringify(req.body));
    // console.log("params "+JSON.stringify(req.params));

    product.name = req.body.name;
    product.price = req.body.price;

    res.send('The product has been updated');
});
