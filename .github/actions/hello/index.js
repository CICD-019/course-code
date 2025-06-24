//...see actions/toolkit repo for more imp packages...

const core = require('@actions/core');
const github = require('@actions/github');


try {

core.debug('Debugging is enabled');
core.warning('This is a warning message');


const name = core.getInput('who_to_greet');

console.log(`Hello ${name}!`);

const time = new Date();
core.setOutput("time", time.toTimeString());

core.exportVariable("HELLO_TIME", time) //Available in workflow that uses this action


//For log groups
core.startGroup("Logging GitHub context");
console.log(JSON.stringify(github.context, null, 2));
core.endGroup();

}


catch (error) {
  core.setFailed(error.message);
}
