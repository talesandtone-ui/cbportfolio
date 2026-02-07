const express = require('express');
const {
    createLead,
    getLeads,
    getLead,
    updateLead,
    deleteLead
} = require('../controllers/leadController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .post(createLead)
    .get(protect, getLeads);

router.route('/:id')
    .get(protect, getLead)
    .put(protect, updateLead)
    .delete(protect, deleteLead);

module.exports = router;
