const getUsersBlogs = async (users) => {
	const fetchUsers = users.map((el) =>
		fetch(`https://api.github.com/users/${el}`)
			.then((res) => res.json())
			.then((res) => res.blog),
	);
	const response = await Promise.all(fetchUsers);

	return response;
};

// examples
getUsersBlogs(['google', 'facebook', 'reactjs']).then((linksList) =>
	console.log(linksList),
); // ==> ["https://opensource.google/", "https://opensource.fb.com", "https://reactjs.org"]
getUsersBlogs(['microsoft']).then((linksList) => console.log(linksList)); // ==> ["https://opensource.microsoft.com"]
