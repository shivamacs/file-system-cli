module.exports.treefy = function () {
    let src = arguments[0];
    let dest = arguments[1];

    let fs = require('fs');
    let path = require('path');
        
    let srcExists = fs.existsSync(src);
    let destExists = fs.existsSync(dest);

    if (srcExists == false || destExists == false) {
        console.log("Invalid source or destination");
        return;
    }

    else {
        // reads json file from the source - metadata.json and get the json object
        let root = JSON.parse(fs.readFileSync(path.join(src, 'metadata.json')));

        // treefy using the object
        treefyDir(src, dest, root);
    }

    /* Treefy. Performs treefy functionality. Steps:
       1. Check whether a node is a file or directory
       2. Create directories in directories according to json file
       3. Copy old files to new files in the respective directory with name mappings
    */
    function treefyDir(src, dest, node) {
        // if node is a file, get old file and copy them into new file in the directory
        if (node.isFile == true) {
            // acquire path of old file
            let oldFile = path.join(src, node.newName);
            // acquire path for new file
            let newFile = path.join(dest, node.oldName);

            // copy old file data in new file
            fs.copyFileSync(oldFile, newFile);
        }

        // if node is a directory
        else {
            // get name of the directory
            let dirname = path.join(dest, node.name);
            // create the directory in destination
            fs.mkdirSync(dirname);

            // perform the above operations recursively on their children
            for (let i = 0; i < node.children.length; i++) {
                treefyDir(src, dirname, node.children[i]);
            }
        }
    }
}