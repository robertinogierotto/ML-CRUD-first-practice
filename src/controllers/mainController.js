const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const productsLastVisit = products.filter (product => product.category === 'visited')
		const productsSale = products.filter (product => product.category === 'in-sale' )
		res.render ('index', {productsSale: productsSale, productsLastVisit: productsLastVisit})
	},
	search: (req, res) => {
		
	},
};

module.exports = controller;
