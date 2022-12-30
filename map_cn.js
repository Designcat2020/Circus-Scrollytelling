

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully',
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
 
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
// features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');
var wrapperOne = document.createElement('div');
wrapperOne.setAttribute("id", "wrapperOne");
header.appendChild(wrapperOne);
if (config.topTitle) {
    var topTitleText = document.createElement('div');
    topTitleText.classList.add("byline");
    topTitleText.innerText = config.topTitle;
    wrapperOne.appendChild(topTitleText);
}

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    wrapperOne.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h3');
    subtitleText.innerText = config.subtitle;
    wrapperOne.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('div');
    bylineText.classList.add("byline");
    bylineText.innerText = config.byline;
    wrapperOne.appendChild(bylineText);
}


if (config.description) {
    var descriptionText = document.createElement('p');
    descriptionText.innerHTML = config.description;
    wrapperOne.appendChild(descriptionText);
}

if (config.pictureNote) {
    var pictureNoteText = document.createElement('p');
    pictureNoteText.classList.add("byline");
    pictureNoteText.innerHTML = config.pictureNote;
    wrapperOne.appendChild(pictureNoteText);
}

if (config.image) {
    var image = new Image();
    image.src = config.image;
    wrapperOne.appendChild(image);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}





config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    chapter.classList.add("br3");
    chapter.innerHTML = record.chapterDiv;



    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || "centered");
    if (record.hidden) {
        container.classList.add("hidden");
    }
    features.appendChild(container);
});

story.appendChild(features);

var midContain = document.createElement('div');

if (config.midContain) {
    var midContainText = document.createElement('div');
    midContainText.innerHTML = config.midContain;
    midContain.appendChild(midContainText);
}

if (midContain.innerText.length > 0) {
    midContain.setAttribute('id', 'midContain');
    story.appendChild(midContain);
}


