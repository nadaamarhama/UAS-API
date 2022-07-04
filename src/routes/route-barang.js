require('dotenv').config();
const router = require('express').Router();
const {handphone} = require('../controllers');

router.get('/', handphone.getDataHp);
router.get('/:id', handphone.getDataHpByID);
router.post('/', handphone.addDataHp);
router.patch('/:id', handphone.editDataHp);
router.delete('/:id', handphone.deleteDataHp);



module.exports = router;