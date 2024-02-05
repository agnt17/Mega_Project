This is a mega project.

Middlewares: Middleware is a software layer that provides common services and features to applications. In the context of web development, middleware functions are often used in frameworks to process and manipulate HTTP requests and responses. Means suppose we send a request to instagram server and then server before listening(means giving data) will check if the request author logged in or not and due to this if puts a check b/w frontend and backend and this checks the condition and then only pass the data.

we can apply as many middlewares but while applying them we should take care that we apply them in particular order because these execute in paticular order only.

// utils file contains the utility code means the code that is reused very frequently is put into utils folder and it may be related to any other folder of the project.

//postman:
Postman is a popular collaboration platform for API development that simplifies the process of designing, testing, and documenting APIs. It offers a comprehensive set of tools to help developers work with APIs more efficiently.

******\*\*\*\*******\*\*\*******\*\*\*\*******What is JWT --> jsonwebtokens******\*\*******\*******\*\*******

JSON Web Tokens (JWT) are a compact, URL-safe means of representing claims between two parties. These claims can be digitally signed to ensure their integrity and authenticity. JWTs are commonly used for authentication and authorization purposes in web development. 

 Think of JSON Web Tokens (JWT) as digital passports for the internet. These passports contain information about you (claims) and are like tiny secret notes that websites use to recognize and remember you.

Here's what's inside a JWT passport:

Header (JWT Type):

This is like a stamp on your passport telling how it's written and secured.
Payload (Claims):

This part has the actual information about you, like your name, what you're allowed to do, or anything else the website needs to know.
Signature (Security Stamp):

To make sure nobody messes with your passport, there's a secret stamp created using your info and a secret key. This stamp ensures the website can trust that the info is genuine.
So, when you log into a website, it gives you this digital passport (JWT). Then, when you visit other pages on the site, you just show this passport, and the website knows who you are and what you're allowed to do.

It's like having a cool secret handshake that lets you access different areas without revealing all your personal details every time. Just remember, passports (JWTs) need to be handled carefully to keep everything secure!


\***\*\*\*\*\*\*\***\*\*\***\*\*\*\*\*\*\***Access and Refresh Tokens**\*\***\*\***\*\***\*\***\*\***\*\***\*\***

Access tokens and refresh tokens are components of the OAuth 2.0 authentication and authorization framework, commonly used for securing API access. They play distinct roles in the authentication process:

Access Token:

Purpose: The primary purpose of an access token is to grant access to a protected resource (such as an API) on behalf of a user.

Lifetime: Access tokens have a limited validity period, typically ranging from minutes to hours. Once an access token expires, the client must obtain a new one to continue accessing the resource.
Usage: Clients include the access token in the Authorization header of API requests to authenticate and authorize their access.
Refresh Token:

Purpose: Refresh tokens are used to obtain a new access token without requiring the user to re-authenticate. They provide a way to refresh or renew the access token.

Lifetime: Refresh tokens have a longer lifetime compared to access tokens. They are usually valid for days or even weeks.
Usage: When an access token expires, the client can use the refresh token to obtain a new access token without requiring the user to log in again. This is done through a token refresh request to the authorization server.

//To understand it more easily:
Access Token:

Job: Like a VIP pass to enter a party (API).
How Long It Works: Only for a short time, like a party pass that's valid for a few hours.
What It Does: It allows your computer or app to access certain things (like data or services) on the internet.

Refresh Token:

Job: Like a magical pass that can get you a new VIP pass.
How Long It Works: It lasts longer, more like a season pass that's good for many days.
What It Does: When your VIP pass (Access Token) expires, this magical pass (Refresh Token) helps you get a new VIP pass without making you go through the whole entry process again.
