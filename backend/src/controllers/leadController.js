const Lead = require('../models/Lead');
const sendEmail = require('../utils/emailService');

// @desc    Create new lead
// @route   POST /api/leads
// @access  Public
exports.createLead = async (req, res, next) => {
    try {
        const lead = await Lead.create(req.body);

        // Send email to admin
        try {
            if (process.env.ADMIN_EMAIL) {
                const message = `
          New Lead Received:
          Name: ${lead.name}
          Email: ${lead.email}
          Phone: ${lead.phone}
          Message: ${lead.message}
        `;

                await sendEmail({
                    email: process.env.ADMIN_EMAIL,
                    subject: 'New Lead Notification',
                    message
                });
            }
        } catch (err) {
            console.error('Email send failure:', err);
            // Don't fail the request if email fails, just log it
        }

        res.status(201).json({
            success: true,
            data: lead
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
            return res.status(400).json({ success: false, error: messages });
        }
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Get all leads
// @route   GET /api/leads
// @access  Private (Admin)
exports.getLeads = async (req, res, next) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: leads.length,
            data: leads
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Get single lead
// @route   GET /api/leads/:id
// @access  Private (Admin)
exports.getLead = async (req, res, next) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ success: false, error: 'Lead not found' });
        }

        res.status(200).json({
            success: true,
            data: lead
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Update lead status
// @route   PUT /api/leads/:id
// @access  Private (Admin)
exports.updateLead = async (req, res, next) => {
    try {
        let lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ success: false, error: 'Lead not found' });
        }

        lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: lead
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Delete lead
// @route   DELETE /api/leads/:id
// @access  Private (Admin)
exports.deleteLead = async (req, res, next) => {
    try {
        const lead = await Lead.findById(req.params.id);

        if (!lead) {
            return res.status(404).json({ success: false, error: 'Lead not found' });
        }

        await lead.deleteOne();

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
