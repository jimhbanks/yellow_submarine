$(document).ready(function() {
  // define our variables
  var getRegionsButton = $('#get-regions');
  var regionSelect = $('#region-select');
  var countrySelect = $('#country-select');
  var results = $('#results');

  // add an event listener to the get regions button on click
  getRegionsButton.on('click', getRegions);
  // add an event listener to get the countries in that region when I change regions
  regionSelect.on('change', getCountries);
  // add an event listener to get the country data for the country when I change countries
  countrySelect.on('change', getCountryData);

  function getRegions(e) {
    // send ajax request to rest countries to get all the countries
    $.ajax({
      type: 'GET',
      url: 'http://restcountries.eu/rest/v1/all'
    }) // when it's done log it out
    .done(function(response) {
      // empty the regions everytime so they don't duplicate
      regionSelect.empty();

      // (we're going extract the regions from the countries and add it to the select)
      var regions = [];


      $.each(response, function(index, item) {
        if($.inArray(item.region, regions) === -1 && item.region.length >= 1) {
          regions.push(item.region);
          regionSelect.append('<option value="' + item.region + '">' + item.region + '</option>')
        }
      })
      regionSelect.prepend('<option value="default">-- Select your region --</option>')
    });
  }

  function getCountries(e) {
    var regionName = $(this).val();

    $.ajax({
      type: 'GET',
      url: 'http://restcountries.eu/rest/v1/region/' + regionName
    })
    .done(function(response) {
      countrySelect.empty();

      $.each(response, function(index, country) {
        countrySelect.append('<option value="' + country.name + '">' + country.name + '</option>');
      });

      countrySelect.prepend('<option value="default">-- Select your country --</option>');
    });
  }

  function getCountryData(e) {
    var countryName = $(this).val();

    $.ajax({
      type: 'GET',
      url : 'http://restcountries.eu/rest/v1/name/' + countryName
    })
    .done(function(response) {
      var country = response[0];

      var countryTemplate = '<h1>' + country.name + '</h1>';
      countryTemplate += '<h2>' + country.capital + '</h2>';
      countryTemplate += '<p>Population: ' + numeral(country.population).format('0,0') + '</p>';
      countryTemplate += '<img src="http://www.geonames.org/flags/x/' + country.alpha2Code.toLowerCase() + '.gif">';

      results.html(countryTemplate);
    });
  }
});
