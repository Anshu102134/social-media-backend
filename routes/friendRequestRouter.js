const express = require('express');
const router = express.Router();
const sendRequestHandler=require('../controllers/friendRequestSend')
const acceptRequestHandler=require('../controllers/friendRequestReceive')
const cacelRequestHandler=require('../controllers/friendRequestCancel')
const getPendingRequests=require('../controllers/friendRequestInbox')
router.post('/send',sendRequestHandler)
router.post('/accept',acceptRequestHandler)
router.post('/cancel',cacelRequestHandler)
router.get('/inbox', getPendingRequests);
module.exports=router