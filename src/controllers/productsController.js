const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render ('products', {products: products})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
        const productParaEnviar = products.find( producto => producto.id == req.params.id)
        res.render('detail', {product: productParaEnviar})
	},

	// Create - Form to create
	create: (req, res) => {
		res.render ('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
		res.send (req.body)
	},

	// Update - Form to edit
	edit: (req, res) => {
		const productParaEditar = products.find( producto => producto.id == req.params.id)
		res.render('product-edit-form', {productToEdit: productParaEditar})		
	},
	// Update - Method to update
	update: (req, res) => {
		res.send ( 'Producto Editado' + req.body)
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		res.send ( 'Producto Eliminado')
	}
};

module.exports = controller;