var wms_layers = [];


        var lyr_BaseMap_0 = new ol.layer.Tile({
            'title': 'Base Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Perawatan_1 = new ol.format.GeoJSON();
var features_Perawatan_1 = format_Perawatan_1.readFeatures(json_Perawatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perawatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perawatan_1.addFeatures(features_Perawatan_1);
var lyr_Perawatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perawatan_1, 
                style: style_Perawatan_1,
                popuplayertitle: "Perawatan",
                interactive: true,
    title: 'Perawatan<br />'
        });
var format_Temperature_2 = new ol.format.GeoJSON();
var features_Temperature_2 = format_Temperature_2.readFeatures(json_Temperature_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temperature_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temperature_2.addFeatures(features_Temperature_2);
var lyr_Temperature_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temperature_2, 
                style: style_Temperature_2,
                popuplayertitle: "Temperature",
                interactive: true,
    title: 'Temperature<br />'
        });
var format_kelembaban_3 = new ol.format.GeoJSON();
var features_kelembaban_3 = format_kelembaban_3.readFeatures(json_kelembaban_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kelembaban_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kelembaban_3.addFeatures(features_kelembaban_3);
var lyr_kelembaban_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kelembaban_3, 
                style: style_kelembaban_3,
                popuplayertitle: "kelembaban ",
                interactive: true,
    title: 'kelembaban <br />'
        });
var lyr_PetaNDVI_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "Peta NDVI",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PetaNDVI_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11712138.700960, -520729.538830, 11734139.805304, -509752.953754]
                            })
                        });

lyr_BaseMap_0.setVisible(true);lyr_Perawatan_1.setVisible(true);lyr_Temperature_2.setVisible(true);lyr_kelembaban_3.setVisible(true);lyr_PetaNDVI_4.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Perawatan_1,lyr_Temperature_2,lyr_kelembaban_3,lyr_PetaNDVI_4];
lyr_Perawatan_1.set('fieldAliases', {'id': 'id', });
lyr_Temperature_2.set('fieldAliases', {'id': 'id', });
lyr_kelembaban_3.set('fieldAliases', {'id': 'id', });
lyr_Perawatan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Temperature_2.set('fieldImages', {'id': 'TextEdit', });
lyr_kelembaban_3.set('fieldImages', {'id': 'Hidden', });
lyr_Perawatan_1.set('fieldLabels', {'id': 'no label', });
lyr_Temperature_2.set('fieldLabels', {'id': 'no label', });
lyr_kelembaban_3.set('fieldLabels', {});
lyr_kelembaban_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});