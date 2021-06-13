module.exports.help = function () {
    console.log("\n usage: node tpp view (-t | -l)")
    console.log("        node tpp treefy <source> <destination>");
    console.log("        node tpp untreefy <source> <destination>");
    console.log("        node tpp help")

    console.log("\noperations supported:: \n")
    
    console.log("view: to view directory structure of the files/folders")
    console.log("   source : file/directory to be viewed")
    console.log("   -t : tree view")
    console.log("   -l : list view \n")

    console.log("untreefy: to remove the directory structure of a source and add the files to the destination")
    console.log("   source : file/directory to be untreefied")
    console.log("   destination : directory where untreefied data should be stored \n")

    console.log("treefy: to add directory structure to a source and store it in the destination")
    console.log("   source : file/directory where untreefied data is stored")
    console.log("   destination : directory where treefied data should be stored \n")

    console.log("help : command line help \n")
}