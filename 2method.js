const student = {
    id : 101,
    name: 'RJ kibria',
    money: 5000,
    major: 'mathematics',
    subjects : ['english', 'bangla'],
    bestFriend : {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function(){
        console.log(this.name, "taking exam");
    },
    treatdDey: function(expense){
        this.money -= expense;
        return this.money;
    }
}

function printer(){
    console.log("Hello ",this.name);
}

student.printName = printer;
student.printName();