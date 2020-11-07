/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const propName = process.argv.indexOf('--new');
//const styleFlag = process.argv.indexOf('--style');
const typeFlag = process.argv.indexOf('--type');

const touchFile = fileName => {
    const time = new Date();
    try {
        fs.utimesSync(fileName, time, time);
    } catch (err) {
        fs.closeSync(fs.openSync(fileName, 'w'));
    }
};

const directoryPath = componentName => {
    let pathReturn = `./client/src/components/${componentName}`;
    if (typeFlag > -1 && process.argv[typeFlag + 1]) {
        switch (process.argv[typeFlag + 1].toLowerCase()) {
            // case 'cms':
            //     pathReturn = `./components/cms/${componentName}`;
            //     break;
            // case 'global':
            //     pathReturn = `./components/global/${componentName}`;
            //     break;
            default:
                pathReturn = `./client/src/components/${componentName}`;
                break;
        }
    }

    return pathReturn;
};

if (propName > -1 && process.argv[propName + 1]) {
    const componentName = process.argv[propName + 1];
    const directory = directoryPath(componentName);
    // const componentStyleName = componentName.match(/[A-Z][a-z]+|[0-9]+/g)
    //     ? componentName.match(/[A-Z][a-z]+|[0-9]+/g).join('-')
    //     : componentName;

    if (!fs.existsSync(directory)) {
        fs.mkdir(directory, { recursive: true }, err => {
            if (err) {
                throw err;
            }
        });
        touchFile(`${directory}/${componentName}.tsx`);
        touchFile(`./client/test/components/${componentName}.test.tsx`);
        touchFile(`${directory}/${componentName.toLowerCase()}.scss`);
        touchFile(`./client/stories/components/${componentName}.stories.tsx`);
        console.log(`Component ${componentName} created!`);
    } else {
        console.error('Component directory already exists. Try again with new name or resolve directory.');
    }
} else {
    console.error('No component name provided. Format: npm run component -- --new {ComponentName}');
}
