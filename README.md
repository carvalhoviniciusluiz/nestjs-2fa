# Nestjs-2FA &middot; [![mit license](https://img.shields.io/badge/license-MIT-50CB22.svg)](https://opensource.org/licenses/MIT)

## Simple example of 2fa support in nestjs;

Based on [nestjs authentication documentation](https://docs.nestjs.com/security/authentication)

This project is compatible with [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=pt_BR&gl=US), and includes additional methods to allow you to work with [insomnia API](./.insomnia/Insomnia_2022-12-14.json).

:warning: __NOTE__: To test use [chrome plugin](https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=pt)

## Install
to lib install
```bash
yarn
```
to run service
```bash
yarn start:dev
```

## API:

### **Login**

returns credentials

- `#POST /authentication/login`

:payload:

```json
{
	"email": "john@test.com",
	"password": "changeme"
}
```

### **2fa/generate**

returns a base64 qrcode image to register in Google Authenticator

- `#POST /authentication/2fa/generate`

### **2fa/authenticate**

authenticate user from token

- `#POST /authentication/2fa/authenticate`

:payload:

```json
{
	"email": "john@test.com",
	"twoFactorAuthenticationCode": "188388"
}
```

### **2fa/token**

create new token

- `#POST /authentication/2fa/token`

:payload:

```json
{
	"email": "john@test.com"
}
```

### **2fa/turn-on**

- `#POST /authentication/2fa/turn-on`

:payload:

```json
{
	"email": "john@test.com",
	"twoFactorAuthenticationCode": "903927"
}
```

### **protected/endpoint**

- `#GET /protected/endpoint`
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2022-present
