# Database Design - SparklePro Cleaning Services Platform

## Database Choice

### Phase 1
No database required. Phase 1 is a static website with no backend or data persistence.

### Phase 2 (Planned)
**PostgreSQL**

**Rationale:**
- Relational data model fits booking system
- ACID compliance for data integrity
- Complex query support
- Mature and widely-used
- Good free hosting (Supabase, Railway, Neon)

**Rejected Alternative:**
- MongoDB: Document-based but relational model preferred for structured booking data

## Database Schema (Phase 2 - Planned)

### Users Table
Stores administrator account information.

|| Column | Type | Constraints | Description |
||--------|------|-------------|-------------|
|| id | UUID/INTEGER | PRIMARY KEY | Unique user identifier |
|| email | VARCHAR(255) | UNIQUE, NOT NULL | User email address |
|| password_hash | VARCHAR(255) | NOT NULL | Bcrypt hashed password |
|| name | VARCHAR(255) | NOT NULL | User full name |
|| role | VARCHAR(50) | NOT NULL, DEFAULT 'admin' | User role (admin, staff) |
|| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Account creation timestamp |
|| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Last update timestamp |
|| last_login | TIMESTAMP | NULLABLE | Last login timestamp |

### Bookings Table
Stores booking request information.

|| Column | Type | Constraints | Description |
||--------|------|-------------|-------------|
|| id | UUID/INTEGER | PRIMARY KEY | Unique booking identifier |
|| customer_name | VARCHAR(255) | NOT NULL | Customer full name |
|| customer_email | VARCHAR(255) | NOT NULL | Customer email address |
|| customer_phone | VARCHAR(50) | NOT NULL | Customer phone number |
|| service_type | VARCHAR(100) | NOT NULL | Type of cleaning service |
|| booking_date | DATE | NOT NULL | Requested service date |
|| booking_time | TIME | NOT NULL | Requested service time |
|| address | TEXT | NOT NULL | Service address |
|| city | VARCHAR(100) | NOT NULL | City (Nairobi, etc.) |
|| notes | TEXT | NULLABLE | Additional customer notes |
|| status | VARCHAR(50) | NOT NULL, DEFAULT 'pending' | Booking status (pending, confirmed, completed, cancelled) |
|| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Booking creation timestamp |
|| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Last update timestamp |
|| assigned_to | UUID/INTEGER | NULLABLE, FOREIGN KEY | Assigned staff member (references users.id) |

### Services Table (Optional)
Stores available service types and pricing.

|| Column | Type | Constraints | Description |
||--------|------|-------------|-------------|
|| id | UUID/INTEGER | PRIMARY KEY | Unique service identifier |
|| name | VARCHAR(100) | NOT NULL | Service name |
|| description | TEXT | NOT NULL | Service description |
|| base_price | DECIMAL(10,2) | NOT NULL | Base price for service |
|| duration_hours | INTEGER | NOT NULL | Estimated duration in hours |
|| is_active | BOOLEAN | NOT NULL, DEFAULT TRUE | Whether service is currently offered |
|| created_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Creation timestamp |
|| updated_at | TIMESTAMP | NOT NULL, DEFAULT NOW() | Last update timestamp |

## Entity Relationships

```
Users (1) ──────< (0..*) Bookings
  │                      │
  │ assigned_to           │
  └──────────────────────┘

Services (1) ──────< (0..*) Bookings
  │                      │
  │ service_type         │
  └──────────────────────┘
```

**Relationships:**
- One user (admin/staff) can be assigned to many bookings
- One booking is assigned to zero or one users
- One service type can be used for many bookings
- One booking is for one service type

## Data Storage Strategy

### Phase 1
No booking data storage. Contact form opens WhatsApp with pre-filled message.

### Phase 2 (Planned)
- All booking data stored in PostgreSQL
- Each booking is a row in the bookings table
- Customer information stored with booking
- Status tracking through booking lifecycle
- Historical data retained for analysis

### Data Access Patterns

**Read Operations:**
- Admin dashboard queries all bookings
- Admin filters bookings by status, date, or customer
- Public site reads available services (if services table used)

**Write Operations:**
- Customers create new booking records
- Admins update booking status
- Admins assign bookings to staff
- System updates timestamps on changes

### Data Integrity

**Constraints:**
- Primary keys ensure unique identification
- Foreign keys ensure referential integrity
- NOT NULL constraints ensure required data
- UNIQUE constraints prevent duplicates (email)
- CHECK constraints validate data (e.g., future dates)

**Transactions:**
- Booking creation wrapped in transaction
- Status updates use transactions if multiple tables affected
- Rollback on error to maintain consistency

## Indexing Strategy (Planned)

**Recommended Indexes:**

1. **Bookings table:**
   - Index on `status` for filtering by status
   - Index on `booking_date` for date range queries
   - Index on `customer_email` for customer lookup
   - Composite index on `(status, booking_date)` for dashboard queries

2. **Users table:**
   - Index on `email` for login lookups
   - Index on `role` for role-based queries

3. **Services table:**
   - Index on `is_active` for filtering active services

## Backup and Recovery Strategy (Planned)

1. **Automated Backups:**
   - Daily full database backups
   - Retain backups for 30 days
   - Store backups in separate location

2. **Backup Types:**
   - Full backups weekly
   - Incremental backups daily
   - Point-in-time recovery capability

3. **Recovery Plan:**
   - Documented recovery procedures
   - Regular recovery testing
   - Recovery time objective (RTO): 4 hours
   - Recovery point objective (RPO): 24 hours

## Migration Strategy (Planned)

**Phase 1 to Phase 2 Transition:**

1. **Database Setup:**
   - Create PostgreSQL database
   - Run migration scripts to create tables
   - Seed initial data (services, admin user)

2. **Application Updates:**
   - Add Node.js/Express backend API
   - Update frontend to use API
   - Add authentication
   - Deploy backend and database

## Security Considerations (Planned)

### Data Protection
- All connections use SSL/TLS
- Database credentials in environment variables
- Regular security updates
- Principle of least privilege for database users

### Sensitive Data
- Passwords hashed with bcrypt before storage
- Consider encrypting customer phone numbers
- Log access to sensitive data
- Data retention policies

### Access Control
- Separate database users for different roles
- Read-only user for reporting
- Application user with limited permissions
- Admin user for maintenance

## Performance Considerations (Planned)

**Query Optimization:**
- Use indexes for frequently queried columns
- Avoid SELECT * in production queries
- Use connection pooling
- Implement query result caching where appropriate

**Scalability:**
- Start with single database instance
- Consider read replicas for high read volume
- Partition large tables by date if needed
- Monitor query performance regularly

## Database Maintenance (Planned)

**Regular Tasks:**
- Update statistics for query optimizer
- Rebuild indexes periodically
- Archive old booking data
- Monitor disk space usage
- Review and optimize slow queries

**Monitoring:**
- Track connection pool usage
- Monitor query performance
- Set up alerts for errors
- Track database size growth
