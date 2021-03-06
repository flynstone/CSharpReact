# Asp.Net Core Web Api => using .net core 5 and React


<br/>

## Why Asp.Net Core instead of Node/Express?

<br/>

- You can read a great article comparing both frameworks => https://inveritasoft.com/blog/net-core-vs-nodejs-what-to-choose

- An important factor mentioned on inveritasoft's website is ``` Stability Reliability and Security ```

```
Asp.Net Core is definetely a winner in this category.
C# language provides a reliability and security to the platform which makes it a great option ti create a robust software.
```

<br/>
<hr>
<br/>

## Screenshots

<br/>

```
Database Diagram
```


<details>
  <summary>Open Screenshot</summary>
  
  !['screenshot description'](./screenshots/Diagram.png)
</details>

<br/>

```
Articles List
```


<details>
  <summary>Open Screenshot</summary>
  
  !['screenshot description'](./screenshots/List.png)
</details>

<br/>

```
Article Details
```

<details>
  <summary>Open Screenshot</summary>
  
  !['screenshot description'](./screenshots/Details.png)
</details>

<br/>

```
Articles Edit Form
```

<details>
  <summary>Open Screenshot</summary>
  
  ![screendshot description'](./screenshots/2022-03-30.png)
</details>

<br/>

```
Articles Form Validations
```

<details>
  <summary>Open Screenshot</summary>
  
  ![screendshot description'](./screenshots/2022-03-30(3).png)
</details>

<br/>

```
Profile
```

<details>
  <summary>Open Screenshot</summary>
  
  ![screendshot description'](./screenshots/Profile.png)
</details>

<br/>

```
Pictures
```

<details>
  <summary>Open Screenshot</summary>
  
  ![screendshot description'](./screenshots/Photo.png)
</details>

<br/>

```
Following
```

<details>
  <summary>Open Screenshot</summary>
  
  ![screendshot description'](./screenshots/Followings.png)
</details>

<br/><br/>
<hr>
<br/><br/>


## SignalR

```
What is SignalR?
```

- Adds real-time web functionality to apps
- Connected clients receive content instantly

Is ideal for:

```
Chat apps
Dashboard
Monitoring
```

Transports:

```
WebSockets
Server-sent events
Long polling
```

<br/><br/>
<hr>
<br/><br/>

## Why axios?

- It offers the kind of features that we would get if we were using a full framework like Angular (which comes with a powerful http client). 

- React is a library and does not come with a facility and to get that kind of functionality we need to add a package.

<br/><br/>

## What is Mobx?
<br/>

```
Is a package to use Observables instead of Promises 
```

<b>Observables</b> => are concerned with the state of things over time, you can observe and as state changes over time you can react to that state change.


<b>Promises</b> => is a 1 time thing, you ask for something and than it gives it back.

<b>Actions</b> => change the state of obsevables

<b>Computed Properties</b> => If there is already some state inside an observable and we want to derive from the state from what we already have is when we can use computed properties.

<b>Reactions</b> => Any of our observable states, we can react to it changing in some way and use a side effect which will do something in the application. It wait until the observable has changed from its initial state and then you'll react to that change.

<b>AutoRun</b> => Is similar to Reactions, but it will always run even when the store is initialized before the observable you're reacting to has actually changed.

<br />

### Why not use a more popular package => redux?
<br/>

```
Because MobX uses Typescript and is fast and easy to work with.
```

<br/><br/>
<hr>
<br/><br/>

## Router

Single page applications need routers because they only have 1 page (index.html).

- Although small apps could just use conditionals

For this app I'll be using react router which I believe is the most popular choice.

### How does it work?

- It's API is simple. It starts with ```<BrowserRouter>``` and we surround our app with it.

- Inside our App we use ```<Route>``` components which gets replaced with the components that we want to load when that particular route is navigated.

- There is also 3 types of link we can use

  1. ```<Link>``` 
  2. ```<NavLink>```
  3. ```<Redirect>``` 

<br/>

## Router hooks

There are 4 types of router hooks.

1. <b>useHistory</b> => React router uses a history object to keep track of the users (or browser's) current location. The history object that we use provide certain functionality and has methods that allow us to push the new route into the history and that re-render's and loads up the component that we've gone to.

2. <b>useLocation</b> => It allows us to get the location where we're currently at and any attributes about the location.

3. <b>useParams</b> => It allow us to use paramaters if there are route parameters. 

4. <b>useRouteMatch</b> => It does the same thing as the routes components and how it matches url to a particular route.

<br/><br/>
<hr>
<br/><br/>

## Error Handling

- Validation => There are various levels of validations possible. 

```
Ex. 
At the database level or entity level or also
at the business logic level "data transfer objects" => interactions between client and server 
```

- Http Error Responses => The api send http requests and receives http responses

```diff
+ 200 - OK
- 400 - Bad Reqest
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 500 - Server Error
```

- Exception Handling (Custom middleware)

- On the front-end using Axios interceptors


## Entity Framework Error Handling

```
Will use fluent validation. This is done to validate in the application layer "Repositories" instead of inside the domain layer "Entities".
```

<br/><br/>
<hr>
<br/><br/>


## CQRS + Mediator Pattern

- Clean Architecture pattern
- CQRS => Command Query Responsibility Segregation => seperate our commands and our queries, we have 1 type of thing that:
```
Commands => That does something with the database data in some way (modifies state) and should not return a value
```
and then we have the 
```
Queries => Which reads data from the database (does not modify state) and should return a value
```

- Mediator is used to mediate between different layers in the Clean Architecture pattern

<br/>
<hr>
<br/>

## Forms with Formik

- Most popular form library for React, it is written in typescript.
- Validation with Formik/Yup
- Creating reausable form inputs


<br/>

# Identity

- JWT Token Authentication => typacally used with web api 
- Login / Register
- Authenticate requests

<br/>

## AspNet Core Identity

- Membership system
- Supports login stored in Identity
- Supports external providers
- Comes with default user stores
- UserManager
- SignInManager

<br/>

### Password Hashing + Salting 

```css
This is done automatically with AspNet Core Identity
```

- Password Hashing => Is a one way operation you can only hash something, you cannot "dehash".
- Password Salting => It adds a randomized element to the hash and each time we salt a hashed password, then it becomes more and more difficult to get de unhashed version of that password.

<br/>

```css
Screenshot below demonstrates password using hash + salt (Both are identical passwords)
```

<details>
  <summary>Open screenshot</summary>
  
  ![screendshot description'](./screenshots/2022-03-31.png)
</details>

<br/>

## Authorization

- Using Authorization Headers => Bearer Token


## JSON Web Tokens => JWT

- Documentation at => https://jwt.io/

- The server will store the JWT on the client if authentication is passed (using browsers local storage)
- Refresh token implemented on client and server.

<br/>

```css
Screenshot below of Bearer Token
```

<details>
  <summary>Open screenshot</summary>
  
  ![screendshot description'](./screenshots/2022-03-31(1).png)
</details>

<br/>

## Client Side Login and Registration

- Axios interceptors
- MobX reactions
- Form submission errors
- Modal

## Photo Storage Options

<br/>

```
Database
```

- Inefficient
- Stores files as BLOBs
- Disk space is an issue
- Authentication is easy

<br/>

```
File System
```

- Good for storing files
- Disk space is an issue
- File permissions

<br/>

```
Cloud Service
```

- Highly Scalable
- Could be more expensive
- Secured with API Key


