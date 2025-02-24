# EShopUI

  This Angular 9.1.7 project mimics an online marketplace like Flipkart, offering users product browsing and preference-based shopping. 
  An admin interface allows for product management (add/edit). 
  JSON server is employed to simulate database behavior, demonstrating core e-commerce features.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Installing Json-Server

https://www.npmjs.com/package/json-server

## Install JSON Server

        npm install -g json-server

## GO TO : cd src/assets/data

        Start JSON Server
        json-server --watch db.json
        http://localhost:3000/posts/1, you'll get
        { "id": 1, "title": "json-server", "author": "typicode" }

## For below issue :

        opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
        library: 'digital envelope routines',
        reason: 'unsupported',
        code: 'ERR_OSSL_EVP_UNSUPPORTED'![viewALLprods](https://github.com/user-attachments/assets/dc6a57a3-26d0-4c49-889b-f183c30915ad)


## Solution :
        use Below command in CMD and it will fix previous issues.
        set NODE_OPTIONS=--openssl-legacy-provider
        
## Projects screenshots :

  

  ![ProdByCatg2](https://github.com/user-attachments/assets/3f95da94-df2b-4798-a203-765f29a98589)
    
  ![ProdByCatg](https://github.com/user-attachments/assets/53f3f8ce-2011-47a9-9331-368c1e6ba03a)

   ![navbar](https://github.com/user-attachments/assets/c64ba120-535d-4b15-afc0-916f17df6ee7)
   
   ![viewALLprods](https://github.com/user-attachments/assets/dd24eb3a-9c4c-41c2-a21c-9a94c0dc3c0f)


   ![AddProducts](https://github.com/user-attachments/assets/3c3cc8a0-28f5-4cf8-9043-0634813add79)

   ![SideBar](https://github.com/user-attachments/assets/51328721-c7ed-496b-a903-db7ca73b63d2)

