<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">A new way for processes managing</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>

# Check-online-service executor for [Runnerty]:

### Installation:
Through NPM

```bash
npm i @runnerty/executor-check-online-service
```

You can also add modules to your project with [runnerty-cli]

```bash
npx runnerty-cli add @runnerty/executor-check-online-service
```

This command installs the module in your project, adds example configuration in your `config.json` and creates an example plan of use.

If you have installed [runnerty-cli] globally you can include the module with this command:

```bash
rty add @runnerty/executor-check-online-service
```

### Configuration sample:
Add in [config.json]:
```json
{
  "id": "check_online_service_default",
  "type": "@runnerty-executor-check-online-service"
}
```

### Plan sample:
Add in [plan.json]:
```json
{
  "id":"check_online_service_default",
  "hostname": "http://www.google.com/en",
  "check_contains": "I'm Feeling Lucky"
}
```

### Plan advanced:
Add in [plan.json]:
```json
{
  "id":"check_online_service_default",
  "hostname": "http://www.google.com/en",
  "check_contains": "I'm Feeling Lucky",
  "method": "GET",
  "auth":{
    "user": "user",
    "pass": "password",
  }
}
```
```json
{
  "id":"check_online_service_default",
  "hostname": "http://www.myservice.com/api/health",
  "headers": { "User-Agent": "runnerty", "Content-Type": "application/json" }
}
```

[Runnerty]: http://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/executor-check-online-service.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/executor-check-online-service
[npm-image]: https://img.shields.io/npm/v/@runnerty/executor-check-online-service.svg
[david-badge]: https://david-dm.org/runnerty/executor-check-online-service.svg
[david-badge-url]: https://david-dm.org/runnerty/executor-check-online-service
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/
