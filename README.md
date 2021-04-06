# PolicyApp

- Worker threads are being user based to cpu logical cors for optmized performance
- Node server is being re-started on 70% cpu utilization
- Error are logged to file and mongodb using winston and winston-mongodb

## APIs

1. POST: /api/upload

```js
this api takes a csv file (policy file) with key 'policyFile' and value 'datasheet.csv'
eg: http://localhost:6000/api/upload
```

2. GET /api/policy/{userName}

```js
this api takes a username (first_name) and return policy for that user
eg: http://localhost:6000/api/policy/Lura Lucca
```

3. GET /api/policy

```js
this api and return policy info for all users
eg: http://localhost:6000/api/policy
```

4. POST /api/timer

```js
this api expects request body with message and timeStamp and saves message to 'Message' collection on given timeStamp
{
  "message": "save me to database at",
  "timeStamp": "2021-04-06T16:20:30"
}
eg: http://localhost:6000/api/timer
```
