var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ClasificacinNoSupervisadaWARNES_1 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaWARNES_1 = format_ClasificacinNoSupervisadaWARNES_1.readFeatures(json_ClasificacinNoSupervisadaWARNES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaWARNES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaWARNES_1.addFeatures(features_ClasificacinNoSupervisadaWARNES_1);
var lyr_ClasificacinNoSupervisadaWARNES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaWARNES_1, 
                style: style_ClasificacinNoSupervisadaWARNES_1,
                popuplayertitle: 'Clasificación No Supervisada WARNES',
                interactive: false,
    title: 'Clasificación No Supervisada WARNES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_0.png" /> 1 - AGUA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_1.png" /> 2 - VEGETACIÓN<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_2.png" /> 3 - ÁREA PRODUCTIVA-PASTIZAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_3.png" /> 4 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_4.png" /> 5 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_5.png" /> 6 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaWARNES_1_6.png" /> 7 - SUELO<br />' });
var format_ClasificacinNoSupervisadaTRINCHERA_2 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaTRINCHERA_2 = format_ClasificacinNoSupervisadaTRINCHERA_2.readFeatures(json_ClasificacinNoSupervisadaTRINCHERA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaTRINCHERA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaTRINCHERA_2.addFeatures(features_ClasificacinNoSupervisadaTRINCHERA_2);
var lyr_ClasificacinNoSupervisadaTRINCHERA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaTRINCHERA_2, 
                style: style_ClasificacinNoSupervisadaTRINCHERA_2,
                popuplayertitle: 'Clasificación No Supervisada TRINCHERA',
                interactive: false,
    title: 'Clasificación No Supervisada TRINCHERA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_0.png" /> 1. CUERPOS DE AGUA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_1.png" /> 2. VEGETACION MEDIA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_2.png" /> 3. BOSQUE NATURAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_3.png" /> 4. AREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_4.png" /> 5. VEGETACION BAJA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_5.png" /> 6. SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRINCHERA_2_6.png" /> 7. AREAS CULTURALES<br />' });
var format_ClasificacinNoSupervisadaTRESCRUCES_3 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaTRESCRUCES_3 = format_ClasificacinNoSupervisadaTRESCRUCES_3.readFeatures(json_ClasificacinNoSupervisadaTRESCRUCES_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaTRESCRUCES_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaTRESCRUCES_3.addFeatures(features_ClasificacinNoSupervisadaTRESCRUCES_3);
var lyr_ClasificacinNoSupervisadaTRESCRUCES_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaTRESCRUCES_3, 
                style: style_ClasificacinNoSupervisadaTRESCRUCES_3,
                popuplayertitle: 'Clasificación No Supervisada TRES CRUCES',
                interactive: false,
    title: 'Clasificación No Supervisada TRES CRUCES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_0.png" /> 1 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_1.png" /> 2 - AREA PRODUCTIVA MEDIA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_2.png" /> 3 - AREA PRODUCTIVA ALTA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_3.png" /> 4 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_4.png" /> 5 - VEGETACION BAJA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_5.png" /> 6 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTRESCRUCES_3_6.png" /> 7 - INFRAESTRUCTURA<br />' });
var format_ClasificacinNoSupervisadaTHULAWHINTO_4 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaTHULAWHINTO_4 = format_ClasificacinNoSupervisadaTHULAWHINTO_4.readFeatures(json_ClasificacinNoSupervisadaTHULAWHINTO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaTHULAWHINTO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaTHULAWHINTO_4.addFeatures(features_ClasificacinNoSupervisadaTHULAWHINTO_4);
var lyr_ClasificacinNoSupervisadaTHULAWHINTO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaTHULAWHINTO_4, 
                style: style_ClasificacinNoSupervisadaTHULAWHINTO_4,
                popuplayertitle: 'Clasificación No Supervisada THULAWHINTO',
                interactive: false,
    title: 'Clasificación No Supervisada THULAWHINTO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_0.png" /> 1 - AGUA/SOMBRA/SIN DATO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_1.png" /> 2 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_2.png" /> 3 - BOFEDAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_3.png" /> 4 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_4.png" /> 5 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_5.png" /> 6 - PASTIZAL NATURAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaTHULAWHINTO_4_6.png" /> 7 - SIN DATO<br />' });
