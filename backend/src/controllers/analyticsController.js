const Lead = require('../models/Lead');

// @desc    Get analytics (Total, Daily, Weekly, Monthly)
// @route   GET /api/analytics
// @access  Private (Admin)
exports.getAnalytics = async (req, res, next) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const weekStart = new Date();
        weekStart.setDate(weekStart.getDate() - 7);
        weekStart.setHours(0, 0, 0, 0);

        const monthStart = new Date();
        monthStart.setMonth(monthStart.getMonth() - 1);
        monthStart.setHours(0, 0, 0, 0);

        const totalLeads = await Lead.countDocuments();
        const dailyLeads = await Lead.countDocuments({ createdAt: { $gte: today } });
        const weeklyLeads = await Lead.countDocuments({ createdAt: { $gte: weekStart } });
        const monthlyLeads = await Lead.countDocuments({ createdAt: { $gte: monthStart } });

        // Status breakdown
        const leadsByStatus = await Lead.aggregate([
            {
                $group: {
                    _id: '$status',
                    count: { $sum: 1 }
                }
            }
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalLeads,
                dailyLeads,
                weeklyLeads,
                monthlyLeads,
                leadsByStatus
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
