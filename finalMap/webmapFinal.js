let trafficMap = L.map('map4').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
L.tileLayer('https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Baton_Rouge_Traffic_Incidents_2010_to_2019_RE/FeatureServer').addTo(trafficMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
let stateMapByGender = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  let stateStyle = function (feature) {
  let batonRougeTrafficIncidents = feature.properties.Baton_Rouge_Traffic_Incidents //
  let stateColor = 'pink' //
  if ( batonRougeTrafficIncidents > 4) { stateColor = 'blue' } //
  return {
    color: stateColor, //
    weight: 1,
    fillOpacity: 0.2
  }
}
let onEachFeature = function (feature, layer) {
  let name = feature.properties.STATE_NAME
    let numberOfFemales = feature.properties.Baton_Rouge_Traffic_Incidents
    layer.bindPopup('Number of Females' + 'Census average: 3132934' )
 }
  let geojsonOptions= {
    style:stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(stateMapByGender)
})
