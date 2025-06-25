//...see actions/toolkit repo for more imp packages...

const core = require('@actions/core');
const github = require('@actions/github');


try {

//throw new Error('This is a test error'); 
// recompile index.js using ncc and upload and wrror willl b catched by setFailed
core.debug('Debugging is enabled');
core.warning('This is a warning message');
core.error('This is an error message');  // Fixed: removed .console

const name = core.getInput('who-to-greet');  // Fixed: use hyphens not underscores

console.log(`Hello ${name}!`);

const time = new Date();
core.setOutput("time", time.toTimeString());

core.exportVariable("HELLO_TIME", time) //Available in workflow that uses this action


//For log type groups
core.startGroup("Logging GitHub context");
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}


catch (error) {
  core.setFailed(error.message);
}