var format_ClasificacinNoSupervisadaSALANCACHI_5 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaSALANCACHI_5 = format_ClasificacinNoSupervisadaSALANCACHI_5.readFeatures(json_ClasificacinNoSupervisadaSALANCACHI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaSALANCACHI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaSALANCACHI_5.addFeatures(features_ClasificacinNoSupervisadaSALANCACHI_5);
var lyr_ClasificacinNoSupervisadaSALANCACHI_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaSALANCACHI_5, 
                style: style_ClasificacinNoSupervisadaSALANCACHI_5,
                popuplayertitle: 'Clasificación No Supervisada SALANCACHI',
                interactive: false,
    title: 'Clasificación No Supervisada SALANCACHI<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_0.png" /> 1- VEGETACIÓN<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_1.png" /> 2- VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_2.png" /> 3- PASTIZAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_3.png" /> 4- INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_4.png" /> 5- ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaSALANCACHI_5_5.png" /> 6- SUELO EN DESCANSO<br />' });
var format_ClasificacinNoSupervisadaPOZOALMAR_6 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaPOZOALMAR_6 = format_ClasificacinNoSupervisadaPOZOALMAR_6.readFeatures(json_ClasificacinNoSupervisadaPOZOALMAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaPOZOALMAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaPOZOALMAR_6.addFeatures(features_ClasificacinNoSupervisadaPOZOALMAR_6);
var lyr_ClasificacinNoSupervisadaPOZOALMAR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaPOZOALMAR_6, 
                style: style_ClasificacinNoSupervisadaPOZOALMAR_6,
                popuplayertitle: 'Clasificación No Supervisada POZO AL MAR',
                interactive: false,
    title: 'Clasificación No Supervisada POZO AL MAR<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_0.png" /> 1 - SERRANIA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_1.png" /> 2 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_2.png" /> 3 - PASTIZAL- ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_3.png" /> 4 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_4.png" /> 5 - ÁREA EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaPOZOALMAR_6_5.png" /> 6 - VEGETACIÓN DISPERSA<br />' });
var format_ClasificacinNoSupervisadaMEDIALUNA_7 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaMEDIALUNA_7 = format_ClasificacinNoSupervisadaMEDIALUNA_7.readFeatures(json_ClasificacinNoSupervisadaMEDIALUNA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaMEDIALUNA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaMEDIALUNA_7.addFeatures(features_ClasificacinNoSupervisadaMEDIALUNA_7);
var lyr_ClasificacinNoSupervisadaMEDIALUNA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaMEDIALUNA_7, 
                style: style_ClasificacinNoSupervisadaMEDIALUNA_7,
                popuplayertitle: 'Clasificación No Supervisada MEDIA LUNA',
                interactive: false,
    title: 'Clasificación No Supervisada MEDIA LUNA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_0.png" /> 1 - VEGETACIÓN - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_1.png" /> 2 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_2.png" /> 3 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_3.png" /> 4 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_4.png" /> 5 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaMEDIALUNA_7_5.png" /> 6 - SUELO DESNUDO<br />' });
var format_ClasificacinNoSupervisadaLASMARAS_8 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaLASMARAS_8 = format_ClasificacinNoSupervisadaLASMARAS_8.readFeatures(json_ClasificacinNoSupervisadaLASMARAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaLASMARAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaLASMARAS_8.addFeatures(features_ClasificacinNoSupervisadaLASMARAS_8);
var lyr_ClasificacinNoSupervisadaLASMARAS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaLASMARAS_8, 
                style: style_ClasificacinNoSupervisadaLASMARAS_8,
                popuplayertitle: 'Clasificación No Supervisada LAS MARAS',
                interactive: true,
    title: 'Clasificación No Supervisada LAS MARAS<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_0.png" /> 1 - SUELO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_1.png" /> 2 - PASTIZAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_2.png" /> 3 - VEGETACIÓN DENSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_3.png" /> 4 - SUELO DESNUDO/PASTIZAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_4.png" /> 5 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_5.png" /> 6 - ÁREA PRODUCTIVA/SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLASMARAS_8_6.png" /> 7 - INFRAESTRUCTURA<br />' });
