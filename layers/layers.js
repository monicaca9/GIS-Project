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
    title: '<img src="styles/legend/Perawatan.png" /> Perawatan'
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
    title: '<img src="styles/legend/Temperature.png" /> Temperature'
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
    title: '<img src="styles/legend/kelembaban.png" /> Kelembaban'
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

var format_airigasi_5 = new ol.format.GeoJSON();
var features_airigasi_5 = format_airigasi_5.readFeatures(json_airigasi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airigasi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_airigasi_5.addFeatures(features_airigasi_5);
var lyr_airigasi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_airigasi_5, 
                style: style_airigasi_5,
                popuplayertitle: "airigasi",
                interactive: true,
                title: '<img src="styles/legend/airigasi_5.png" /> Irigasi'
            });

var format_bangunan_6 = new ol.format.GeoJSON();
var features_bangunan_6 = format_bangunan_6.readFeatures(json_bangunan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bangunan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bangunan_6.addFeatures(features_bangunan_6);
var lyr_bangunan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bangunan_6, 
                style: style_bangunan_6,
                popuplayertitle: "bangunan",
                interactive: true,
                title: '<img src="styles/legend/bangunan_6.png" /> bangunan'
            });

var format_jalan_7 = new ol.format.GeoJSON();
var features_jalan_7 = format_jalan_7.readFeatures(json_jalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_7.addFeatures(features_jalan_7);
var lyr_jalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_7, 
                style: style_jalan_7,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_7.png" /> jalan'
            });
            
lyr_BaseMap_0.setVisible(true);lyr_Perawatan_1.setVisible(true);lyr_Temperature_2.setVisible(true);lyr_kelembaban_3.setVisible(true);lyr_PetaNDVI_4.setVisible(true),lyr_airigasi_5.setVisible(true);lyr_bangunan_6.setVisible(true);lyr_jalan_7.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Perawatan_1,lyr_Temperature_2,lyr_kelembaban_3,lyr_PetaNDVI_4,lyr_airigasi_5,lyr_bangunan_6,lyr_jalan_7];
lyr_Perawatan_1.set('fieldAliases', {'id': 'id', });
lyr_Temperature_2.set('fieldAliases', {'id': 'id', });
lyr_kelembaban_3.set('fieldAliases', {'id': 'id', });
lyr_airigasi_5.set('fieldAliases', {'id': 'id', });
lyr_bangunan_6.set('fieldAliases', {});
lyr_jalan_7.set('fieldAliases', {});
lyr_Perawatan_1.set('fieldImages', {'id': 'TextEdit', });
lyr_Temperature_2.set('fieldImages', {'id': 'TextEdit', });
lyr_kelembaban_3.set('fieldImages', {'id': 'Hidden', });
lyr_airigasi_5.set('fieldAliases', {'id': 'id', });
lyr_bangunan_6.set('fieldAliases', {});
lyr_jalan_7.set('fieldAliases', {});
lyr_Perawatan_1.set('fieldLabels', {'id': 'no label', });
lyr_Temperature_2.set('fieldLabels', {'id': 'no label', });
lyr_kelembaban_3.set('fieldLabels', {});
lyr_airigasi_5.set('fieldAliases', {'id': 'id', });
lyr_bangunan_6.set('fieldAliases', {});
lyr_jalan_7.set('fieldAliases', {});
lyr_jalan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});