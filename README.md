# Pointr API

A RESTful API for managing Sites, Buildings, and Levels in the Pointr CMS system.  
Built with TypeScript and Express, tested with Playwright, and integrated with GitHub Actions for CI/CD.

---

## 🚀 Getting Started

Follow these steps to clone and run the project locally:

### 1. Clone the repository

git clone https://github.com/kartalali/pointr-api.git  
cd pointr-api

### 2. Install dependencies

npm install

### 3. Ensure ts-node is installed

If not already installed:

npm install -D ts-node

### 4. Start the development server

npm run dev

The server will run at http://localhost:3000

---

## 🧪 Running Tests

Playwright is used for API testing. To run all tests:

npx playwright test

Test coverage includes:

- Site API: POST, GET, DELETE with positive and negative scenarios  
- Building API: POST, GET, DELETE  
- Level API: POST (single and multiple), with validation checks

---

## 🔄 CI/CD Integration

This project uses GitHub Actions for continuous integration:

- Every push or pull request to the main branch triggers automated tests  
- The Express server is launched in the CI environment before tests run  
- Workflow configuration is located in .github/workflows/ci.yml

---

## 📦 API Endpoints

Site  
- POST /api/sites  
- GET /api/sites/:id  
- DELETE /api/sites/:id

Building  
- POST /api/buildings  
- GET /api/buildings/:id  
- DELETE /api/buildings/:id

Level  
- POST /api/levels → supports both single and multiple level creation

---

## 🧠 Developer Notes

- Written in TypeScript  
- Uses Express for routing  
- Tested with Playwright  
- CI/CD powered by GitHub Actions  
- Includes .gitignore and tsconfig.json for clean development

---

## 👤 Author

Ali Kartal – Senior/Lead QA Automation Engineer  
Specialized in API/WebSocket testing, CI/CD integration, and edge-case analysis  
GitHub: https://github.com/kartalali