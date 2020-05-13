# sls-hills

This is a repository being used to exercise basic serverless functions as well as test
dashboard.serverless.com. It is also using the serverless-jest-plugin.

All deployments are triggered by commits to the repository and there is no aws credentials
loaded on the developer machine.

```bash
sls invoke test
```

```bash
sls create function -f myFunction --handler functions/myFunction/index.handler --path {function}
```

```bash
serverless invoke local -f calc
```

## Links

https://github.com/nordcloud/serverless-jest-plugin

https://1y7c2yy6p0.execute-api.us-east-1.amazonaws.com/production/hello

https://1y7c2yy6p0.execute-api.us-east-1.amazonaws.com/production/calc

https://9ti6dgzjb4.execute-api.us-east-1.amazonaws.com/develop/hello
