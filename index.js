/* 
The users and todos variables have all the data for you to work with
Check your console to see the result of the following console.logs, 
and inspect the data
*/

console.log("users: ", users);

console.log("todos: ", todos);

/*
Hey everyone! Today we have another head scratcher for you to solve! This will take everything you've learned so far to solve it, plus it will be a great practice for your problem solving skills!
As usual, grab a break before start tacking this, and most importantly, have fun!! :tada:
Today's exercise: Todo Lists
Repo: boolean-uk-js-todo-lists
Description
This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge
Instructions
- Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/todo-lists-tr122?from-embed=&file=/index.js
- Do not code your solution in CodeSandbox
- Create an alert that lists all users, with their ids, names and what city they're from
- Prompt the user for a user id
- Display an alert with the username and all the todos titles that belong to that user 
Tips
- The user id creates an identifiable relationship with the todos
- Sometimes it's good to map some values into a new data structure
Challenge
After you select a user, add the option to either show the todos or add a new todo to the list
Challenge 2
Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program
*/

// Create an alert that lists all users, with their ids, names and what city they're from

for (user of users) {
	console.log(`List of users: ${user.id}
${user.name}
${user.address.city}`),
		alert(`
${user.id}
${user.name}
${user.address.city}
`);
}

// Prompt the user for a user id

const myUserId = Number(prompt("Please give me a user id from 1 to 10"));
// console.log(`Given user id: ${userId}`)

// Display an alert with the username and all the todos titles that belong to that user

const list = [];
let pickedUserName = "";
for (user of users) {
	if (myUserId === user.id) {
		pickedUserName = user.username;
	}
}

for (usertodo of todos) {
	if (myUserId === usertodo.userId)
		list.push(`${usertodo.title}
    `);
}

alert(`Hello ${pickedUserName}! here are all your todos:
    ${list}`);

// Challenge
// After you select a user, add the option to either show the todos or add a new todo to the list
const list = [];
let pickedUserName = "";
for (user of users) {
	if (myUserId === user.id) {
		pickedUserName = user.username;
		let userAnswer = prompt(
			"What would you like to do? S to show your todos or A to add to your todos."
		);
		if (userAnswer === "s") {
			for (usertodo of todos) {
				if (myUserId === usertodo.userId)
					list.push(`${usertodo.title}
    `);
			}
			alert(`Hello ${pickedUserName}! here are all your todos:
    ${list}`);
		}
		userId = myUserId;
		if (userAnswer === "a") {
			let addingTodo = prompt("What would you like to add?");

			todos.push({
				userId: userId,
				id: todos.length + 1,
				title: addingTodo,
				complete: false,
			});
			console.log(todos);
		}
	}
}
