# xpress_merchant_authenticator

This is a JavaScript library for implementing Xpress Authenticator

## Demo

![Demo](xpress-authenticator.png?raw=true "Demo Image")

## Get Started

This Javascript library provides a wrapper to add Xpress Authenticator to your React, Vue, Angular and any other Javascript Framework application



### Install

```sh
npm install i xpress_merchant_authenticator
```

or with `yarn`

```sh
yarn add xpress_merchant_authenticator
```

### Usage

This library can be implemented into any Javascript framework applications

```javascript

import MerchantPortalAuthenticator from 'xpress_merchant_authenticator'
 
   const loginUser = () => {
     MerchantPortalAuthenticator.login({
       appKey: "test123",
       onError: error => console.log(error.message),
       onSuccess: response => console.log(response.token)
     })
   }

   const getToken = () => {
     MerchantPortalAuthenticator.getToken({
       appKey: "test123",
       onError: error => console.log(error.message),
       onSuccess: token => {
        console.log(token);
      }
     })
   }

    const getMerchantPortalToken = () => {
     MerchantPortalAuthenticator.getToken({
       appKey: "test123",
       onError: error => console.log(error.message),
       onSuccess: token => {
        console.log(token);
      }
     })
   }

   const cancelLoginModal = () => {
     MerchantPortalAuthenticator.closeIframe({
       appKey: "test123",
       onError: error => console.log(error.message)
     })
    }

    <button onclick={loginUser}>Login</button>

    <button onclick={getToken}>Get Token</button>

    <button onclick={cancelLoginModal}>Cancel</button>
```

### appKey
Contact the admin for your appKey

### onSuccess function Response data.

After login function is called. Call OnSuccess to know if the login is successful. The below login data table shows what to expects from onSuccess returned data
|Param       | Type                 | Description                      
| :------------ | :------------------- | :-------------------------------------------------
| token      | `string`              | this token will be used to validate user on your app

### onError function Response data.

After login function is called. Call onError to know if the login is failed. The below login data table shows what to expects from onSuccess returned data
|Param       | Type                 | Description                      
| :------------ | :------------------- | :-------------------------------------------------
| message      | `string`              | this values indicates the error message returned from the login


## How can I thank you?

Why not star the github repo? I'd love the attention! Why not share the link for this repository on Twitter or Any Social Media? Spread the word!

Thanks!
Matthew Oluwajuwon

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details