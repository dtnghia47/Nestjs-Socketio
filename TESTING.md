# POST to /auth/login

curl -X POST http://localhost:5000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"

# result -> {"userId":1,"username":"john"}

# POST to /auth/login

curl -X POST http://localhost:5000/auth/login -d '{"username": "john", "password": "changeme"}' -H "Content-Type: application/json"

# result -> {"access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}

# Note: above JWT truncated
