# AI SaaS Chatbot Backend

- Built using Node, TS, and Express
- Integrated with Open AI API

## getting started

- clone the repo: `git clone https://github.com/Levy-Naibei/AI-chatbot.git`
- `cd AI-chatbot`
- `yarn/npm install`
- `yarn/npm dev`
- Test API with `Postman` or `client` of your choice

## API Documentation

### user signup

- endpoint: POST base_url/api/v1/users/signup
- payload: `{ name: "username", email: "email", password: "password"  }`

### user login

- endpoint: POST base_url/api/v1/users/login
- payload: `{ email: "email", password: "password"  }`

### fetch users

- endpoint: GET base_url/api/v1/users
