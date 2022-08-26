const API_URL = "https://api.covid19api.com/summary";

        function getApiData(url) {
            return new Promise((resolve, reject) => {

                var request = new XMLHttpRequest();

                request.open("GET", url);
                request.send();

                request.onload = () => {


                    if (request.status === 200) {
                        resolve(request.response)
                    }
                    else {
                        reject("Not able to fetch data");
                    }
                }
            });
        }


        getApiData(API_URL)
            .then((val) => {
                console.log(JSON.parse(val))
                displayData(JSON.parse(val));
            })
            .catch((err) => console.log("Error" + err));

        function displayData(serverData) {

            var s = document.getElementById("coun");
            for (var j = 0; j < serverData.Countries.length; j++) {
                var newDiv = document.createElement("option");
                newDiv.text = serverData.Countries[j].Country;
                newDiv.value = j;
                s.appendChild(newDiv);
            }

            var x = document.querySelector("form").appendChild(s);
            s.onclick = function () {
                if (s.options[s.selectedIndex].value == "Country Name") {
                    document.getElementById('date').innerHTML = "";
                    document.getElementById('newdeaths').innerHTML = "";
                    document.getElementById('totalCases').innerHTML = "";
                    document.getElementById('TotalDeaths').innerHTML = "";
                    document.getElementById('newcases').innerHTML = "";
                } else {
                    var checkvalue = s.options[s.selectedIndex].value;

                    document.getElementById('date').innerHTML = new Date().toDateString();
                    // document.getElementById('newdeaths').innerHTML = serverData.Countries[checkvalue].Date;
                    document.getElementById('newdeaths').innerHTML = serverData.Countries[checkvalue].NewDeaths;
                    document.getElementById('totalCases').innerHTML = serverData.Countries[checkvalue].TotalConfirmed;
                    document.getElementById('TotalDeaths').innerHTML = serverData.Countries[checkvalue].TotalDeaths;
                    document.getElementById('newcases').innerHTML = serverData.Countries[checkvalue].NewConfirmed;
                }
                
                // console.log(serverData.Countries[checkvalue].NewDeaths);

            };
            

        }