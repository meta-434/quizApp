const STORE = {
    questions: [
        //1
        {
            question: "what command would bring up the documentation for the git command?",
            options: {
                "a": "doc git",
                "b": "git man",
                "c": "man git",
                "d": "info git"
            },
            answer: "c"
        },
        //2
        {
            question: "what is the correct command used to remove a folder and its contents, unprompted?",
            options: {
                "a": "rm <file / folder path>",
                "b": "rm -v <file / folder path>",
                "c": "rm -r -f <file / folder path>",
                "d": "rm -v -I <file / folder path>"
            },
            answer: "c"
        },
        //3
        {
            question: "what is one way you could identify a process id, given only its name?",
            options: {
                "a": "where <name>",
                "b": "locate <name> --process-id",
                "c": "ps -e | grep <name>",
                "d": "grep <name> | ps -e"
            },
            answer: "c"
        },
        //4
        {
            question: "Which command can be used to determine file type by its content?",
            options: {
                "a": "file <name>",
                "b": "ls –l",
                "c": "type <name>",
                "d": "None of the above."
            },
            answer: "a"
        },
        //5
        {
            question: "how would you make a shell script (script.sh) executable by its owner exclusively?",
            options: {
                "a": "chmod a+x script.sh",
                "b": "chmod go+r script.sh",
                "c": "chmod a-rwx script.sh",
                "d": "chmod u+x script.sh"
            },
            answer: "d"
        }
    ],
    currentQuestion: 0,
    score: 0
};