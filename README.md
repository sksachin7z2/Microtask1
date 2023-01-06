
# Welcome, This API is build for MicroTask 1

# This API is used to store, get, update and delete user information in a dummy/temporary database
The api is live 
https://p80o5n.deta.dev/
# To store the user info in dummy db

Method: POST

Endpoint: '/api/user/usercreate'

Body parameter(in JSON)
1. name
2. email
3. userName (should be given)
4. phone
5. city

# Example

{

  "name" : "sachin",
  
  "email" : "abctest@gmail.com",
  
  "userName" : "sachin123",
  
  "phone" : 8564390543,
  
  "city" : "guwahati"
  
}

# To get the information of a particular userName

Method: POST

Endpoint: '/api/user/getuser'

Body parameter(in JSON)
1. userName

# To get the information of all user

Method: GET

Endpoint: '/api/user/getall'

Body parameter(in JSON)
1. None

# To update info of a particular userName

Method: PUT

Endpoint: '/api/user/update/{userName}'

Body parameter(in JSON)
1. name
2. email
3. userName
4. phone
5. city

# To remove info of a particular userName

Method: DELETE

Endpoint: '/api/user/remove/{userName}'

Body parameter(in JSON)
1. None

# To remove all entries

Method: DELETE

Endpoint: '/api/user/removeall'

Body parameter(in JSON)
1. None
