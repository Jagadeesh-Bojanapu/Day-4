var monthlyActivities = [
    {
        id: 1,
        activity: "Doing maths home work",
        subject: "maths"
    },
    {
        id: 2,
        activity: "Currently i am reading english",
        subject: "English"
    },
    {
        id: 3,
        activity: "Going back to sciene",
        subject: "Science"
    }
];

var monthlychart = document.getElementById('mca');
var monthlychartactivities = document.getElementById('monthlychartactivities');

function month() {
    monthlychartactivities.innerHTML = "";

    monthlyActivities.forEach(function (activity) {
        var listItem = document.createElement("li");
        listItem.textContent = "ID: " + activity.id + ", Activity: " + activity.activity + ", Subject: " + activity.subject;
        monthlychartactivities.appendChild(listItem);
    });
}

monthlychart.addEventListener("click", month);

var subjectDropdown = document.getElementById('subjects');
function displayMonthlyActivities(subject) {
    monthlychartactivities.innerHTML = "";

    monthlyActivities.forEach(function(activity) {
        if (activity.subject === subject) {
            var listItem = document.createElement("li");
            listItem.textContent = "ID: " + activity.id + ", Activity: " + activity.activity + ", Subject: " + activity.subject;
            monthlychartactivities.appendChild(listItem);
        }
    });
}

monthlychart.addEventListener("select", function() {
    var selectedSubject = subjectDropdown.value;
    displayMonthlyActivities(selectedSubject);
});