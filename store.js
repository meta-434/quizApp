const STORE = {
    questions: [
        //1
        {
            question: "what command would bring up the documentation for the git command?",
            options: [
                "doc git",
                "git man",
                "man git",
                "info git"
            ],
            answer: "man git"
        },
        //2
        {
            question: "what is the correct command used to remove a folder and its contents, unprompted?",
            options: [
                "rm {file / folder path}",
                "rm -v {file / folder path}",
                "rm -r -f {file / folder path}",
                "rm -v -I {file / folder path}"
            ],
            answer: "rm -r -f {file / folder path}"
        },
        //3
        {
            question: "what is one way you could identify a process id, given only its name?",
            options: [
                "where {name}",
                "locate {name} --process-id",
                "ps -e | grep {name}",
                "grep {name} | ps -e"
            ],
            answer: "ps -e | grep {name}"
        },
        //4
        {
            question: "Which command can be used to determine file type by its content?",
            options: [
                "file {name}",
                "ls –l",
                "type {name}",
                "None of the above."
            ],
            answer: "file {name}"
        },
        //5
        {
            question: "how would you make a shell script (script.sh) executable by its owner exclusively?",
            options: [
                "chmod a+x script.sh",
                "chmod go+r script.sh",
                "chmod a-rwx script.sh",
                "chmod u+x script.sh"
            ],
            answer: "chmod u+x script.sh"
        }
    ],
    currentQuestion: 0,
    score: 0
};