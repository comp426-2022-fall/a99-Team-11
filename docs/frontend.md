# Frontend Docs

## React specs - Charles

Build out frontend using React and Material UI. Created a state for the existing list, which will use a hook to update the state from the database in real time. Added basic UI components for viewing the list, an appbar with title and login buttons.

## Structure

Made a React component for the grocery list that is used in the parent App component for React. Since this app was pretty small, I put all the onChange/onClick functions and components within the `ListCard.js` file. If I had more time or this was a bigger project, it would have been best practice to compartamentalize everything into separate components.

## Add/Remove items

I created a state (from React hooks) called `groceries` for the list of groceries to display, with this state being updated constantly with the `useEffect` hook to ensure every change was reflected live. To add a grocery to the list, I called the `addGrocery` function, which used the axios library to submit a post request to our endpionts on the backend. The response was a json that contained the updated grocery list, so I just had to call `setGroceries(resp.data.groceries)` to update the list. The same logic applies for removing groceries.

## Multi-delete and mapping

For displaying the list itself, I used the `map` function in JS to map each grocery in the list to a value and index. Using the indices as buttons, I managed to allow the user to select multiple instances of items and delete them all at once with the delete button.

## Future plans

If we had more time to flesh out the product, we would add a login page and the capability to make each list unique to the user. We could also make multiple pages for the available groceries at certain stores and allow the user to see what they could/couldn't add.
