# Check-online-service executor for [Runnerty]:

### Configuration sample:
```json
{
  "id": "check_online_service_default",
  "type": "runnerty-executor-check-online-service"
}
```

### Plan sample:
```json
{ "id":"check_online_service_default",  
  "hostname": "http://www.google.es",
  "check_contains": "Voy a tener suerte"
}
```

### Plan advanced:
```json
{ "id":"check_online_service_default",  
  "hostname": "http://www.google.es",
  "check_contains": "Voy a tener suerte",
  "method": "GET",
  "auth":{
    "user": "user",
    "pass": "password",
    "sendImmediately": false,
    "bearer": "bearerToken"
  }
}
```

[Runnerty]: http://www.runnerty.io
