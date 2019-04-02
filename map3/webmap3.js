let myMap3 = L.map('map3').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(myMap3)
L.tileLayer.wms('https://nowcoast.noaa.gov/arcgis/services/nowcoast/forecast_meteoceanhydro_sfc_ndfd_qpf6hrs_offsets/MapServer/WMSServer?request=GetCapabilities&service=WMS&version=1.3.0', {
  layers: '1',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA'
}).addTo(myMap3)
L.esri.dynamicMapLayer({
  url: 'http://hydro.arcgis.com/arcgis/rest/services/Tools/Hydrology/GPServer/Watershed/submitJob'
}).addTo(myMap3)
