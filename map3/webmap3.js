let stateMapByGender = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(stateMapByGender)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
  let numberOfFemales = feature.properties.FEMALES //
  let stateColor = 'pink' //
  if ( numberOfFemales < 3132934) { stateColor = 'blue' } //
  return {
    color: stateColor, //
    weight: 1,
    fillOpacity: 0.2
  }
}
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
    let numberOfFemales = feature.properties.FEMALES
    layer.bindPopup('Number of Females' + 'Census average: 3132934' )
 }
  let geojsonOptions= {
    style:stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(stateMapByGender)
})
