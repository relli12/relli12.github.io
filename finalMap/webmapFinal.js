let trafficMap = L.map('map4').setView([30.4515, -91.1871], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
let batonRougeTrafficIncidentsUrl = 'https://services9.arcgis.com/SDQDNhpG8jikA0D1/arcgis/rest/services/Baton_Rouge_Traffic_Incidents_2010_to_2019_RE/FeatureServer'
jQuery.getJSON(batonRougeTrafficIncidentsUrl, function (data) {
let trafficMap= L.map('map4').setView([30.4515, -91.1871], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
jQuery.getJSON(batonRougeTrafficIncidentsUrl, function (data) {
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
  let name = feature.properties.Baton_Rouge_Traffic_Incidents
    let batonRougeTrafficIncidents = feature.properties.Baton_Rouge_Traffic_Incidents
    layer.bindPopup('FILE#' + 'CRASH DATE'+'TOT VEH'+'DISTRICT'+'ZONE'+'SUBZONE'+'STREET#'+'STREET NAME'+'STREET NAME'+'FORMATTED STREET' )
 }
  let geojsonOptions= {
    style:stateStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(trafficMap)
})
})