var format_ClasificacinNoSupervisadaLACAHUARCA_9 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaLACAHUARCA_9 = format_ClasificacinNoSupervisadaLACAHUARCA_9.readFeatures(json_ClasificacinNoSupervisadaLACAHUARCA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaLACAHUARCA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaLACAHUARCA_9.addFeatures(features_ClasificacinNoSupervisadaLACAHUARCA_9);
var lyr_ClasificacinNoSupervisadaLACAHUARCA_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaLACAHUARCA_9, 
                style: style_ClasificacinNoSupervisadaLACAHUARCA_9,
                popuplayertitle: 'Clasificación No Supervisada LACAHUARCA',
                interactive: false,
    title: 'Clasificación No Supervisada LACAHUARCA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_0.png" /> 1 - VEGETACIÓN DENSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_1.png" /> 2 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_2.png" /> 3 - CAMINO / RIO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_3.png" /> 4 - INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_4.png" /> 5 - AREA PRODUCTIVA / PASTIZALES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaLACAHUARCA_9_5.png" /> 6 - VEGETACIÓN ARBOREA<br />' });
var format_ClasificacinNoSupervisadaKORIMAYU_10 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaKORIMAYU_10 = format_ClasificacinNoSupervisadaKORIMAYU_10.readFeatures(json_ClasificacinNoSupervisadaKORIMAYU_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaKORIMAYU_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaKORIMAYU_10.addFeatures(features_ClasificacinNoSupervisadaKORIMAYU_10);
var lyr_ClasificacinNoSupervisadaKORIMAYU_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaKORIMAYU_10, 
                style: style_ClasificacinNoSupervisadaKORIMAYU_10,
                popuplayertitle: 'Clasificación No Supervisada KORIMAYU',
                interactive: false,
    title: 'Clasificación No Supervisada KORIMAYU<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_0.png" /> 1. OTRO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_1.png" /> 2. VEGETACION<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_2.png" /> 3. AREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_3.png" /> 4. PASTIZALES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_4.png" /> 5. INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_5.png" /> 6. SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaKORIMAYU_10_6.png" /> 7. SUELO EN DESCANSO<br />' });
var format_ClasificacinNoSupervisadaCHUNCUSLA_11 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaCHUNCUSLA_11 = format_ClasificacinNoSupervisadaCHUNCUSLA_11.readFeatures(json_ClasificacinNoSupervisadaCHUNCUSLA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaCHUNCUSLA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaCHUNCUSLA_11.addFeatures(features_ClasificacinNoSupervisadaCHUNCUSLA_11);
var lyr_ClasificacinNoSupervisadaCHUNCUSLA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaCHUNCUSLA_11, 
                style: style_ClasificacinNoSupervisadaCHUNCUSLA_11,
                popuplayertitle: 'Clasificación No Supervisada CHUNCUSLA',
                interactive: false,
    title: 'Clasificación No Supervisada CHUNCUSLA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_0.png" /> 1. SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_1.png" /> 2. PASTIZALES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_2.png" /> 3. VEGETACION<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_3.png" /> 4. AREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_4.png" /> 5. INFRAESTRUCTURA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_5.png" /> 6. OTRO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCHUNCUSLA_11_6.png" /> 7. SUELO EN DESCANSO<br />' });
var format_ClasificacinNoSupervisadaCARMENELDORADO_12 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaCARMENELDORADO_12 = format_ClasificacinNoSupervisadaCARMENELDORADO_12.readFeatures(json_ClasificacinNoSupervisadaCARMENELDORADO_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaCARMENELDORADO_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaCARMENELDORADO_12.addFeatures(features_ClasificacinNoSupervisadaCARMENELDORADO_12);
var lyr_ClasificacinNoSupervisadaCARMENELDORADO_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaCARMENELDORADO_12, 
                style: style_ClasificacinNoSupervisadaCARMENELDORADO_12,
                popuplayertitle: 'Clasificación No Supervisada CARMEN EL DORADO',
                interactive: false,
    title: 'Clasificación No Supervisada CARMEN EL DORADO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_0.png" /> 1 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_1.png" /> 2 - VEGETACIÓN DENSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_2.png" /> 3 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_3.png" /> 4 - PASTIZAL/ÁRES-PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_4.png" /> 5 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_5.png" /> 6 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCARMENELDORADO_12_6.png" /> 7 - OTROS<br />' });
