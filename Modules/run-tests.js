const glob = require('glob');

const testFiles = glob.sync('**/*.spec.js');

for (const testFile of testFiles) {
    require('./' + testFile);
}
