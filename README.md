# Maan Sidiki

## 1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

I spent around a working day and a half.
I would have added infinite scrolling, subtle animations, more modular CSS code with variables, the ability to sort results with different criteria, error handling, React useMemo (for the filter function), and would have created a better user interface.

## 2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

A very recent and useful feature in JavaScript is Optional Chaining with ‘?.’

For example:

```js
value?.prop;
```

works as value.prop, if value exists. When value is undefined/null, it returns undefined.

To access user.address.street using ?.:

```js
let user = {}; // user has no address
alert(user?.address?.street); // undefined (no error)
```

This operator is useful in React to reduce verbose code of if conditions or ternary operators. Code examples can be found in this react app in the Restaurants component.

## 3. How would you track down a performance issue in production? Have you ever had to do this?

I would use React Profiler in production (see https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977).
I have not tracked performance issues in production particularily, however.

## 4. How would you improve the API that you just used?

The categories property is an array of different unrelated pieces of information, i.e. nationality, type of business, types of food served. I would categorize each in a different property on its own to prove more meaningful information to the user.

## 5. Please describe yourself using JSON.

```json
{
  "firstName": "Maan",
  "lastName": "Sidiki",
  "location": "Toronto",
  "experience": "3 years",
  "website": "https://sidiki.dev",
  "projects": [
    {
      "name": "Avid Math",
      "URL": "https://avidmath.com"
    },
    {
      "name": "Auxilium",
      "URL": "https://auxilium.sidiki.dev/"
    }
  ],
  "mostUsedTechnologies": [
    "JavaScript (ES6+)",
    "React.js",
    "Redux",
    "Node.js",
    "PostgreSQL",
    "REST API",
    "MongoDB",
    "MySQL",
    "Sequelize",
    "Git",
    "Styled Components",
    "Express.js",
    "HTML",
    "CSS (& SASS)",
    "Heroku CLI",
    "Material-UI",
    "Bootstrap (& React Bootstrap)"
  ],
  "passions": ["Web Development", "Technology", "Physics"],
  "hobbies": ["Road cycling", "Reading", "Meditation"]
}
```
