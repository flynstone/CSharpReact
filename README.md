# Asp.Net Core Web Api => using .net core 5 and React

Project still under developement

## Screenshots showing front-end connection to back-end

!["screenshot description"](./screenshots/2022-03-18.png)

!["screenshot description"](./screenshots/2022-03-18%20(1).png)


## More Styling added and added "Create" and "Update" functions

!['screenshot description'](./screenshots/2022-03-20.png)

## Finished axios calls and changed page layout

![screendshot description'](./screenshots/2022-03-22.png)

## Why axios?

- It offers the kind of features that we would get if we were using a full framework like Angular (which comes with a powerful http client). 
- React is a library and does not come with a facility and to get that kind of functionality we need to add a package.

## What is Mobx?

- Is a package to use Observables instead of Promises 

<b>Observables</b> => are concerned with the state of things over time, you can observe and as state changes over time you can react to that state change.

<b>Promises</b> => is a 1 time thing, you ask for something and than it gives it back.

<b>Actions</b> => change the state of obsevables

<b>Computed Properties</b> => If there is already some state inside an observable and we want to derive from the state from what we already have is when we can use computed properties.

<b>Reactions</b> => Any of our observable states, we can react to it changing in some way and use a side effect which will do something in the application. It wait until the observable has changed from its initial state and then you'll react to that change.

<b>AutoRun</b> => Is similar to Reactions, but it will always run even when the store is initialized before the observable you're reacting to has actually changed.

