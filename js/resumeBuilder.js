//bio contains a name, role, welcomeMessage, contacts object and skills array.
// The contacts object should contain (but doesn't have to) a mobile number,
// email address, github username, twitter handle and location.
var bio = {
    "name": "George Li",
    "role": "Web Developer",
    "contacts": {
        "mobile": "415-555-1234",
        "email": "georgejdli@gmail.com",
        "github": "georgejdli",
        "location": "San Francisco"
    },
    "picture": "images/fry.jpg",
    "welcomeMessage": "Welcome to my interactive resume!",
    "skills": ["HTML", "CSS", "Javascript", "jQuery"],
    display: function () {
        // #header before <ul>#topContact
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header")
            .prepend(formattedRole)
            .prepend(formattedName);

        // <ul>#topContact & #footerContacts
        for( var contact in this.contacts) {
            if (this.contacts.hasOwnProperty(contact)) {
                var formattedContact = HTMLcontactGeneric.replace("%contact%",
                    contact).replace("%data%", this.contacts[contact]);
                $("#topContacts").append(formattedContact);
                $("#footerContacts").append(formattedContact);
            }
        }

        //#header after <ul>#topContact
        var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header")
            .append(formattedPicture)
            .append(formattedWelcome);

        //#skills after picture and welcomeMessage
        $("#header").append(HTMLskillsStart);
        for( var i = 0; i < bio.skills.length; i++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkills);
        }
    }
};

//work contains an array of jobs. Each job object in jobs should contain an employer,
// title, location, dates worked and description
var work = {
    "jobs": [
        {
            "employer": "Employer",
            "title": "Title",
            "location": "San Francisco, CA",
            "dates": "Date",
            "description": "Sed accumsan varius ligula nec tempus. Aliquam erat volutpat. Ut non nunc elementum, commodo metus nec, dignissim nisl. Nullam ultricies egestas quam vitae lacinia. Morbi hendrerit elementum quam et tempus. Nullam augue felis, sodales vel tincidunt non, imperdiet vel felis. Aliquam erat volutpat. Donec convallis, nunc a mollis imperdiet, turpis dolor lacinia lacus, viverra tempor erat lectus vel enim. Nullam vulputate lobortis felis sit amet tempor. Praesent rhoncus nisi libero, et ornare nisi pharetra vitae."
        },
        {
            "employer": "Employer2",
            "title": "Title2",
            "location": "San Francisco, CA",
            "dates": "Date2",
            "description": "Sed accumsan varius ligula nec tempus. Aliquam erat volutpat. Ut non nunc elementum, commodo metus nec, dignissim nisl. Nullam ultricies egestas quam vitae lacinia. Morbi hendrerit elementum quam et tempus. Nullam augue felis, sodales vel tincidunt non, imperdiet vel felis. Aliquam erat volutpat. Donec convallis, nunc a mollis imperdiet, turpis dolor lacinia lacus, viverra tempor erat lectus vel enim. Nullam vulputate lobortis felis sit amet tempor. Praesent rhoncus nisi libero, et ornare nisi pharetra vitae."
        }
    ],
    display: function () {
        for (var job in work.jobs) {
            if (work.jobs.hasOwnProperty(job)) {
                $("#workExperience").append(HTMLworkStart);
                var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
                var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[job].title);
                var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
                var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
                var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
                $(".work-entry:last")
                    .append(formattedEmployer + formattedPosition)
                    .append(formattedLocation)
                    .append(formattedDates)
                    .append(formattedDescription);
            }
        }
    }
};

//projects contains an array of projects. Each project object in projects should contain a title,
// dates worked, description, and an images array with URL strings for project images.
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "dates": 2014,
            "description": "I made this portfolio based on a design mock-up to showcase my featured work. " +
                "I learned a lot about HTML and CSS in the process.",
            "images": ["images/portfolio.png"],
            "url": "https://github.com/georgejdli/portfolio"
        }
    ],
    display: function () {
        for (var project in this.projects) {
            if (this.projects.hasOwnProperty(project)) {
                $("#projects").append(HTMLprojectStart);
                var formattedTitle = HTMLprojectTitle
                    .replace("%data%", this.projects[project].title)
                    .replace("#", this.projects[project].url);
                var formattedDates = HTMLprojectDates
                    .replace("%data%", this.projects[project].dates);
                var formattedDescription = HTMLprojectDescription
                    .replace("%data%", this.projects[project].description);
                $(".project-entry:last")
                    .append(formattedTitle)
                    .append(formattedDates)
                    .append(formattedDescription)
                for (var image in this.projects[project].images) {
                    if (this.projects[project].images.hasOwnProperty(image)) {
                        var formattedImage = HTMLprojectImage
                            .replace("%data%", this.projects[project].images[image]);
                        $(".project-entry:last").append(formattedImage);
                    }
                }
            }
        }
    }
};

