require('dotenv').config();
const router = require('express').Router();
const {handphone} = require('../controllers');

router.get('/hp', handphone.getDataHp);
router.get('/hp/:id', handphone.getDataHpByID);
router.post('/hp', handphone.addDataHp);
router.patch('/hp/:id', handphone.editDataHp);
router.delete('/hp/:id', handphone.deleteDataHp);



module.exports = router;