
var model = {
    //bio contains a name, role, welcomeMessage, contacts object and skills array.
    // The contacts object should contain (but doesn't have to) a mobile number,
    // email address, github username, twitter handle and location.
    bio: {
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
        "skills": ["HTML", "CSS", "Javascript", "jQuery"]
    },
    //work contains an array of jobs. Each job object in jobs should contain an employer,
    // title, location, dates worked and description
    work: {
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
        ]
    },
    //projects contains an array of projects. Each project object in projects should contain a title,
    // dates worked, description, and an images array with URL strings for project images.
    projects: [
        {
            "title": "Portfolio",
            "dates": 2014,
            "description": "I made this portfolio based on a design mock-up to showcase my featured work. " +
                "I learned a lot about HTML and CSS in the process.",
            "images": ["images/portfolio.jpg"],
            "url": "https://github.com/georgejdli/portfolio"
        },
        {
            "title": "Resume",
            "dates": 2014,
            "description": "You're looking at it!" +
                "Resume page built with HTML, CSS and Javascript. I learned how to manipulate data types, build loops, and create functions in JS. I also learned how to use jQuery DOM manipulation build my resume when a user opens the website.",
            "images": ["images/resume.jpg"],
            "url": "https://github.com/georgejdli/frontend-nanodegree-resume/tree/gh-pages"
        }
    ],
    //education contains an array of schools. Each school object in schools contains a letter,
    // location, degree, majors array, dates attended and a url for the school's website.
    // education also contains an onlineCourses array. Each onlineCourse object in
    // onlineCourses should contain a title, school, dates attended and a url for the course.
    education: {
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
        ]
    }



};

var octopus = {
    init: function() {
        //model.init();
        view.init();
        viewChart.init();
        viewMap.init();
    },

    getBio: function() {
        return model.bio;
    },

    getWork: function() {
        return model.work;
    },

    getProjects: function() {
        return model.projects;
    },

    getEducation: function() {
        return model.education;
    }
};

var view = {
    init: function() {

        //variable starting with HTML are defined in helper.js
        this.displayBio = function(bio) {
            // #header before <ul>#topContact
            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
            $("#header")
                .prepend(formattedRole)
                .prepend(formattedName);

            // <ul>#topContact & #footerContacts
            for( var contact in bio.contacts) {
                if (bio.contacts.hasOwnProperty(contact)) {
                    var formattedContact = HTMLcontactGeneric.replace("%contact%",
                        contact).replace("%data%", bio.contacts[contact]);
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
        };

        this.displayWork = function (work) {
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
        };

        this.displayProject = function (projects) {
            var i;
            for (var project in projects) {
                if (projects.hasOwnProperty(project)) {
                    $("#projects").append(HTMLprojectStart);
                    var formattedTitle = HTMLprojectTitle
                        .replace("%data%", projects[project].title)
                        .replace("#", projects[project].url);
                    var formattedDates = HTMLprojectDates
                        .replace("%data%", projects[project].dates);
                    var formattedDescription = HTMLprojectDescription
                        .replace("%data%", projects[project].description);
                    $(".project-entry:last")
                        .append(formattedTitle)
                        .append(formattedDates)
                        .append(formattedDescription);
                    for (i = 0; i< projects[project].images.length; i++) {
                        var formattedImage = HTMLprojectImage
                            .replace("%data%", projects[project].images[i]);
                        $(".project-entry:last").append(formattedImage);

                    }
                }
            }
        };

        this.displayEducation = function (education) {
            for (var school in education.schools) {
                if (education.schools.hasOwnProperty(school)) {
                    $("#education").append(HTMLschoolStart);
                    var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name).
                        replace("#", education.schools[school].url);
                    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                    $(".education-entry:last")
                        .append(formattedSchool + formattedDegree)
                        .append(formattedDates)
                        .append(formattedLocation)
                        .append(formattedMajors);
                }
            }
            $("#education").append(HTMLonlineClasses);
            for (var online in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(online)) {
                    $("#education").append(HTMLschoolStart);
                    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title).
                        replace("#", education.onlineCourses[online].url);
                    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
                    var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);
                    var formattedOnlineURL = HTMLonlineURL.replace(/%data%|#/g, education.onlineCourses[online].url);
                    $(".education-entry:last")
                        .append(formattedOnlineTitle + formattedOnlineSchool)
                        .append(formattedOnlineDates)
                        .append(formattedOnlineURL);
                }
            }
        };

        $("#mapDiv").append(googleMap);

        view.render();
    },

    render: function() {
        //call functions
        this.displayBio(octopus.getBio());
        this.displayWork(octopus.getWork());
        this.displayProject(octopus.getProjects());
        this.displayEducation(octopus.getEducation());
    }
};