var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
        url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function () {
    // setup varieties scource
    map.addSource('oldRoute', {
        'type': 'geojson',
        'data': 'data/old-ship-route.geojson'
    });
    map.addSource('newRoute', {
        'type': 'geojson',
        'data': 'data/route.json'
    });
    map.addSource('paths', {
        'type': 'geojson',
        'data': 'data/Paths.geojson'
    });
    map.addSource('height', {
        'type': 'geojson',
        'data': 'data/height.geojson'
    });
    map.addSource('time', {
        'type': 'geojson',
        'data': 'data/Time.geojson'
    });
    map.addSource('cities', {
        'type': 'geojson',
        'data': 'data/city.geojson'
    });

    map.addSource('1922SHC', {
        'type': 'geojson',
        'data': 'data/1922SHC.geojson',
         });


    map.addLayer({
        'id': 'old-ship-route',
        'type': 'circle',
        'source': 'oldRoute',
        'paint': {
            'circle-color': '#ffffff',
            'circle-radius': 3,
            'circle-opacity': 0
        }
    });
    
    map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'newRoute',
        'paint': {
            'line-color': '#ffc000',
            'line-width': 2,
            'line-opacity': 0
        }
    });

    map.addLayer({
        'id': 'CityName',
        'type': 'symbol',
        'source': 'height',
        'layout': {
            'text-field': ['get', 'CityCH'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-size': 15,

        },
        'paint': {
            'text-color': '#ffffff',
            'text-halo-color': 'black',
            'text-halo-width': 1,
            'text-opacity': 1,
        },
        'filter': ['==', ['number', ['get', 'Scale']], 1]
    });

    map.addLayer({
        'id': 'path',
        'type': 'line',
        'source': 'paths',
        'paint': {
            'line-color': '#ffffff',
            'line-width': 1,
            'line-opacity': 0
        }
    });


    map.addLayer({
        'id': 'height',
        'type': 'fill-extrusion',
        'source': 'height',
        'paint': {
            'fill-extrusion-color': '#fffc00',
            'fill-extrusion-opacity': 0,
            'fill-extrusion-height': ['get', 'height']
        }
    });


    let filterChiarini1 = ['==', ['string', ['get', 'layer']], 'Chiarini\'s Paths'];
    let filterChiarini2 = ['==', ['string', ['get', 'Circus']], 'Chiarini\'s Circus'];

    map.addLayer({
        'id': 'Chiarini1',
        'type': 'line',
        'source': 'paths',
        'paint': {
            'line-color': '#b2df8a',
            'line-width': 1,
            'line-opacity': 0
        },
        'filter': ['all', filterChiarini1]
    });

    map.addLayer({
        id: 'Chiarini2',
        type: 'circle',
        source: 'cities',
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['number', ['get', 'Items']],
                5,
                10,
                20,
                20],
            'circle-color': '#b2df8a',
            'circle-opacity': 0
        },
        'filter': ['all', filterChiarini2]
    });

    let filterHarmston1 = ['==', ['string', ['get', 'layer']], 'Harmston\'s Paths'];
    let filterHarmston2 = ['==', ['string', ['get', 'Circus']], 'Harmston\'s Circus'];

    map.addLayer({
        'id': 'Harmston1',
        'type': 'line',
        'source': 'paths',
        'paint': {
            'line-color': '#d77fb4',
            'line-width': 1,
            'line-opacity': 0
        },
        'filter': ['all', filterHarmston1]
    });

    map.addLayer({
        id: 'Harmston2',
        type: 'circle',
        source: 'cities',
        paint: {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['number', ['get', 'Items']],
                5,
                10,
                20,
                20],
            'circle-color': '#d77fb4',
            'circle-opacity': 0
        },
        'filter': ['all', filterHarmston2]
    });

    map.addLayer({
        'id': 'cityCC',
        'type': 'circle',
        'source': 'cities',
        'paint': {
            'circle-radius': [
                'interpolate',
                ['linear'],
                ['number', ['get', 'Items']],
                5,
                10,
                100,
                30],
            'circle-color': '#feff00',
            'circle-opacity': 0
        },
        'filter': ['==', ['string', ['get', 'Circus']], 'all']
    });



    map.addLayer({
        'id': 'cityCH',
        'type': 'symbol',
        'source': 'cities',
        'layout': {
            'text-field': ['get', 'CH'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-size': 15,
        },
        'paint': {
            'text-color': '#ffffff',
            'text-halo-color': 'black',
            'text-halo-width': 1,
            'text-opacity': [
                'interpolate',
                ['exponential', 1],
                ['zoom'],
                5, 1,
                6, 0
            ]
        },
        'filter': ['==', ['string', ['get', 'Circus']], 'all']
    });

    map.addLayer({
        id: 'Mauritius',
        type: 'circle',
        source: 'time',
        paint: {
            'circle-radius': 10,
            'circle-color': '#ff3434',
            'circle-opacity': 0
        },
        'filter': ['==', ['number', ['get', 'Year']], 1861]
    });

    map.addLayer({
        'id': 'Shanghai1922',
        'type': 'raster',
        'source': {
            'type': 'raster',
            'url': 'mapbox://yansun2020.75ae6xox',
            'tileSize': 256
          }

    });


    map.addLayer({
        id: '1922SHC-1',
        type: 'circle',
        source: '1922SHC',
        paint: {
            'circle-radius': 10,
            'circle-color': '#ff3434',
            'circle-opacity': [
                'interpolate',
                ['exponential', 1],
                ['zoom'],
                13, 0,
                14, 1
            ],
        }
    });


    map.addLayer({
        id: '1922SHC-2',
        type: 'symbol',
        source: '1922SHC',
        layout: {
            'text-field': ['get', 'text'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top',
            'text-allow-overlap': true
        },
        paint: {
            'text-color':'#000000',
            'text-halo-color':'#ffffff',
            'text-halo-width':1,
            'text-opacity': ['interpolate',
                ['exponential', 1],
                ['zoom'],
                13, 0,
                14, 1
            ]
        }
    });


    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.75,
            progress: true
        })
        .onStepEnter(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.add('active');
            map.flyTo(chapter.location);
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');
            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
});

// setup resize event
window.addEventListener('resize', scroller.resize);

