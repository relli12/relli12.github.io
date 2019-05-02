let trafficMap = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
L.tileLayer('https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Baton_Rouge_Traffic_Incidents_2010_to_2019_RE/FeatureServer').addTo(trafficMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateColor = 'olive' // let the initial color be a darker green
  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
    let age = feature.properties.MED_AGE
    layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')    // contents of the function
   }
  let geojsonOptions= {
    style:stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(trafficMap)
})
