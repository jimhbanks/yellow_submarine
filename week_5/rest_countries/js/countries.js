function ajaxRequest(method, url) {
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.send();

  return request;
}

function successfulRequest(request) {
  return request.readyState == 4 && request.statusText == 'OK';
}

function getRegions(e) {
  var regions = [];
  $.ajax({
  type: 'GET',
  url: 'http://restcountries.eu/rest/v1/all'
}).done(function(response){
  var regionSelect = $('region-select');
  regionSelect.empty();
  $.each(response, function(index, item){ 
    if($,inArray(item.region, regions) === -1 && item.region.length >= 1){
      regions.push(item.region)
      regionSelect.append('<option value="' + item.region + '">' + item.region + '</option>')
    }
  }
})

  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      regionSelect.innerHTML = '';

      var response = JSON.parse(request.response);

      for(var i = 0; i < response.length; i++) {
        if(regions.indexOf(response[i].region) === -1 && response[i].region.length >= 1) {
          regions.push(response[i].region);

          var optionRegion = document.createElement('option');
          optionRegion.setAttribute('value', response[i].region);
          optionRegion.innerHTML = response[i].region;
          regionSelect.appendChild(optionRegion);
        }
      }
      var optionDefault = document.createElement('option');
      optionDefault.setAttribute('value', 'default');
      optionDefault.innerHTML = '-- Select your region --';
      regionSelect.insertBefore(optionDefault, regionSelect.firstChild);
    }
  }
})

function getCountries(e) {
  var regionName = this.value;

  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/region/' + regionName);
  
  request.onreadystatechange = function() {
    if(successfulRequest(request)) {
      countrySelect.innerHTML = '';
      var response = JSON.parse(request.response);

      for(var i = 0; i < response.length; i++) {
        var optionCountry = document.createElement('option');
        optionCountry.setAttribute('value', response[i].name);
        optionCountry.innerHTML = response[i].name;
        countrySelect.appendChild(optionCountry);
      }
    }
      var optionDefault = document.createElement('option');
      optionDefault.setAttribute('value', 'default');
      optionDefault.innerHTML = '-- Select your region --';
      regionSelect.insertBefore(optionDefault, regionSelect.firstChild);
    
    }
  }

function getCountryData(e) {
  var countryName = this.value;
  var request = ajaxRequest('GET', 'https://restcountries.eu/rest/v1/name/' + countryName);
  request.onreadystatechange = function() {
    // if(successfulRequest(request)) {
    //   countrySelect.innerHTML = '';
    //   var response = JSON.parse(request.response);  
    //   console.log(response);
}
}

var getRegionsButton;
var regionSelect;
var countrySelect;
var results;

document.addEventListener('DOMContentLoaded', function() {
  console.log('HELLO WORLD (minus Scotland!)');

  // Define our variables
  getRegionsButton = document.getElementById('get-regions');
  regionSelect = document.getElementById('region-select');
  countrySelect = document.getElementById('country-select');
  results = document.getElementById('results');


  // Add event listeners
  getRegionsButton.addEventListener('click', getRegions);
  regionSelect.addEventListener('change', getCountries);
  countrySelect.addEventListener('change', getCountryData);
});
