<<<<<<< HEAD
# Quiz 5

## Group Members

- Solis Andrei
- Tuazon Maxwell

## Project Title

AI Chatbot Web Application

## Project Description

This project is a full-stack chatbot web application built with Django for the backend and React for the frontend. The system accepts user messages, sends them to the Gemini API, and returns a simplified response designed to explain technical terms in an easy-to-understand way.

## Technologies Used

- Django
- Django REST Framework
- React
- Bootstrap
- Google GenAI API

## Project Structure

- `backend/` - Django project, authentication, and chat API
- `frontend/` - React user interface

## Setup Instructions

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r ..\requirements.txt
python manage.py migrate
python manage.py runserver
```

Insert your Gemini API key in `backend/conversations/views.py` in the `genai.Client(api_key="...")` line before running the server.

### Frontend

```bash
cd frontend
npm install
npm start
```

## Main API Endpoints

- `POST /api/v1/chat/` - chatbot message endpoint
- `POST /api/v1/users/register/` - register a user
- `POST /api/v1/users/login/` - login a user
- `GET /api/v1/users/profile/` - get user profile

## Local URLs

- Backend: `http://127.0.0.1:8000`
- Frontend: `http://localhost:3000`

## Note

This project is for development and school use. The Gemini API key is currently placed directly in the backend file and should be moved to an environment variable for better security in production.
=======

