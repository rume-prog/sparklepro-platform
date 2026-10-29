# Testing Strategy - SparklePro Cleaning Services Platform

## Test Strategy

**Phase 1 (Planned):**
- Component unit tests using Vitest and React Testing Library
- Manual testing on desktop and mobile devices
- Responsive design verification on phone and tablet

**Phase 2 (Planned):**
- Backend API integration tests
- End-to-end testing with Node.js/Express backend
- PostgreSQL database integration tests

## Testing Tools

- **Vitest**: Unit testing framework for React components
- **React Testing Library**: Component testing utilities
- **Manual testing**: On physical phone and desktop browser

## Coverage Goals

### Phase 1 (planned)
- Key components have basic tests (navigation, booking form, contact section)
- Every page checked by hand on a phone and a desktop browser
- Layout checked at phone, tablet and desktop widths
- Checked in Chrome and one other browser (Firefox or Edge)

### Phase 2 (planned only, not started)
- API, database, security and end-to-end tests once a backend exists

## Test Environment

- Node.js and npm installed
- Vitest as the test runner with jsdom environment
- React Testing Library configured
- Browser DevTools for responsive checks

## Planned Test Cases

| ID | Test Case | Expected Result | Status |
|----|-----------|-----------------|--------|
| TC-1 | Home page loads and displays hero section | No console errors, hero visible | Not run |
| TC-2 | Services page displays all service offerings | Services visible with descriptions | Not run |
| TC-3 | About page loads with company information | Content displays correctly | Not run |
| TC-4 | Contact page renders contact information | Contact info visible and accessible | Not run |
| TC-5 | Navigation between pages works with React Router | Pages load without errors | Not run |
| TC-6 | Booking form opens WhatsApp with pre-filled message | WhatsApp opens with correct message | Built (not yet verified) |
| TC-7 | Responsive design on desktop (1920x1080) | Layout fits, no horizontal scroll | Not run |
| TC-8 | Responsive design on tablet (768x1024) | Layout adapts, content readable | Not run |
| TC-9 | Responsive design on mobile (375x667) | Touch targets adequate, no horizontal scroll | Not run |
| TC-10 | Component unit tests (Button, Navigation, etc.) | Basic tests for key components | Not run |
| TC-11 | Cross-browser compatibility (Chrome, Firefox, Edge) | Features work consistently | Not run |
| TC-12 | buildWhatsAppMessage with all fields filled | Encoded message contains all field data | Passed |
| TC-13 | buildWhatsAppMessage without optional message | Encoded message omits message section | Passed |
| TC-14 | buildWhatsAppMessage with special characters | Special characters properly encoded | Passed |
| TC-15 | buildWhatsAppMessage with whitespace-only message | Message section omitted when only whitespace | Passed |
| TC-16 | Submit button disabled when WhatsApp number is placeholder | Button is disabled when number starts with '[' | Passed (automated) |
| TC-17 | Notice shown when WhatsApp number not set up | Warning notice displays when number is placeholder | Passed (automated) |
| TC-18 | Quick contact WhatsApp button disabled when WhatsApp number is placeholder | Button is disabled when number starts with '[' | Passed (automated) |
| TC-19 | Phone link disabled when phone number is placeholder | No clickable link when phone starts with '[' | Passed (automated) |
| TC-20 | Call button disabled when phone number is placeholder | Button is disabled when phone starts with '[' | Passed (automated) |
| TC-21 | FAQ accordion toggles on click | FAQ item expands and collapses when button clicked | Passed (automated) |
| TC-22 | FAQ accordion is keyboard accessible | FAQ button is focusable and can be activated with Space key | Passed (automated) |
| TC-23 | FAQ accordion has correct ARIA attributes | Button has aria-expanded, aria-controls; region has role and aria-hidden | Passed (automated) |
| TC-24 | Service detail page renders for valid slug | Service name, description, and price display correctly | Passed (automated) |
| TC-25 | Service detail page shows not found for invalid slug | Error message displays when service does not exist | Passed (automated) |
| TC-26 | Service detail page links back to services | Back link navigates to /services | Passed (automated) |
| TC-27 | Service detail page links to contact page | Request a Quote button navigates to /contact | Passed (automated) |

## Test Results

Record actual results here as tests are executed:

| ID | Test Case | Actual Result | Date |
|----|-----------|---------------|------|
| - | - | - | - |

*No tests run yet*

## Defect Log

| ID | Title | Severity | Status | Date Found |
|----|-------|----------|--------|------------|
| - | - | - | - | - |

*No defects recorded yet*
