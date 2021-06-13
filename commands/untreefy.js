module.exports.untreefy = function () {
    let src = arguments[0];
    let dest = arguments[1];

    let fs = require('fs');
    let path = require('path');

    // for renaming functionality. Needs to be installed externally - npm install uniqid
    let uniqid = require('uniqid');

    // to store representation of directory structure of the source
    let node = {};
        
    let srcExists = fs.existsSync(src);
    let destExists = fs.existsSync(dest);

    // If source or destination is invalid
    if (srcExists == false || destExists == false) {
        console.log("Invalid source or destination");
        return;
    }

    // If source and destination are valid
    else {
        untreefyDir(src, dest, node);

        // Strings in js can also be made with `(tilde or backtick) which is advantageous
        // over normal string declaration methods i.e. '', ""
        console.log(`All files are copied to ${dest}`);

        // stores the directory structure's json object in a file in the destination
        fs.writeFileSync(path.join(dest, 'metadata.json'), JSON.stringify(node));
    }

    /* Untreefy. Steps:
       1. Differentiate between directory and file
       2. Copy files from source directory to destination after renaming
       3. Store respresentation of current directory structure into .json file
    */
    function untreefyDir(src, dest, node) {
        let ans = fs.lstatSync(src).isDirectory();

        // current src is a file
        if (ans == false)  {
            // JSON properties for a file
            node.isFile = true;
            node.oldName = path.basename(src);
            
            // new name for the current file
            let newName = uniqid();
            node.newName = newName;

            // create a copy of current file in the destination with renaming
            fs.copyFileSync(src, path.join(dest, newName));
        } 
        
        // current source is a directory
        else {
            // JSON properties for a directory
            node.isFile = false;
            node.name = path.basename(src);
            node.children = [];

            // extracts content of a directory in an array
            let content = fs.readdirSync(src);
            for (let i = 0; i < content.length; i++) {
                let chObj = {};

                // recursively checking all the directories
                untreefyDir(path.join(src, content[i]), dest, chObj);

                // push the object of the current child into the children array of the parent
                node.children.push(chObj);
            }
        }
    }
}
