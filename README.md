# **Number Classification API**  

## **Project Overview**  
The **Number Classification API** is a RESTful service that accepts a number and returns interesting mathematical properties about it. It also provides a fun fact from the Numbers API.  

## **Features**  
✅ Check if a number is **prime**  
✅ Check if a number is **perfect**  
✅ Check if a number is an **Armstrong number**  
✅ Determine if a number is **even or odd**  
✅ Calculate the **sum of its digits**  
✅ Fetch a **fun fact** about the number  
✅ Returns **structured JSON responses**  
✅ Handles **error validation and incorrect input**  
✅ Fully deployed on **Vercel**  

## **Tech Stack**  
- **Node.js (Express.js)** – Backend framework  
- **JavaScript** – Primary language  
- **Axios** – For external API requests  
- **CORS** – For security  
- **Vercel** – For deployment  

## **Folder Structure**  
```
/project-root  
├── controllers/  
│   ├── classifyNumberController.js  
├── routes/  
│   ├── classifyNumberRoutes.js  
├── index.js  (Main server file)  
```  

## **Getting Started**  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/amaachiaaaaa/stage1-api.git
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Start the Server (Development Mode)**  
Set the port in your **.env** file:  
```
PORT=3000
```
Then, start the server:  
```sh
npm run dev
```

### **4️⃣ Test the API Locally**  
Open your browser or use **cURL**:  
```sh
curl http://localhost:3000/api/classify-number?number=371
```
#### **Expected Response:**  
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

## **API Endpoints**  

### **GET /api/classify-number**  
#### **Example Request:**  
```sh
GET /api/classify-number?number=28
```

#### **Success Response (200 OK):**  
```json
{
  "number": 28,
  "is_prime": false,
  "is_perfect": true,
  "properties": ["even"],
  "digit_sum": 10,
  "fun_fact": "28 is the 2nd perfect number."
}
```

#### **Error Response (400 Bad Request):**  
```json
{
  "number": "abc",
  "error": true
}
```

## **Looking for Node.js Developers?**  
[Node.js Developers on HNG](https://hng.tech/hire/nodejs-developers) 