var viewChart = {
    init: function() {
        viewChart.render();
    },

    render: function() {
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
    }
};

var viewMap = {
    init: function() {
        /*
         This is the fun part. Here's where we generate the custom Google Map for the website.
         See the documentation below for more details.
         https://developers.google.com/maps/documentation/javascript/reference
         */
        var map;

        function initializeMap(bio, education, work) {
            var locations;

            var mapOptions = {
                disableDefaultUI: true
            };

            // This next line makes `map` a new Google Map JavaScript Object and attaches it to
            // <div id="map">, which is appended as part of an exercise late in the course.
            map = new google.maps.Map(document.querySelector('#map'), mapOptions);


            /*
             locationFinder() returns an array of every location string from the JSONs
             written for bio, education, and work.
             */
            function locationFinder() {

                // initializes an empty array
                var locations = [];

                // adds the single location property from bio to the locations array
                locations.push(bio.contacts.location);

                // iterates through school locations and appends each location to
                // the locations array
                for (var school in education.schools) {
                    locations.push(education.schools[school].location);
                }

                // iterates through work locations and appends each location to
                // the locations array
                for (var job in work.jobs) {
                    locations.push(work.jobs[job].location);
                }

                return locations;
            }

        /*
         createMapMarker(placeData) reads Google Places search results to create map pins.
         placeData is the object returned from search results containing information
         about a single location.
         */
        function createMapMarker(placeData) {

            // The next lines save location data from the search result object to local variables
            var lat = placeData.geometry.location.k;  // latitude from the place service
            var lon = placeData.geometry.location.D;  // longitude from the place service
            var name = placeData.formatted_address;   // name of the place from the place service
            var bounds = window.mapBounds;            // current boundaries of the map window

            // marker is an object with additional data about the pin for a single location
            var marker = new google.maps.Marker({
                map: map,
                position: placeData.geometry.location,
                title: name
            });

            // infoWindows are the little helper windows that open when you click
            // or hover over a pin on a map. They usually contain more information
            // about a location.
            var infoWindow = new google.maps.InfoWindow({
                content: name
            });

            // hmmmm, I wonder what this is about...
            google.maps.event.addListener(marker, 'click', function() {
                // your code goes here!
                infoWindow.open(map, marker);
            });

            // this is where the pin actually gets added to the map.
            // bounds.extend() takes in a map location object
            bounds.extend(new google.maps.LatLng(lat, lon));
            // fit the map to the new marker
            map.fitBounds(bounds);
            // center the map
            map.setCenter(bounds.getCenter());
        }

        /*
         callback(results, status) makes sure the search returned results for a location.
         If so, it creates a new map marker for that location.
         */
        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                createMapMarker(results[0]);
            }
        }

        /*
         pinPoster(locations) takes in the array of locations created by locationFinder()
         and fires off Google place searches for each location
         */
        function pinPoster(locations) {

            // creates a Google place search service object. PlacesService does the work of
            // actually searching for location data.
            var service = new google.maps.places.PlacesService(map);

            // Iterates through the array of locations, creates a search object for each location
            for (place in locations) {

                // the search request object
                var request = {
                    query: locations[place]
                };

                // Actually searches the Google Maps API for location data and runs the callback
                // function with the search results after each search.
                service.textSearch(request, callback);
            }
        }

        // Sets the boundaries of the map based on pin locations
        window.mapBounds = new google.maps.LatLngBounds();

        // locations is an array of location strings returned from locationFinder()
        locations = locationFinder();

        // pinPoster(locations) creates pins on the map for each location in
        // the locations array
        pinPoster(locations);

    }

        // Calls the initializeMap() function when the page loads
        window.addEventListener('load', function() {
            return initializeMap(octopus.getBio(), octopus.getEducation(), octopus.getWork());

        });

        // Vanilla JS way to listen for resizing of the window
        // and adjust map bounds
        window.addEventListener('resize', function(e) {
            // Make sure the map bounds get updated on page resize
            map.fitBounds(mapBounds);
        });

    }
};
octopus.init();