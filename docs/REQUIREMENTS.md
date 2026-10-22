# Requirements - SparklePro Cleaning Services Platform

## Functional Requirements

### Phase 1 Requirements (Planned)

#### FR-1: Multi-Page Navigation
- Website uses React Router for multiple pages
- Navigation bar visible on all pages
- Links to Home, Services, About, Contact pages
- Mobile-friendly navigation

#### FR-2: Home Page
- Hero section with company name and tagline
- Call-to-action button
- Loads within 3 seconds on standard broadband

#### FR-3: Services Page
- Lists at least 3 service types
- Each service has title and description
- Visually organized layout

#### FR-4: About Us Page
- Describes company mission and values
- Includes experience information
- Builds trust with potential customers

#### FR-5: Contact Page
- Displays contact information (phone, email, address)
- WhatsApp booking form (no backend, opens WhatsApp with pre-filled message)
- Form fields: name, email, phone, service type, message
- Client-side validation

#### FR-6: Responsive Design
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)
- Layout adapts to screen size

### Phase 2 Requirements (Planned)

#### FR-7: Online Booking System
- Submit booking requests via backend API
- Form collects service type, date, time, location
- Confirmation message after submission
- Email notification to customer

#### FR-8: Admin Authentication
- Secure login with password-based authentication
- Passwords hashed with bcrypt
- Session expiry after inactivity

#### FR-9: Admin Dashboard
- View all booking requests
- Update booking status
- Display booking statistics
- Accessible only to authenticated admins

#### FR-10: PostgreSQL Database
- Booking data persisted in PostgreSQL
- User data stored securely
- Data persists across server restarts
- Supports backup and recovery

## Non-Functional Requirements

### NFR-1: Performance
- Website loads within 3 seconds
- Interactive elements respond within 100ms
- Optimized page size

### NFR-2: Usability
- Intuitive interface for non-technical users
- Clear, consistent navigation
- Readable text with appropriate contrast
- WCAG 2.1 AA compliance goal

### NFR-3: Reliability
- 99% uptime (Phase 2)
- Graceful error handling
- Clear error messages

### NFR-4: Security (Phase 2)
- Passwords hashed with bcrypt
- SQL injection prevention
- XSS prevention
- CSRF prevention
- HTTPS for all communications

### NFR-5: Maintainability
- Well-organized, documented code
- Reusable React components
- Consistent code style
- Up-to-date documentation

### NFR-6: Scalability (Phase 2)
- Support multiple concurrent users
- Optimized PostgreSQL queries
- Architecture allows horizontal scaling

## User Stories

### Phase 1 User Stories (Planned)

#### US-1: Viewing Services
**As a** potential customer
**I want to** see what cleaning services are offered
**So that** I can determine if SparklePro meets my needs

**Acceptance Criteria:**
- Services page lists service types
- Each service has clear description
- Information easy to understand

#### US-2: Learning About the Company
**As a** potential customer
**I want to** learn about SparklePro's values and experience
**So that** I can trust the company with my cleaning needs

**Acceptance Criteria:**
- About Us page accessible
- Company values clearly stated
- Experience information presented

#### US-3: Contacting via WhatsApp
**As a** potential customer
**I want to** easily contact SparklePro via WhatsApp
**So that** I can inquire about services quickly

**Acceptance Criteria:**
- Contact form pre-fills WhatsApp message
- Form validates required fields
- WhatsApp opens with booking details

#### US-4: Mobile Access
**As a** mobile user
**I want to** access the website on my phone
**So that** I can research services while on the go

**Acceptance Criteria:**
- Site displays correctly on mobile
- Navigation touch-friendly
- Content readable without zooming

### Phase 2 User Stories (Planned)

#### US-5: Submitting a Booking
**As a** customer
**I want to** submit a booking request online
**So that** I can schedule cleaning services without calling

**Acceptance Criteria:**
- Booking form accessible
- Form collects necessary information
- Confirmation provided after submission

#### US-6: Managing Bookings
**As an** administrator
**I want to** view and manage booking requests
**So that** I can schedule and track cleaning jobs

**Acceptance Criteria:**
- Dashboard displays all bookings
- Admin can update booking status
- Changes saved to PostgreSQL

## Acceptance Criteria Summary

### Phase 1 Features (Planned)

|| Feature | Acceptance Criteria |
||---------|---------------------|
|| Multi-Page | React Router navigation, 4 pages |
|| Home Page | Hero with CTA, loads in 3s |
|| Services | 3+ services with descriptions |
|| About Us | Mission, values, experience |
|| Contact | Info + WhatsApp form with validation |
|| Responsive | Desktop, tablet, mobile |

### Phase 2 Features (Planned)

|| Feature | Acceptance Criteria |
||---------|---------------------|
|| Booking System | API form, confirmation, email |
|| Admin Auth | Secure login, bcrypt, session expiry |
|| Admin Dashboard | View bookings, update status, protected |
|| PostgreSQL | Data persists, backup/recovery |
