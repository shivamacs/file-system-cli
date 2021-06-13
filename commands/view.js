module.exports.view = function () {
    let src = arguments[0];
    let mode = arguments[1];

    let fs = require('fs');
    let path = require('path');

    let exists = fs.existsSync(src);

    // if path is invalid
    if (exists == false) {
        console.log("Invalid file or directory");
        return;
    } 
    
    // if path is valid
    else {
        if (mode == '-l') {
            viewAsList(src);
        }

        else if (mode == '-t') {
            viewAsTree(src);
        }

        else {
            console.log("Wrong Input");
        }
    }

    // list view
    function viewAsList(src) {
        let ans = fs.lstatSync(src).isDirectory();

        if (ans == false) {
            console.log(src + " *");
        } else {
            console.log(src);

            let content = fs.readdirSync(src);
            for (let i = 0; i < content.length; i++) {
                viewAsList(path.join(src, content[i]))
            }
        }
    }

    // tree view
    function viewAsTree(src, indent = "") {
        let ans = fs.lstatSync(src).isDirectory();
        console.log(indent + path.basename(src));

        if (ans == true) {
            let content = fs.readdirSync(src);

            for (let i = 0; i < content.length; i++) {
                viewAsTree(path.join(src, content[i]), indent + "  ");
            }
        }
    }
}