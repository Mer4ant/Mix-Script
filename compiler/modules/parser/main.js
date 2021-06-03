function parser(lexems, dictionary) {
	// let start = `#include <stdio.h>\n\nint main (){\n`;
	// let current = null;
	// let end = `return 0;\n}`

	if(lexems && lexems.length !== 0) {
		for(let i = 0; i < lexems.length; i ++) {
			let functionName = lexems[i]["function"];
			let typeObj = lexems[i]["type"];
			let valueObj = lexems[i]["value"];
			if(lexems[i]["function"] && dictionary["function"][functionName.toLowerCase()]) {

				let currentFunction = (dictionary["function"][functionName.toLowerCase()]);
				current = currentFunction(typeObj,valueObj)
			}else {
				console.error(`Functon ${functionName} isn't registered!`)
			}
		}

	}else {
		console.error("Array of lexems is empty!");
	}
};

module.exports.PARSER = parser;