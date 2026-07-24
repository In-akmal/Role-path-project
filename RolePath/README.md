# RolePath Frontend

A responsive RolePath MVP frontend built with HTML5, CSS3 and Vanilla JavaScript.

## Run
Open `index.html` with Live Server in VS Code.

## Demo behavior
- Free roadmaps start immediately.
- Premium roadmaps use a dummy ₹29 payment flow.
- Enrolled roadmaps and checkbox progress are saved in browser localStorage.
- No real authentication, Google OAuth, Razorpay, or backend is implemented yet.

## Future Spring Boot integration
Replace localStorage operations in `js/script.js` with REST API calls for:
- authentication
- roadmaps
- purchases
- progress
- profile

Real payment verification must happen on the backend.
