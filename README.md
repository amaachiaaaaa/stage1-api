Number Classification API

 Project Overview
The Number Classification API is a RESTful service that accepts a number and returns interesting mathematical properties about it, along with a fun fact from the Numbers API.

 Features
Check if a number is prime.
Check if a number is perfect.
Check if a number is an Armstrong number.
Determine if a number is even or odd.
Calculate the sum of its digits.
Fetch a fun fact about the number.
Returns structured JSON responses.
Handles error validation and incorrect input.
Fully deployed on Vercel.

Tech Stack
Node.js (Express.js)
JavaScript
Axios (for external API requests)
CORS (for security)
Vercel (for deployment)

 Folder Structure
/project-root
  ├── controllers/
  │     ├── classifyNumberController.js
  ├── routes/
  │     ├── classifyNumberRoutes.js
  ├── index.js (Your main server file)

 Getting Started
1️ Clone the Repository
git clone https://github.com/amaachiaaaaa/stage1-api.git

2️ Install Dependencies
npm install

PORT=3000
3 Start the Server (Development Mode)
npm run dev
4 Test the API Locally
Open your browser or use curl:

curl http://localhost:3000/api/classify-number?number=371
Expected Response:

{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
 API Endpoints
GET /api/classify-number
Request:
GET /api/classify-number?number=28
Success Response (200 OK):
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the 2^{nd} perfect number."
}
Error Response (400 Bad Request):
{
  "number": "abc",
  "error": true
}

Hire Node.js Developers
Node.js Developers on HNG