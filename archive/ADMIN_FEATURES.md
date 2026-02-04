# Admin Dashboard Features

## Overview
The admin dashboard allows you to view, manage, and track leads submitted through the contact form.

## Features Implemented

### 1. Admin Authentication (JWT)
- **Login Page**: `/admin/login`
- **JWT-based authentication** with token storage
- **Protected routes** that require authentication
- **Auto-logout** on token expiration (24 hours)

**Default Credentials:**
- Email: `admin@buildlabs.in`
- Password: `admin123`

⚠️ **Important**: Change these credentials in production! Edit `src/services/auth.js` to update the admin credentials.

### 2. Admin Dashboard
- **URL**: `/admin/dashboard`
- **View all leads** submitted through the contact form
- **Lead statistics** (Total, New, Contacted, Converted, Lost)
- **Search and filter** leads by name, email, company, service, or status
- **Update lead status** (New → Contacted → Converted/Lost)
- **View lead details** in a modal
- **Delete leads** (with confirmation)

### 3. Email Notifications
- **Automatic email notifications** sent when a new lead is submitted
- **Admin notification**: Sent to admin email with lead details
- **Confirmation email**: Sent to the lead confirming submission

**Current Implementation:**
- Email notifications are logged to console (for demo)
- Ready to integrate with EmailJS, SendGrid, AWS SES, or your backend API

## How to Use

### Accessing the Admin Dashboard

1. Navigate to `/admin/login` in your browser
2. Enter the admin credentials
3. You'll be redirected to `/admin/dashboard`

### Managing Leads

1. **View Leads**: All leads are displayed in a table
2. **Search**: Use the search bar to find specific leads
3. **Filter**: Filter leads by status (New, Contacted, Converted, Lost)
4. **Update Status**: Click the status dropdown to change a lead's status
5. **View Details**: Click the eye icon to view full lead details
6. **Delete**: Click the trash icon to delete a lead

### Lead Statuses

- **New**: Just submitted, not yet contacted
- **Contacted**: Admin has reached out to the lead
- **Converted**: Lead became a customer
- **Lost**: Lead is no longer interested

## Data Storage

Currently, leads are stored in **localStorage** (browser storage). This is suitable for:
- Development and testing
- Small-scale deployments
- Demo purposes

For production, you should:
1. Replace localStorage with a backend API
2. Use a database (MongoDB, PostgreSQL, etc.)
3. Update the services in `src/services/leads.js` to make API calls

## Email Integration

### Option 1: EmailJS (Recommended for quick setup)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update `src/services/email.js`:

```javascript
import emailjs from '@emailjs/browser'

// In sendLeadNotification:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  templateParams,
  'YOUR_PUBLIC_KEY'
)
```

4. Install EmailJS: `npm install @emailjs/browser`

### Option 2: Backend API

1. Create a backend endpoint: `POST /api/send-email`
2. Update `src/services/email.js` to call your API
3. Use services like SendGrid, AWS SES, or Nodemailer

### Option 3: Serverless Functions

Use Vercel Functions, Netlify Functions, or AWS Lambda to send emails.

## Security Notes

⚠️ **Important Security Considerations:**

1. **Change Default Password**: Update admin credentials in `src/services/auth.js`
2. **Use Real JWT**: Replace the simple token generation with a proper JWT library (like `jsonwebtoken`)
3. **Backend Validation**: In production, validate authentication on the backend
4. **HTTPS**: Always use HTTPS in production
5. **Rate Limiting**: Add rate limiting to prevent brute force attacks
6. **Environment Variables**: Store sensitive data in environment variables

## File Structure

```
src/
├── services/
│   ├── auth.js          # Authentication service
│   ├── leads.js         # Leads CRUD operations
│   └── email.js         # Email notification service
├── pages/
│   ├── AdminLogin.jsx   # Admin login page
│   └── AdminDashboard.jsx # Admin dashboard
├── components/
│   └── ProtectedRoute.jsx # Route protection component
└── App.jsx              # Updated with admin routes
```

## Testing

1. **Submit a Contact Form**: Go to `/contact` and submit the form
2. **Check Console**: Email notifications will be logged to console
3. **Login to Admin**: Go to `/admin/login` and login
4. **View Lead**: The lead should appear in the dashboard
5. **Update Status**: Change the lead status and verify it updates
6. **Search/Filter**: Test search and filter functionality

## Next Steps

1. **Backend Integration**: Connect to a real backend API
2. **Database**: Store leads in a database instead of localStorage
3. **Email Service**: Integrate a real email service
4. **Export Leads**: Add CSV/Excel export functionality
5. **Analytics**: Add charts and graphs for lead analytics
6. **Notifications**: Add real-time notifications for new leads
7. **User Management**: Add multiple admin users with roles

## Support

For issues or questions, check the code comments in the service files or refer to the main README.md file.