var format_ClasificacinNoSupervisadaCAIMANES_13 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaCAIMANES_13 = format_ClasificacinNoSupervisadaCAIMANES_13.readFeatures(json_ClasificacinNoSupervisadaCAIMANES_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaCAIMANES_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaCAIMANES_13.addFeatures(features_ClasificacinNoSupervisadaCAIMANES_13);
var lyr_ClasificacinNoSupervisadaCAIMANES_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaCAIMANES_13, 
                style: style_ClasificacinNoSupervisadaCAIMANES_13,
                popuplayertitle: 'Clasificación No Supervisada CAIMANES',
                interactive: false,
    title: 'Clasificación No Supervisada CAIMANES<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_0.png" /> 1 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_1.png" /> 2 - VEGETACIÓN DENSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_2.png" /> 3 - ÁREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_3.png" /> 4 - PASTIZAL/ÁRES-PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_4.png" /> 5 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_5.png" /> 6 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaCAIMANES_13_6.png" /> 7 - OTROS<br />' });
var format_ClasificacinNoSupervisadaBRENCHAH_14 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisadaBRENCHAH_14 = format_ClasificacinNoSupervisadaBRENCHAH_14.readFeatures(json_ClasificacinNoSupervisadaBRENCHAH_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisadaBRENCHAH_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisadaBRENCHAH_14.addFeatures(features_ClasificacinNoSupervisadaBRENCHAH_14);
var lyr_ClasificacinNoSupervisadaBRENCHAH_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisadaBRENCHAH_14, 
                style: style_ClasificacinNoSupervisadaBRENCHAH_14,
                popuplayertitle: 'Clasificación No Supervisada BRENCHA H',
                interactive: false,
    title: 'Clasificación No Supervisada BRENCHA H<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_0.png" /> VEGETACION ALTA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_1.png" /> AREA PRODUCTIVA<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_2.png" /> SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_3.png" /> SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_4.png" /> BOSQUE SECUNDARIO<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_5.png" /> BOSQUE NATURAL<br />\
    <img src="styles/legend/ClasificacinNoSupervisadaBRENCHAH_14_6.png" /> NEVADO<br />' });
var format_ClasificacinNoSupervisada25DEMAYO_15 = new ol.format.GeoJSON();
var features_ClasificacinNoSupervisada25DEMAYO_15 = format_ClasificacinNoSupervisada25DEMAYO_15.readFeatures(json_ClasificacinNoSupervisada25DEMAYO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClasificacinNoSupervisada25DEMAYO_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClasificacinNoSupervisada25DEMAYO_15.addFeatures(features_ClasificacinNoSupervisada25DEMAYO_15);
var lyr_ClasificacinNoSupervisada25DEMAYO_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClasificacinNoSupervisada25DEMAYO_15, 
                style: style_ClasificacinNoSupervisada25DEMAYO_15,
                popuplayertitle: 'Clasificación No Supervisada 25 DE MAYO',
                interactive: false,
    title: 'Clasificación No Supervisada 25 DE MAYO<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_0.png" /> 1 - VEGETACIÓN DISPERSA<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_1.png" /> 2 - AREA PRODUCTIVA MEDIA<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_2.png" /> 3 - AREA PRODUCTIVA ALTA<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_3.png" /> 4 - SUELO EN DESCANSO<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_4.png" /> 5 - VEGETACION BAJA<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_5.png" /> 6 - SUELO DESNUDO<br />\
    <img src="styles/legend/ClasificacinNoSupervisada25DEMAYO_15_6.png" /> 7 - INFRAESTRUCTURA<br />' });
var format_Departamentos_16 = new ol.format.GeoJSON();
var features_Departamentos_16 = format_Departamentos_16.readFeatures(json_Departamentos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_16.addFeatures(features_Departamentos_16);
var lyr_Departamentos_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamentos_16, 
                style: style_Departamentos_16,
                popuplayertitle: 'Departamentos',
                interactive: false,
                title: '<img src="styles/legend/Departamentos_16.png" /> Departamentos'
            });
var format_Municipios_17 = new ol.format.GeoJSON();
var features_Municipios_17 = format_Municipios_17.readFeatures(json_Municipios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_17.addFeatures(features_Municipios_17);
var lyr_Municipios_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_17,
maxResolution:168.0267969135718,
 
                style: style_Municipios_17,
                popuplayertitle: 'Municipios',
                interactive: false,
                title: '<img src="styles/legend/Municipios_17.png" /> Municipios'
            });
