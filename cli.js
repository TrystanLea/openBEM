var fs = require("fs");
var vm = require('vm')

vm.runInThisContext(fs.readFileSync("../openBEM/datasets.js"))
vm.runInThisContext(fs.readFileSync("../openBEM/openBEM.js"))

var input = JSON.parse(fs.readFileSync("example.json"))

var output = calc.run(input);

console.log(JSON.stringify(output, null, 2));
