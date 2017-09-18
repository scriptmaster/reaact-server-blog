fs = require('fs');
p = require('child_process');
var json = fs.readFileSync('package.json').toString();

json = JSON.parse(json);

console.log(json.dependencies);

for(var package in json.dependencies) {
    var cmd = 'npm link '+package;
    console.log(cmd);
    console.log(p.execSync(cmd).toString());
}

for(var package in json.devDependencies) {
    var cmd = 'npm link '+package;
    console.log(cmd);
    console.log(p.execSync(cmd).toString());
}
