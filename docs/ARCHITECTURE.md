# Architecture - SparklePro Cleaning Services Platform

## System Architecture Overview

### Phase 1 Architecture (Planned)

```
┌─────────────────────────────────────┐
│         User Browser                 │
│  (Chrome, Firefox, Safari, Edge)     │
└──────────────┬──────────────────────┘
               │ HTTP/HTTPS
               ▼
┌─────────────────────────────────────┐
│      Static Hosting (Netlify)        │
└─────────────────────────────────────┘
```

Static website served from Netlify. No backend or database. Content built from React components with React Router for multi-page navigation.

### Phase 2 Architecture (Planned)

```
┌─────────────────────────────────────┐
│         User Browser                 │
│  (Chrome, Firefox, Safari, Edge)     │
└──────────────┬──────────────────────┘
               │ HTTP/HTTPS
               ▼
┌─────────────────────────────────────┐
│         Frontend (React)             │
│  - UI Components                    │
│  - React Router                     │
│  - API Client                       │
└──────────────┬──────────────────────┘
               │ REST API
               ▼
┌─────────────────────────────────────┐
│      Backend (Node.js/Express)       │
│  - API Routes                       │
│  - Authentication                   │
│  - Business Logic                   │
└──────────────┬──────────────────────┘
               │ SQL Queries
               ▼
┌─────────────────────────────────────┐
│         Database (PostgreSQL)        │
└─────────────────────────────────────┘
```

Frontend communicates with Node.js/Express backend via REST API. Backend handles authentication, business logic, and PostgreSQL database operations.

## Component Responsibilities

### Frontend Components (Phase 1 - Planned)

#### Page Components
- **HomePage**: Landing page with hero section
- **ServicesPage**: Displays service offerings
- **AboutPage**: Company information
- **ContactPage**: Contact form and WhatsApp integration

#### Reusable Components
- **Navigation**: Site navigation bar with React Router links
- **Footer**: Site footer with links and info
- **Button**: Reusable button component
- **FormInput**: Reusable form input component
- **Card**: Reusable card for displaying content

#### Utility Components
- **Layout**: Page layout wrapper
- **SEO**: Meta tags and SEO optimization

### Backend Components (Phase 2 - Planned)

#### API Routes
- **Auth Routes**: Login, logout, session management
- **Booking Routes**: Create, read, update, delete bookings
- **User Routes**: User management

#### Middleware
- **Authentication**: Verify user sessions
- **Error Handling**: Centralized error processing
- **Logging**: Request and error logging
- **Validation**: Input validation

#### Services
- **AuthService**: Authentication logic
- **BookingService**: Booking business logic
- **EmailService**: Email notifications

## Information Flow

### Phase 1 Flow (Planned)
1. User navigates to website URL
2. Netlify serves built static files
3. Browser renders React application
4. React Router handles page navigation
5. WhatsApp form opens WhatsApp with pre-filled message
6. No server communication occurs

### Phase 2 Flow (Planned)

#### Booking Submission
1. User fills booking form in frontend
2. Frontend validates form data
3. Frontend sends POST request to `/api/bookings`
4. Backend validates request
5. Backend authenticates user (if logged in)
6. Backend saves booking to PostgreSQL
7. Backend returns success response
8. Frontend displays confirmation
9. Backend triggers email notification

#### Admin Dashboard
1. Admin navigates to `/admin`
2. Frontend checks authentication status
3. If not authenticated, redirect to login
4. Admin enters credentials
5. Frontend sends POST request to `/api/auth/login`
6. Backend verifies credentials against PostgreSQL
7. Backend creates session or JWT token
8. Backend returns authentication token
9. Frontend stores token and redirects to dashboard
10. Frontend requests bookings from `/api/bookings`
11. Backend retrieves bookings from PostgreSQL
12. Backend returns booking data
13. Frontend displays bookings in dashboard

## Project Folder Structure

```
Sparklepro-platform/
├── README.md
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── REQUIREMENTS.md
│   ├── ARCHITECTURE.md
│   ├── DATABASE.md
│   ├── TESTING.md
│   ├── DEPLOYMENT.md
│   └── CHANGELOG.md
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── FormInput.jsx
│   │   ├── layout/
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   └── pages/
│   │       ├── HomePage.jsx
│   │       ├── ServicesPage.jsx
│   │       ├── AboutPage.jsx
│   │       └── ContactPage.jsx
│   ├── styles/
│   │   ├── global.css
│   │   └── components.css
│   ├── utils/
│   │   └── validators.js
│   ├── App.jsx
│   └── main.jsx
├── tests/
│   └── components/
├── server/ (Phase 2)
│   ├── src/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── services/
│   │   └── server.js
│   └── package.json
├── .gitignore
├── package.json
└── vite.config.js
```

## Security and Privacy Considerations

### Phase 1 Security (Planned)
- HTTPS in production
- Client-side form validation
- Input sanitization to prevent XSS
- Content Security Policy (CSP)
- Secure hosting provider

### Phase 2 Security (Planned)
- Passwords hashed with bcrypt (cost factor 10+)
- Prepared statements to prevent SQL injection
- HTTPS for all communications
- JWT or secure session management
- Rate limiting on API endpoints
- Input validation and sanitization
- Environment variables for secrets
- CORS configuration
- Regular security audits
- Updated dependencies

### Privacy Considerations
- No real personal data in Phase 1
- Phase 2: Comply with data protection regulations
- Phase 2: Data retention policies
- Phase 2: Data deletion capability
- Phase 2: Clear privacy policy
- Phase 2: Secure data storage and transmission

## Technology Choices

### Frontend Framework: React (Planned)
- Large community and ecosystem
- Component-based architecture
- Strong job market demand
- Excellent documentation
- Windsurf has good React support

**Rejected Alternatives:**
- Vue.js: Smaller ecosystem
- Svelte: Less mature ecosystem
- Angular: Steeper learning curve

### Build Tool: Vite (Planned)
- Extremely fast development server
- Modern build tooling
- Excellent React support
- Simple configuration
- Hot module replacement

**Rejected Alternatives:**
- Webpack: More complex configuration
- Parcel: Less customizable
- Create React App: Deprecated

### Backend Framework: Express.js (Phase 2 - Planned)
- Minimal and flexible
- Large middleware ecosystem
- Well-documented
- Industry standard for Node.js

**Rejected Alternatives:**
- Fastify: Smaller ecosystem
- Koa: Less middleware
- NestJS: Steeper learning curve

### Database: PostgreSQL (Phase 2 - Planned)
- Relational data model fits booking system
- ACID compliance
- Strong data integrity
- Complex query support
- Mature and widely-used
- Good free hosting (Supabase, Railway, Neon)

**Rejected Alternative:**
- MongoDB: Document-based but relational model preferred for structured booking data

### Hosting: Netlify (Phase 1 - Planned)
- Free tier available
- Easy deployment from Git
- Automatic HTTPS
- Global CDN
- Good developer experience

**Rejected Alternatives:**
- GitHub Pages: Fewer features
- AWS S3: More complex setup
- Traditional hosting: More manual work
