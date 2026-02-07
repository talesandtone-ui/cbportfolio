# Digital Marketing Agency Backend

Backend API for handling leads, authentication, and analytics for the digital marketing agency.

## Setup

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Environment Variables**
    Create a `.env` file in the root of the `backend` directory (if not exists) and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    NODE_ENV=development
    EMAIL_SERVICE=gmail
    EMAIL_USER=your_email@gmail.com
    EMAIL_PASS=your_email_app_password
    ADMIN_EMAIL=admin@agency.com
    ```

3.  **Run Server**
    ```bash
    # Development (with nodemon)
    npm run dev

    # Production
    npm start
    ```

## API Endpoints

### Auth
- **POST** `/api/auth/register` - Register a new user (admin)
    - Body: `{ name, email, password }`
- **POST** `/api/auth/login` - Login user
    - Body: `{ email, password }`
    - Returns: JWT Token in Cookie and Body

### Leads
- **POST** `/api/leads` - Create a new lead (Public)
    - Body: `{ name, email, phone, message }`
    - Sends email notification to `ADMIN_EMAIL`
- **GET** `/api/leads` - Get all leads (Protected)
    - Headers: `Authorization: Bearer <token>`
- **GET** `/api/leads/:id` - Get single lead (Protected)
- **PUT** `/api/leads/:id` - Update lead status (Protected)
    - Body: `{ status }` (New, Contacted, Qualified, Lost, Converted)
- **DELETE** `/api/leads/:id` - Delete lead (Protected)

### Analytics
- **GET** `/api/analytics` - Get lead analytics (Protected)
    - Returns: Total leads, daily/weekly/monthly counts, and breakdown by status.

## Folder Structure
- `src/config`: Database configuration
- `src/controllers`: Request handlers
- `src/models`: Mongoose models (User, Lead)
- `src/routes`: API route definitions
- `src/middleware`: Custom middleware (Auth, Rate Limit)
- `src/utils`: Utility functions (Email Service)
