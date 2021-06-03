let fs = require("fs");

let parser = require("./modules/parser/main.js").PARSER;
let dictionary = require("./modules/dictionary.js").DICTOINARY;
let lexer = require("./modules/lexer/main.js").LEXER;

fs.readFile("../test/index.mx", "utf-8", function(error ,content) {
	if(error === null) {
		let lexems = lexer(content, dictionary);

		let parsedString = parser(lexems, dictionary);

		// console.log(parsedString)

		console.log(JSON.stringify(lexems, null, 4));
	} else {
		console.error("Error to start code!");
		console.log(error)
	}
});