var format_PerimetroABA_18 = new ol.format.GeoJSON();
var features_PerimetroABA_18 = format_PerimetroABA_18.readFeatures(json_PerimetroABA_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerimetroABA_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerimetroABA_18.addFeatures(features_PerimetroABA_18);
var lyr_PerimetroABA_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerimetroABA_18, 
                style: style_PerimetroABA_18,
                popuplayertitle: 'Perimetro ABA',
                interactive: false,
                title: '<img src="styles/legend/PerimetroABA_18.png" /> Perimetro ABA'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ClasificacinNoSupervisadaWARNES_1.setVisible(true);lyr_ClasificacinNoSupervisadaTRINCHERA_2.setVisible(true);lyr_ClasificacinNoSupervisadaTRESCRUCES_3.setVisible(true);lyr_ClasificacinNoSupervisadaTHULAWHINTO_4.setVisible(true);lyr_ClasificacinNoSupervisadaSALANCACHI_5.setVisible(true);lyr_ClasificacinNoSupervisadaPOZOALMAR_6.setVisible(true);lyr_ClasificacinNoSupervisadaMEDIALUNA_7.setVisible(true);lyr_ClasificacinNoSupervisadaLASMARAS_8.setVisible(true);lyr_ClasificacinNoSupervisadaLACAHUARCA_9.setVisible(true);lyr_ClasificacinNoSupervisadaKORIMAYU_10.setVisible(true);lyr_ClasificacinNoSupervisadaCHUNCUSLA_11.setVisible(true);lyr_ClasificacinNoSupervisadaCARMENELDORADO_12.setVisible(true);lyr_ClasificacinNoSupervisadaCAIMANES_13.setVisible(true);lyr_ClasificacinNoSupervisadaBRENCHAH_14.setVisible(true);lyr_ClasificacinNoSupervisada25DEMAYO_15.setVisible(true);lyr_Departamentos_16.setVisible(true);lyr_Municipios_17.setVisible(true);lyr_PerimetroABA_18.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ClasificacinNoSupervisadaWARNES_1,lyr_ClasificacinNoSupervisadaTRINCHERA_2,lyr_ClasificacinNoSupervisadaTRESCRUCES_3,lyr_ClasificacinNoSupervisadaTHULAWHINTO_4,lyr_ClasificacinNoSupervisadaSALANCACHI_5,lyr_ClasificacinNoSupervisadaPOZOALMAR_6,lyr_ClasificacinNoSupervisadaMEDIALUNA_7,lyr_ClasificacinNoSupervisadaLASMARAS_8,lyr_ClasificacinNoSupervisadaLACAHUARCA_9,lyr_ClasificacinNoSupervisadaKORIMAYU_10,lyr_ClasificacinNoSupervisadaCHUNCUSLA_11,lyr_ClasificacinNoSupervisadaCARMENELDORADO_12,lyr_ClasificacinNoSupervisadaCAIMANES_13,lyr_ClasificacinNoSupervisadaBRENCHAH_14,lyr_ClasificacinNoSupervisada25DEMAYO_15,lyr_Departamentos_16,lyr_Municipios_17,lyr_PerimetroABA_18];
