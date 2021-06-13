# File System Command-line Interface

A command line utility, supporting 4 operations - **view**, **treefy**, **untreefy** and ofcourse **help**.
<br> Developed using [Node.js](https://nodejs.org/en/).

## Commands
### View
To view directory structure of the files/folders.

#### Usage 
##### Tree view
```
node tpp view <source> -t
```    

##### List view
```
node tpp view <source> -l
```

##### Viewing contents of current directory
```
node tpp view . (-t | -l)
```

#### Example
To view ```d10``` folder in a tree view:
```
file-system-cli % node tpp view d10 -t     
d10
  d20
    d50
    f1.txt
  d30
    d60
    f3.txt
  f1.txt
```
<br>

### Untreefy
To remove the directory structure of a source and add the files to a destination.

#### Usage
```
node tpp untreefy <source> <destination>
```

#### Example
```
file-system-cli % node tpp untreefy d10 untreefiedDest
All files are copied to untreefiedDest
```
<br>

### Treefy
To add directory structure to a source and store it in a destination.

#### Usage
```
node tpp treefy <source> <destination>
```

#### Example
```
file-system-cli % node tpp treefy untreefiedDest treefiedDest
```
<br>

### Help
Command line help.

#### Usage
```
node tpp help
```
<br>

## Setup & Install 
### Clone this repository
```
% git clone https://github.com/shivamacs/file-system-cli.git
% cd file-system-cli
```

### Install Packages
```
file-system-cli % npm install
```

All set to structurize files and directories!
