## Development

### First run
Install dependencies by running 
```shell script
npm i
```

### Start development server
```shell script
npm start
```

## Known issues
1. Sometimes `meterValues` message may be sent before `startTransaction.conf` message
is received. It leads to not correct transaction info values (consumption etc).
# ocpp