lyr_ClasificacinNoSupervisadaWARNES_1.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaTRINCHERA_2.set('fieldAliases', {'NO_SUPERVI': 'NO_SUPERVI', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_propv': 'cod_propv', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'region': 'region', 'areaKm2': 'areaKm2', });
lyr_ClasificacinNoSupervisadaTRESCRUCES_3.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaTHULAWHINTO_4.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaSALANCACHI_5.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaPOZOALMAR_6.set('fieldAliases', {'SourceID': 'SourceID', 'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaMEDIALUNA_7.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaLASMARAS_8.set('fieldAliases', {'SourceID': 'SourceID', 'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaLACAHUARCA_9.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaKORIMAYU_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO_SUPER': 'NO_SUPER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_num': 'ord_num', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaCHUNCUSLA_11.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaCARMENELDORADO_12.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaCAIMANES_13.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisadaBRENCHAH_14.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', });
lyr_ClasificacinNoSupervisada25DEMAYO_15.set('fieldAliases', {'NO_SUPER': 'NO_SUPER', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'ord_mun': 'ord_mun', 'municipio': 'municipio', 'zona_utm': 'zona_utm', 'region': 'region', 'areakm2': 'areakm2', 'area ha': 'area ha', 'area_has': 'area_has', });
lyr_Departamentos_16.set('fieldAliases', {'departamen': 'departamen', });
lyr_Municipios_17.set('fieldAliases', {'id': 'id', 'gid': 'gid', 'c_ut': 'c_ut', 'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'n°_ley': 'n°_ley', 'fecha_ley': 'fecha_ley', 'zona': 'zona', 'id_ut': 'id_ut', 'bl_comli_m': 'bl_comli_m', 'capital': 'capital', 'c_siot': 'c_siot', 'tioc_aioc': 'tioc_aioc', });
lyr_PerimetroABA_18.set('fieldAliases', {'gid': 'gid', 'cod_depto': 'cod_depto', 'depto': 'depto', 'cod_prov': 'cod_prov', 'prov': 'prov', 'cod_mpio': 'cod_mpio', 'mpio': 'mpio', 'cod_cd_com': 'cod_cd_com', 'ciu_com': 'ciu_com', 'id_ciu_com': 'id_ciu_com', 'com_inra': 'com_inra', 'id_inra': 'id_inra', 'tipo': 'tipo', 'fuente': 'fuente', 'upa_13': 'upa_13', 'sup13ha': 'sup13ha', 'n_pre_ace': 'n_pre_ace', 'id_com_cpv': 'id_com_cpv', 'id_com_cna': 'id_com_cna', 'id_com_ace': 'id_com_ace', 'reg_censos': 'reg_censos', 'id_com_ca': 'id_com_ca', 'tot_viv_12': 'tot_viv_12', 'tot_viv_ac': 'tot_viv_ac', 'ord_mun': 'ord_mun', 'cod_ag': 'cod_ag', 'con_ag': 'con_ag', 'ag_unico': 'ag_unico', 'cod_ae': 'cod_ae', 'con_ae': 'con_ae', 'ae_unico': 'ae_unico', 'tot_pob_ac': 'tot_pob_ac', 'tot_pob_12': 'tot_pob_12', 'cod_aba': 'cod_aba', 'aba_unico': 'aba_unico', 'upa_fin': 'upa_fin', 'usr_insert': 'usr_insert', 'fec_insert': 'fec_insert', 'usr_update': 'usr_update', 'fec_update': 'fec_update', 'd_co_comk': 'd_co_comk', 'observ': 'observ', });
lyr_ClasificacinNoSupervisadaWARNES_1.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaTRINCHERA_2.set('fieldImages', {'NO_SUPERVI': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_propv': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'region': 'TextEdit', 'areaKm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaTRESCRUCES_3.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaTHULAWHINTO_4.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaSALANCACHI_5.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaPOZOALMAR_6.set('fieldImages', {'SourceID': 'Range', 'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaMEDIALUNA_7.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaLASMARAS_8.set('fieldImages', {'SourceID': 'Range', 'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaLACAHUARCA_9.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaKORIMAYU_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'NO_SUPER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_num': 'Range', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaCHUNCUSLA_11.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaCARMENELDORADO_12.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaCAIMANES_13.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisadaBRENCHAH_14.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', });
lyr_ClasificacinNoSupervisada25DEMAYO_15.set('fieldImages', {'NO_SUPER': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'ord_mun': 'TextEdit', 'municipio': 'TextEdit', 'zona_utm': 'Range', 'region': 'TextEdit', 'areakm2': 'TextEdit', 'area ha': 'TextEdit', 'area_has': 'TextEdit', });
lyr_Departamentos_16.set('fieldImages', {'departamen': 'TextEdit', });
lyr_Municipios_17.set('fieldImages', {'id': 'TextEdit', 'gid': 'TextEdit', 'c_ut': 'TextEdit', 'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'n°_ley': 'TextEdit', 'fecha_ley': 'DateTime', 'zona': 'TextEdit', 'id_ut': 'TextEdit', 'bl_comli_m': 'TextEdit', 'capital': 'TextEdit', 'c_siot': 'TextEdit', 'tioc_aioc': 'TextEdit', });
lyr_PerimetroABA_18.set('fieldImages', {'gid': 'TextEdit', 'cod_depto': 'TextEdit', 'depto': 'TextEdit', 'cod_prov': 'TextEdit', 'prov': 'TextEdit', 'cod_mpio': 'TextEdit', 'mpio': 'TextEdit', 'cod_cd_com': 'TextEdit', 'ciu_com': 'TextEdit', 'id_ciu_com': 'TextEdit', 'com_inra': 'TextEdit', 'id_inra': 'TextEdit', 'tipo': 'TextEdit', 'fuente': 'TextEdit', 'upa_13': 'TextEdit', 'sup13ha': 'TextEdit', 'n_pre_ace': 'TextEdit', 'id_com_cpv': 'TextEdit', 'id_com_cna': 'TextEdit', 'id_com_ace': 'TextEdit', 'reg_censos': 'TextEdit', 'id_com_ca': 'TextEdit', 'tot_viv_12': 'TextEdit', 'tot_viv_ac': 'TextEdit', 'ord_mun': 'TextEdit', 'cod_ag': 'TextEdit', 'con_ag': 'TextEdit', 'ag_unico': 'TextEdit', 'cod_ae': 'TextEdit', 'con_ae': 'TextEdit', 'ae_unico': 'TextEdit', 'tot_pob_ac': 'TextEdit', 'tot_pob_12': 'TextEdit', 'cod_aba': 'TextEdit', 'aba_unico': 'TextEdit', 'upa_fin': 'TextEdit', 'usr_insert': 'TextEdit', 'fec_insert': 'TextEdit', 'usr_update': 'TextEdit', 'fec_update': 'TextEdit', 'd_co_comk': 'TextEdit', 'observ': 'TextEdit', });
lyr_ClasificacinNoSupervisadaWARNES_1.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaTRINCHERA_2.set('fieldLabels', {'NO_SUPERVI': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_propv': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'region': 'no label', 'areaKm2': 'no label', });
lyr_ClasificacinNoSupervisadaTRESCRUCES_3.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaTHULAWHINTO_4.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaSALANCACHI_5.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaPOZOALMAR_6.set('fieldLabels', {'SourceID': 'no label', 'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaMEDIALUNA_7.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaLASMARAS_8.set('fieldLabels', {'SourceID': 'no label', 'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaLACAHUARCA_9.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaKORIMAYU_10.set('fieldLabels', {'OBJECTID': 'no label', 'NO_SUPER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_num': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaCHUNCUSLA_11.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaCARMENELDORADO_12.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaCAIMANES_13.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisadaBRENCHAH_14.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', });
lyr_ClasificacinNoSupervisada25DEMAYO_15.set('fieldLabels', {'NO_SUPER': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'ord_mun': 'no label', 'municipio': 'no label', 'zona_utm': 'no label', 'region': 'no label', 'areakm2': 'no label', 'area ha': 'no label', 'area_has': 'no label', });
lyr_Departamentos_16.set('fieldLabels', {'departamen': 'no label', });
lyr_Municipios_17.set('fieldLabels', {'id': 'no label', 'gid': 'no label', 'c_ut': 'no label', 'departamen': 'no label', 'provincia': 'no label', 'municipio': 'no label', 'n°_ley': 'no label', 'fecha_ley': 'no label', 'zona': 'no label', 'id_ut': 'no label', 'bl_comli_m': 'no label', 'capital': 'no label', 'c_siot': 'no label', 'tioc_aioc': 'no label', });
lyr_PerimetroABA_18.set('fieldLabels', {'gid': 'no label', 'cod_depto': 'no label', 'depto': 'no label', 'cod_prov': 'no label', 'prov': 'no label', 'cod_mpio': 'no label', 'mpio': 'no label', 'cod_cd_com': 'no label', 'ciu_com': 'no label', 'id_ciu_com': 'no label', 'com_inra': 'no label', 'id_inra': 'no label', 'tipo': 'no label', 'fuente': 'no label', 'upa_13': 'no label', 'sup13ha': 'no label', 'n_pre_ace': 'no label', 'id_com_cpv': 'no label', 'id_com_cna': 'no label', 'id_com_ace': 'no label', 'reg_censos': 'no label', 'id_com_ca': 'no label', 'tot_viv_12': 'no label', 'tot_viv_ac': 'no label', 'ord_mun': 'no label', 'cod_ag': 'no label', 'con_ag': 'no label', 'ag_unico': 'no label', 'cod_ae': 'no label', 'con_ae': 'no label', 'ae_unico': 'no label', 'tot_pob_ac': 'no label', 'tot_pob_12': 'no label', 'cod_aba': 'no label', 'aba_unico': 'no label', 'upa_fin': 'no label', 'usr_insert': 'no label', 'fec_insert': 'no label', 'usr_update': 'no label', 'fec_update': 'no label', 'd_co_comk': 'no label', 'observ': 'no label', });
lyr_PerimetroABA_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});