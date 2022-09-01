const favourites = ['id-2', 'id-17'];

const tree = {
	id: 'id-1',
	name: 'Products',
	nodes: [
		{
			id: 'id-2',
			name: 'Food',
			nodes: [
				{
					id: 'id-17',
					name: 'Food',
					nodes: [],
				},
				{
					id: 'id-4',
					name: 'Food',
					nodes: [
						{
							id: 'id-5',
							name: 'Food',
							nodes: [],
						},
						{
							id: 'id-6',
							name: 'Food',
							nodes: [
								{
									id: 'id-17',
									name: 'Food',
									nodes: [],
								},
							],
						},
					],
				},
			],
		},
	],
};

const markFavourites = (obj, find) => {
	const isFavourite = find.includes(obj.id);

	return {
		...obj,
		isFavourite,
		nodes: obj.nodes.map((childNodes) => markFavourites(childNodes, find)),
	};
};

console.log(markFavourites(tree, favourites));
