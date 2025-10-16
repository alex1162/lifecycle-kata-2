# **Customer management with react and hooks**

The idea of our company is to create a large application to manage customers. Therefore, Customer management, from the first session, has been redeveloped using React due to its scalability.

Use correct node version: **nvm use**

Install dependencies: **npm install**

Run app: **npm run dev**

**Tips:** commented code is the skeleton to complete the exercises.

**Info:** it's not a problem that customers are lost when website is reloaded because in a future an API will be used to get them.

![Demo](https://github.com/ReactMrk/lifecycle-kata/blob/main/src/assets/hooks-kata-solution-kata.gif?raw=true)

**Exercise 1.**

https://react.dev/reference/react/useEffect

After some time on production, a new requirement has been requested. When agent adds a new customer and the list of customers is large, there is no feedback, so agents are not sure if the customer has been added correclty until they scroll down the entire list.

To do this improvement, principal engineer suggested you to create a component using useEffect that displays an alert on the top of the list when a new customer is added. The alert should be displayed for 2 seconds.
Check https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout for additional info

**Use src/Alert.jsx file**

**Exercise 2.**

The stakeholders have pointed out that they would like to implement a login/logout functionality. As an initial step we will introduce the behaviour with a button only.
Your new requirements are:

- A new set of Login Logout buttons have been added to the page.
- The first time the list is loaded an Alert should be displayed with the following text: "Welcome to the Customer List". The alert should be displayed for 3 seconds.
- When the customers are added it should still behave as per exercise 1
- When the logout button is pressed an Alert with the following text should be displayed: "Goodbye". The alert should be displayed for 3 seconds.
- Implement the functionality using useEffect.
- You can only modify the CustomerList.jsx

