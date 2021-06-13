let {view} = require('./commands/view')
let {treefy} = require('./commands/treefy')
let {untreefy} = require('./commands/untreefy')
let {help} = require('./commands/help')

let cmd = process.argv[2];

switch(cmd) {
    case 'view': 
        // process.argv[3] = src, process.argv[4] = -t
        view(process.argv[3], process.argv[4])
        break;
    
    case 'untreefy':
        untreefy(process.argv[3], process.argv[4])
        break;

    case 'treefy':
        // process.argv[3] = src, process.argv[4] = -t
        treefy(process.argv[3], process.argv[4])
        break;

    case 'help':
        // command - node help
        help()
        break;

    default:
        console.log("Wrong command");
        break;
}