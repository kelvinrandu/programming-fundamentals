// here is the raw learners list that you are supposed to
// process appropriately
var learnersRaw = [
    ['Anthony N.', 'anthony', ['Java:8', 'JavaScript:7', 'PHP:5']],
    ['Briana S.', 'sbriana', ['Java:3', 'JavaScript:8', 'PHP:7']],
    ['Stella K.', 'stellak', ['JavaScript:7', 'PHP:5', 'C++:4']],
    ['Clement W.', 'clem0', ['JavaScript:8', 'Java:7', 'Go:3']],
    ['Branda C.', 'bc', ['JavaScript:7', 'Java:9', 'Python:7', 'C++:4']],
    ['Felix R.', 'felix', ['Java:3', 'PHP:8', 'Go:5']],
];

// your code starts here, onwards
var Learners = [];
Learners = learnersRaw.map(function(x) {
    return {
        "name": x[0],
        "nickname": x[1],
        "skills": learnersRaw.map(function(x){x[2]
        }
        }

})
function Learner(name, username, skills) {

this.username = username;
this.name = name;
this.skills = [];
this.bestSkill = function () {

}// your code here
 }


function bestSkills(learners) {
    // your code here
}

function highestRated(learners, skillName) {
    // your code here
}

function search(skillName) {
    // your code here
}