//education contains an array of schools. Each school object in schools contains a letter,
// location, degree, majors array, dates attended and a url for the school's website.
// education also contains an onlineCourses array. Each onlineCourse object in
// onlineCourses should contain a title, school, dates attended and a url for the course.
var education = {
    "schools": [
        {
            "name": "UC Davis",
            "location": "Davis, CA",
            "degree": "BA",
            "majors": "Economics",
            "dates": "2007 - 2011",
            "url": "#"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2014 -Present",
            "url": "https://www.udacity.com/course/nd001"
        },
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud304"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "2014",
            "url": "https://www.udacity.com/course/ud804"
        }
    ],
    display: function () {
        for (var school in this.schools) {
            if (this.schools.hasOwnProperty(school)) {
                $("#education").append(HTMLschoolStart);
                var formattedSchool = HTMLschoolName.replace("%data%", this.schools[school].name).
                            replace("#", this.schools[school].url);
                var formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[school].location);
                var formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[school].degree);
                var formattedMajors = HTMLschoolMajor.replace("%data%", this.schools[school].majors);
                var formattedDates = HTMLschoolDates.replace("%data%", this.schools[school].dates);
                $(".education-entry:last")
                    .append(formattedSchool + formattedDegree)
                    .append(formattedDates)
                    .append(formattedLocation)
                    .append(formattedMajors);
            }
        }
        $("#education").append(HTMLonlineClasses);
        for (var online in this.onlineCourses) {
            if (this.onlineCourses.hasOwnProperty(online)) {
                $("#education").append(HTMLschoolStart);
                var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[online].title).
                        replace("#", this.onlineCourses[online].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[online].school);
                var formattedOnlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[online].dates);
                var formattedOnlineURL = HTMLonlineURL.replace(/%data%|#/g, this.onlineCourses[online].url);
                $(".education-entry:last")
                    .append(formattedOnlineTitle + formattedOnlineSchool)
                    .append(formattedOnlineDates)
                    .append(formattedOnlineURL);
            }
        }
    }
};

//call functions
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);

//using d3.js and SVG to draw a simple bar chart
//get padding-left of h2 to align bar chart with h2
var marginLeft = parseInt(d3.select('#skillsChart h2').style('padding-left'), 10),
    margin = {top: 30, right: 30, bottom: 30, left: marginLeft},
    //get current window width so chart can be drawn to fill the width
    width = parseInt(d3.select('#skillsChart').style('width'), 10),
    width = width - margin.left - margin.right,
    height = 200, //placeholder
    barHeight = 50;

//scales and axes
var x = d3.scale.linear()
    .range([0, width])
    .domain([0, 1]);

var y = d3.scale.ordinal();

//custom tick labels for x-axis
var tickLabels = ["", "Beginner", "Intermediate", "Advanced", "Expert", "Master"];

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(tickLabels.length - 1);

//define chart style and attributes before skills.json is loaded
var chart = d3.select("#skillsChart").append('svg')
    .style("width", (width + margin.left + margin.right) + 'px')
    .attr("class", "chart")
  .append("g")
    .attr("transform", "translate(" + [margin.left , margin.top] + ")");

//when skills.json loads draw the chart
d3.json("skills.json", function(error, data) {
    //set y scale to amount of skills displayed
    y.domain(d3.range(data.length))
        .rangeBands([0, data.length * barHeight]);

    //set height of chart
    height = y.rangeExtent()[1];
    d3.select(chart.node().parentNode)
        .style("height", (height + margin.top + margin.bottom) + "px");

    //generate x-axis with custom tick labels
    chart.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis.tickFormat(function(d, i) {
            return tickLabels[i];
        }));

    //draw the bars
    var bars = chart.selectAll(".bar")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function(d, i) { return "translate(0," + y(i) + ")";});

    bars.append("rect")
        .attr("width", function(d) {return x(d.level); })
        .attr("height", y.rangeBand() - 5);

    bars.append("text")
        .attr("x", 15 )
        .attr("y", y.rangeBand() / 2)
        .attr("dy", ".35em")
        .text(function(d) { return d.skill; });

});

//make the chart responsive by redrawing the chart when the window size changes
d3.select(window).on('resize', resize);

function resize() {
    //update width
    marginLeft = parseInt(d3.select('#skillsChart h2').style('padding-left'), 10);
    width = parseInt(d3.select('#skillsChart').style('width'), 10);
    width = width - marginLeft - margin.right;

    //resize the chart
    x.range([0, width]);
    d3.select(chart.node().parentNode)
        .style('height', (y.rangeExtent()[1] + margin.top + margin.bottom) + 'px')
        .style('width', (width + marginLeft + margin.right) + 'px');

    //resize the bars
    chart.selectAll('rect')
        .attr('width', function(d) { return x(d.level); });

    //update axes
    chart.select('.x.axis').call(xAxis.tickFormat(function(d, i) {return tickLabels[i]; }));
}