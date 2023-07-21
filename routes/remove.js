var express = require('express');
var app = module.exports = express();

app.delete('/products/:id', (req, res) => {
    const index = global.products.findIndex(p => p.id === parseInt(req.params.id));
    if (index == -1) {
        return res. status(404).send('The product with the given ID was not found.');
    } else {
        global.products.splice(index, 1);
        res.status(200).send('Product removed'); 
    }
});