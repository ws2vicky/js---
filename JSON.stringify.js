// let defaultData = [
// 	{
// 		name: "活动名称一",
// 		description: "这个活动真好玩",
// 		type: "string",
// 		required: "false",
// 		isShown: "false",
// 	},
// 	{
// 		name: "活动名称二",
// 		description: "这个活动真好玩",
// 		type: "number",
// 		required: "false",
// 		isShown: "true",
// 		children: [
// 			{
// 				name: "活动名称123",
// 				description: "这个活动真好玩",
// 				type: "integer",
// 				required: "false",
// 				isShown: "false",
// 				children: [
// 					{
// 						name: "活动名称456",
// 						description: "这个活动真好玩",
// 						type: "boolean",
// 						required: "false",
// 						isShown: "false",
// 						children: [
// 							{
// 								name: "活动名称789",
// 								description: "这个活动真好玩",
// 								type: "object",
// 								required: "false",
// 							},
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// ];

// const a = JSON.stringify(
// 	defaultData,
// 	(key, value) =>
// 		(value =
// 			value.children != null
// 				? ((value.evil = value.children), delete value.children, value)
// 				: value)
// );

// console.log(JSON.parse(a));

const obj = {
	name: "why",
	age: 18,
	friends: {
		name: "kobe",
	},
	hobbies: ["篮球", "足球"],
	// toJSON: function() {
	//   return "123456"
	// }
};

source = JSON.stringify(obj);
var b = source.replace(new RegExp("name", "g"), "id");
console.log(b);
