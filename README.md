#Templates project

##Description

>Repository for storing different templates

##Instruction
**How to clone a single file from a project**

(https://askubuntu.com/a/729798/1588016 "Link to article")

+ git clone --depth 1 [repo root] [name of destination directory]
+ cd [name of destination directory]
+ git filter-branch --prune-empty --subdirectory-filter [path to sub-dir] HEAD
+ delete .git folder
+ change package.json file
  - name
  - version

