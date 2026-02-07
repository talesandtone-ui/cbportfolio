const express = require('express');
const { protect, authorize } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Lead = require('../models/Lead');
const Order = require('../models/Order');
const ActivityLog = require('../models/ActivityLog');

const router = express.Router();

// protect all routes
router.use(protect);
router.use(authorize('admin'));

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
router.get('/stats', async (req, res) => {
    try {
        const totalLeads = await Lead.countDocuments();
        const totalUsers = await User.countDocuments({ role: 'user' });
        const totalOrders = await Order.countDocuments();

        // Calculate revenue
        const orders = await Order.find({ paymentStatus: 'paid' });
        const revenue = orders.reduce((acc, order) => acc + order.amount, 0);

        // Get recent leads stats
        const newLeads = await Lead.countDocuments({ status: 'new' });
        const contactedLeads = await Lead.countDocuments({ status: 'contacted' });
        const convertedLeads = await Lead.countDocuments({ status: 'converted' });
        const lostLeads = await Lead.countDocuments({ status: 'lost' });

        res.json({
            success: true,
            data: {
                totalLeads,
                totalUsers,
                totalOrders,
                revenue,
                leadStats: {
                    new: newLeads,
                    contacted: contactedLeads,
                    converted: convertedLeads,
                    lost: lostLeads
                }
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// @desc    Get activity logs
// @route   GET /api/admin/activity
router.get('/activity', async (req, res) => {
    try {
        const logs = await ActivityLog.find()
            .populate('user', 'name email')
            .sort({ timestamp: -1 })
            .limit(50);

        res.json({
            success: true,
            data: logs
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// @desc    Get all users
// @route   GET /api/admin/users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().select('-password').sort({ createdAt: -1 });
        res.json({ success: true, data: users });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

// @desc    Get all orders
// @route   GET /api/admin/orders
router.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'name email')
            .sort({ createdAt: -1 });
        res.json({ success: true, data: orders });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
});

module.exports = router;
