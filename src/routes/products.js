// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require ('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

      cb(null,  'public/images/products')
    },
    filename: function (req, file, cb) {

      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
   
const upload = multer({ storage: storage })

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index);
router.get('/list', productsController.list); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/', upload.single('image'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 


module.exports = router;
