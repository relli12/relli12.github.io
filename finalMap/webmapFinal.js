let trafficMap = L.map('map4').setView([30.4515, -91.1871], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
let batonRougeTrafficIncidentsUrl = 'https://lsuga.maps.arcgis.com/home/item.html?id=1646b187d91948249c031e39f2c7939e'
// jQuery.getJSON(batonRougeTrafficIncidentsUrl, function (data) {
// let trafficMap= L.map('map4').setView([30.4515, -91.1871], 4)
// L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(trafficMap)
jQuery.getJSON(batonRougeTrafficIncidentsUrl, function (data) {
  let incidentStyle = function (feature) {
    let batonRougeTrafficIncidents = feature.properties.TOT_VEH //
    let incidentColor = 'pink' //
    if ( TOT_VEH > 4) { incidentColor = 'blue' } //
    return {
      color: incidentColor, //
      weight: 1,
      fillOpacity: 0.2
    }
  }
  let onEachFeature = function (feature, layer) {
    let name = feature.properties.Baton_Rouge_Traffic_Incidents
    let batonRougeTrafficIncidents = feature.properties.Baton_Rouge_Traffic_Incidents
    layer.bindPopup('FILE#'+'CRASH DATE'+'TOT VEH'+'DISTRICT'+'ZONE'+'SUBZONE'+'STREET#'+'STREET NAME'+'STREET NAME'+'FORMATTED STREET' )
  }
  let trafficIncidentsNearSouthernCampus=L.polygon([
    [30.543096,-91.20610],
    [30.526674,-91.102056],
    [30.501922,-91.149096]
  ]).addTo(trafficMap)
  let trafficIncidentsNearLSUCampus=L.polygon([
    [30.411965,-91.194843],
    [30.433186,-91.157895],
    [30.386532,-91.159627]
  ]).addTo(trafficMap)
  let geojsonOptions = {
    style: incidentStyle,
    onEachFeature: onEachFeature
  }
  L.geoJSON(data, geojsonOptions).addTo(trafficMap)
})

