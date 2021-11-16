function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.899940591970996, lng: -80.18691015848529 },
    zoom: 17, 
    styles:
    [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
        {
            "visibility": "on"
        },
        {
            "weight": "2.61"
        }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#ead3d3"
        }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#dc58ff"
        }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "lightness": "-32"
        },
        {
            "saturation": "2"
        },
        {
            "color": "#df64e9"
        }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#ae4c4c"
        }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#e11010"
        }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#7ff073"
        }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#d0e3ea"
        }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
        {
            "lightness": 100
        },
        {
            "visibility": "simplified"
        }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
        {
            "visibility": "off"
        }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#f17cca"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#35d7a1"
        }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
        {
            "color": "#ff0000"
        }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
        {
            "color": "#f4a66f"
        }
        ]
    }
    ]
});  

  const westhall = new google.maps.Marker({
    position: { lat: 39.90039774515715, lng: -80.18634280856412},
    map,
    title: "West Hall",
    icon: "lodging.svg",

});
  const infowindow = new google.maps.InfoWindow({
    content: "This is West Hall, one of four upperclassmen female halls. They have private bathrooms and temperature controlled rooms.",
  });

  westhall.addListener("click", () => {+
    infowindow.open({
      anchor: westhall,
      map,
      shouldFocus: false,
    });
  });
    const WesthallCoords = [
    { lat: 39.90055455879919, lng: -80.18640635436637},
    { lat: 39.90055198669842, lng: -80.1862192702881 },
    { lat: 39.900233045452175,lng: -80.18622731691512 },
    { lat: 39.90023253102962, lng: -80.1864157420979 },
    { lat: 39.90055455879919, lng: -80.18640635436637}
    ];

  // Construct the polygon.
  const Westhallpolygon = new google.maps.Polygon({
    paths: WesthallCoords,
    strokeColor: "#D81B60",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: 0.35,
});

  Westhallpolygon.setMap(map);

  const pollock = new google.maps.Marker({
    position: { lat: 39.899242095336994, lng: -80.18496140667891},
    map,
    title: "Pollock Hall",
    icon: "lodging.svg",
});
  const infowindow1 = new google.maps.InfoWindow({
    content: "This is Pollock Hall, one of four upperclassmen female halls. They have private bathrooms and temperature controlled rooms.",
  });

  pollock.addListener("click", () => {+
    infowindow1.open({
      anchor: pollock,
      map,
      shouldFocus: false,
    });
  });
  const PollockCoords = [
  { lat: 39.89932966350404, lng: -80.18516459443458 }, 
  { lat: 39.89932674703466, lng: -80.18474261889916 }, 
  { lat: 39.89918383988418, lng: -80.18474185858288 }, 
  { lat:39.89918675635962, lng: -80.18516611506715 }, 
  { lat: 39.89932966350404 , lng: -80.18516459443458}
  ];

  const PollockPolygon = new google.maps.Polygon({
    paths: PollockCoords,
    strokeColor: "#D81B60",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: 0.35,
});
  PollockPolygon.setMap(map);

  const south = new google.maps.Marker({
    position: { lat: 39.9002956188474, lng: -80.185938261221 },
    map,
    title: "South Hall",
    icon: "lodging.svg",
});
  const infowindow2 = new google.maps.InfoWindow({
    content: "This is South Hall, one of four upperclassmen female halls. They have private bathrooms and temperature controlled rooms.",
  });

  south.addListener("click", () => {+
    infowindow2.open({
      anchor: south,
      map,
      shouldFocus: false,
    });
  });
  const SouthCoords = [
  { lat: 39.90036605487646, lng: -80.18613153937626 },
  { lat: 39.90036296834702, lng: -80.18572786691594 },
  { lat: 39.90022304553257, lng: -80.18572786691594 },
  { lat: 39.90022407437784, lng: -80.18613556268981 },
  { lat: 39.90036605487646, lng: -80.18613153937626 },
  ];
  // Construct the polygon.
  const Southpolygon = new google.maps.Polygon({
    paths: SouthCoords,
    strokeColor: "#D81B60",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: .35,
});

  Southpolygon.setMap(map);

 const east = new google.maps.Marker({
    position: { lat:39.90039269869375, lng: -80.18548765501615 },
    map,
    title: "East Hall",
    icon: "lodging.svg",
});
  const infowindow3 = new google.maps.InfoWindow({
    content: "This is East Hall, one of four upperclassmen female halls. They have private bathrooms and temperature controlled rooms.",
  });

  east.addListener("click", () => {+
    infowindow3.open({
      anchor: east,
      map,
      shouldFocus: false,
    });
  });
 
  const EastCoords = [
  { lat: 39.90053762015809, lng: -80.18560529398341 },
  { lat: 39.90053762015809, lng: -80.18542619172558 },
  { lat: 39.90022538413387, lng: -80.18542096905911 },
  { lat: 39.90022435528863, lng: -80.18560604147535 },
  { lat: 39.90053762015809, lng: -80.18560529398341 },
  ];

  //Construct the polygon.
  const Eastpolygon = new google.maps.Polygon({
    paths: EastCoords,
    strokeColor: "#D81B60",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: 0.35,
});
  Eastpolygon.setMap(map);

  const denny = new google.maps.Marker({
    position: { lat: 39.90081667973322, lng: -80.18806240496608 },
    map,
    title: "Denny Hall",
    icon: "lodging.svg",
});

  const infowindow4 = new google.maps.InfoWindow({
    content: "This is Denny Hall, one of three underclassmen female halls. These have communal bathrooms and the temperature is not personally regulated.",
  });

  denny.addListener("click", () => {+
    infowindow4.open({
      anchor: denny,
      map,
      shouldFocus: false,
    });
  });
  const DennyCoords = [
  { lat: 39.900610682165784, lng:-80.18792103343665},
  { lat: 39.90074003467404, lng:-80.18791571971262},
  { lat: 39.900752542226186,lng: -80.18822956737662},
  { lat: 39.900856771738525,lng: -80.18822005684135},
  { lat: 39.90084217961626, lng:-80.18776626842975},
  { lat:39.90060453604617,lng: -80.18777849626082},
  { lat: 39.900610682165784, lng:-80.18792103343665},
  ];

// Construct the polygon.
const Dennypolygon = new google.maps.Polygon({
    paths: DennyCoords,
    strokeColor: "#D81B60",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#D81B60",
    fillOpacity: 0.35,
});

Dennypolygon.setMap(map);


const willison = new google.maps.Marker({
    position: { lat: 39.89736989958573, lng: -80.18628696072808},
    map,
    title: "Willison Hall",
    icon: "boys.svg",
});

 const infowindow5 = new google.maps.InfoWindow({
    content: "This is Willison 'Willy' Hall, the only male upperclassmen hall. They have private bathrooms and temperature controlled rooms.",
  });

  willison.addListener("click", () => {+
    infowindow5.open({
      anchor: willison,
      map,
      shouldFocus: false,
    });
  });
const WillisonCoords = [
{ lat: 39.897538998708136, lng: -80.18620531789718 },
{ lat: 39.897541056479255, lng: -80.18638502589995 },
{ lat: 39.89711509654142, lng: -80.18639307252694 },
{ lat: 39.89711509654142, lng: -80.18621604673316 },
{ lat: 39.897538998708136, lng: -80.18620531789718 }
];

// Construct the polygon.
const Willisonpolygon = new google.maps.Polygon({
    paths: WillisonCoords,
    strokeColor: "#283593",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#283593",
    fillOpacity: 0.35,
});

Willisonpolygon.setMap(map);

const thayer = new google.maps.Marker({
    position: { lat:39.89939729819656, lng:-80.18420527700681 },
    map,
    title: "Thayer Hall",
    icon: "boys.svg",
});
 const infowindow6 = new google.maps.InfoWindow({
    content: "This is Thayer Hall, one of two underclassmen male halls. These have communal bathrooms and the temperature is not personally regulated.",
  });

  thayer.addListener("click", () => {+
    infowindow6.open({
      anchor: thayer,
      map,
      shouldFocus: false,
    });
  });
const ThayerCoords = [
{ lat: 39.89980, lng: -80.18429},
{ lat: 39.89979, lng: -80.18416},
{ lat: 39.89947, lng: -80.18416},
{ lat: 39.89947, lng: -80.18415},
{ lat: 39.89940, lng: -80.18415},
{ lat: 39.89939, lng: -80.18409},
{ lat: 39.89922, lng: -80.18409},
{ lat: 39.89922, lng: -80.18430},
{ lat: 39.89980, lng: -80.18429} ];

const ThayerPolygon = new google.maps.Polygon({
    paths: ThayerCoords,
    strokeColor: "#283593",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#283593",
    fillOpacity: 0.35,
});
ThayerPolygon.setMap(map);

const bulhhall = new google.maps.Marker({
    position: {lat: 39.89935690394464, lng:- 80.18545287771477 }, 
    map,
    title: "Buhl Hall",
    icon: "college.svg",
});
 const infowindow7 = new google.maps.InfoWindow({
    content: "This is Buhl Hall, the humanities building. Many class subjesct are taught here. Subjects include English, Videography, Philosophy, Psychology and more. ",
  });

  bulhhall.addListener("click", () => {+
    infowindow7.open({
      anchor: bulhhall,
      map,
      shouldFocus: false,
    });
  });
const BuhlhallCoords = [
{ lat: 39.89950878796206,  lng: -80.18562837849694},
{ lat: 39.899509816818046, lng: -80.18551304351189},
{ lat: 39.89954891333424,  lng: -80.18551304351189},
{ lat: 39.899546855623434, lng: -80.18537356864626},
{ lat: 39.89950055711358,  lng: -80.18537222754178},
{ lat: 39.899497470545185, lng: -80.18525689255674},
{ lat: 39.899184697556294, lng: -80.18526091587017},
{ lat: 39.899188812999625, lng: -80.18564178954172},
{ lat: 39.89950878796206,  lng: -80.18562837849694},  
];

// Construct the polygon.
const Buhlhallpolygon = new google.maps.Polygon({
    paths: BuhlhallCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

Buhlhallpolygon.setMap(map);

const gpac = new google.maps.Marker({
    position: {lat:39.899931095334956, lng: -80.1878854312791}, 
    map,
    title: "GPAC",
    icon: "theatre.svg",
});
 const infowindow8 = new google.maps.InfoWindow({
    content: "This is the GPAC. Mainly theatre performances are displayed here as well as some community events like WUidol.",
  });

  gpac.addListener("click", () => {+
    infowindow8.open({
      anchor: gpac,
      map,
      shouldFocus: false,
    });
  });
const GpacCoords = [
{ lat: 39.90003, lng: -80.18801},
{ lat: 39.90002, lng: -80.18771},
{ lat: 39.89980, lng: -80.18772},
{ lat: 39.89981, lng: -80.18802},
{ lat: 39.90003, lng: -80.18801} ];

const GpacPolygon = new google.maps.Polygon({
    paths: GpacCoords,
    strokeColor: "#82E0AA",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});
GpacPolygon.setMap(map);

const stewart = new google.maps.Marker({
    position: {lat: 39.89798205894295, lng: -80.18665181203191}, 
    map,
    title: "Stewart Hall",
    icon: "college.svg",
});
 const infowindow9 = new google.maps.InfoWindow({
    content: "This is Stewart Science Hall. All science classes and labs are taught in this building. ",
  });

  stewart.addListener("click", () => {+
    infowindow9.open({
      anchor: stewart,
      map,
      shouldFocus: false,
    });
  });
const StewartCoords = [
{ lat: 39.89820313942542, lng: -80.18674222997413 },
{ lat: 39.898196966171525, lng: -80.1864800440406 },
{ lat: 39.8977313983387, lng: -80.1864981489516 },
{ lat: 39.89773808607581, lng: -80.18675966433287 },
{ lat: 39.89820313942542, lng: -80.18674222997413 },
];
  // Construct the polygon.
  const Stewartpolygon = new google.maps.Polygon({
    paths: StewartCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

  Stewartpolygon.setMap(map);

  const eberly = new google.maps.Marker({
    position: {lat: 39.89986625578328, lng: -80.1853483651433}, 
    map,
    title: "Eberly Library",
    icon: "library.svg",
});
 const infowindow10 = new google.maps.InfoWindow({
    content: "This is Eberly Library. Here you'll find many books, a computer lab, and quiet study spaces.",
  });

  eberly.addListener("click", () => {+
    infowindow10.open({
      anchor: eberly,
      map,
      shouldFocus: false,
    });
  });
  const EberlyCoords = [

  { lat: 39.90005305490059, lng: -80.18549297214429 },
  { lat: 39.900042602452224, lng: -80.18519237546121 },
  { lat: 39.899704856856225, lng: -80.18517193829295 },
  { lat: 39.89971138966885, lng: -80.18550233917973 },
  { lat: 39.90005305490059, lng: -80.18549297214429 },
  ];

  const EberlyPolygon = new google.maps.Polygon({
    paths: EberlyCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

  EberlyPolygon.setMap(map);


  const fieldhouse = new google.maps.Marker({
    position: {lat: 39.8981106746966, lng: -80.18756967336536}, 
    map,
    title: "Rudy Marisa Fieldhouse",
    icon: "basketball.svg",
});
   const infowindow11 = new google.maps.InfoWindow({
    content: "This is Rudy Marisa Fieldhouse. All indoor athletic events are held here, volleyball and basketball.",
  });

  fieldhouse.addListener("click", () => {+
    infowindow11.open({
      anchor: fieldhouse,
      map,
      shouldFocus: false,
    });
  });

  const FieldhouseCoords = [
  { lat: 39.89822129557472, lng: -80.18785727074538 },
  { lat: 39.89821720506465, lng: -80.18727432259585 },
  { lat: 39.89798540909532, lng: -80.18727609987678 },
  { lat: 39.89798677260331, lng: -80.18785904802633 },
  { lat: 39.89822129557472, lng: -80.18785727074538 },
  ];

  const FieldhousePolygon = new google.maps.Polygon({
    paths: FieldhouseCoords,
    strokeColor: "#c16c18",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#c16c18",
    fillOpacity: 0.6,
});

  FieldhousePolygon.setMap(map);

  const hanna = new google.maps.Marker({
    position: {lat: 39.89944418918636, lng: -80.18704642779667 }, 
    map,
    title: "Hanna Hall",
    icon: "college.svg",
});
 const infowindow12 = new google.maps.InfoWindow({
    content: "This is Hanna Hall. All business classes and some education classes are taught in this building. ",
  });

  hanna.addListener("click", () => {+
    infowindow12.open({
      anchor: hanna,
      map,
      shouldFocus: false,
    });
  });
  const HannaCoords = [
  { lat: 39.899575902129406, lng: -80.18715171790629 },
  { lat: 39.89957230113685, lng: -80.18694183506034 },
  { lat: 39.89937424625455, lng: -80.18694787003034 },
  { lat: 39.89937784725752, lng: -80.18715708232408 },
  { lat: 39.899575902129406, lng: -80.18715171790629 }
  ];

  const HannaPolygon = new google.maps.Polygon({
    paths: HannaCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

  HannaPolygon.setMap(map);

  const cred = new google.maps.Marker({
    position: {lat:39.89808370611509 , lng:  -80.18621952490405 }, 
    map,
    title: "CRED",
    icon: "college.svg",
});
 const infowindow13 = new google.maps.InfoWindow({
    content: "This is CRED. Meetings and some math classes occur in this building.",
  });

  cred.addListener("click", () => {+
    infowindow13.open({
      anchor: cred,
      map,
      shouldFocus: false,
    });
  });
  const CREDCoords = [
  { lat: 39.89820789567786, lng: -80.1863954019053 },
  { lat: 39.898204677891705, lng:  -80.18609970550332 },
  { lat: 39.89802287272942, lng:  -80.18610389977852 },
  { lat: 39.89802930831865,  lng:  -80.18640588759332 },
  { lat: 39.89820789567786, lng: -80.1863954019053 }
  ];
  const CREDPolygon = new google.maps.Polygon({
    paths: CREDCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

  CREDPolygon.setMap(map);

  const caf = new google.maps.Marker({
    position: {lat:39.900409759110595, lng: -80.18793974862055 }, 
    map,
    title: "Benedum Dining Hall",
    icon: "restaurant.svg",
});
 const infowindow14 = new google.maps.InfoWindow({
    content: "This is Benedum Dining Hall. All main meals are here and typically buffet self-serve style. Students also eat at Chick-Fil-A or the Beehive in Stover.",
  });

  caf.addListener("click", () => {+
    infowindow14.open({
      anchor: caf,
      map,
      shouldFocus: false,
    });
  });
  const CafCoords = [
  {lat: 39.90057697576644, lng: -80.18770375376484},
  {lat: 39.900575325992115,lng: -80.18770375376484},
  {lat: 39.900192577281416,lng: -80.18772740925684},
  {lat: 39.90020907511356, lng: -80.18817901411937},
  {lat: 39.90059182373212, lng: -80.18815750912664},
  {lat: 39.90059017395818, lng: -80.1880908436492},
  {lat: 39.90067926169413, lng: -80.18808869314994},
  {lat: 39.90067431237877, lng: -80.18796826518674},
  {lat: 39.90058522463638, lng: -80.18797471668455},
  {lat: 39.90057697576644, lng: -80.18770375376484},
  ];

  const CafPolygon = new google.maps.Polygon({
    paths: CafCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#898581",
    fillOpacity: 1,
});

  CafPolygon.setMap(map);

  const nest = new google.maps.Marker({
    position: {lat: 39.89812589499664, lng:-80.18539214212056 }, 
    map,
    title: "The Nest",
    icon: "convenience.svg",
});
 const infowindow15 = new google.maps.InfoWindow({
    content: "Welcome to the Nest. Located here is the bookstore and on the floor above is a hangout spot with an arcade! ",
  });

  nest.addListener("click", () => {+
    infowindow15.open({
      anchor: nest,
      map,
      shouldFocus: false,
    });
  });
  const TheNest = [
  {lat: 39.8982031743014, lng: -80.18528256249408},
  {lat: 39.89803340961704, lng: -80.1852906091205},
  {lat: 39.89803958288567, lng: -80.18549915085532},
  {lat: 39.89820883311696, lng: -80.18549512754211}

  ];

  const TheNestPolygon = new google.maps.Polygon({
    paths: TheNest,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});

  TheNestPolygon.setMap(map);

  const cjhouse = new google.maps.Marker({
    position: {lat:39.90034505763048 , lng:-80.18892178655857 }, 
    map,
    title: "Criminal Justice House",
    icon: "college.svg",
});
 const infowindow16 = new google.maps.InfoWindow({
    content: "This is the Criminal Justice House. All criminal justice classes and lifelike situations are taught in this building. ",
  });

  cjhouse.addListener("click", () => {+
    infowindow16.open({
      anchor: cjhouse,
      map,
      shouldFocus: false,
    });
  });
  const CjHouseCoords = [
  { lat: 39.900381516505455, lng: -80.18875312061515 },
  { lat: 39.90030229555674, lng: -80.18875312061515 },
  { lat: 39.900303838822865, lng: -80.1890005543931 },
  { lat: 39.90038357419121, lng: -80.18899988384086 },
  { lat: 39.900381516505455, lng: -80.18875312061515 },
  ];

  const CjHousePolygon = new google.maps.Polygon({
    paths: CjHouseCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});
  CjHousePolygon.setMap(map);

  const chapel = new google.maps.Marker({
    position: {lat:39.90072210668104, lng: -80.18718849507071 }, 
    map,
    title: "Robert's Chapel",
    icon: "religious-christian.svg",
});
 const infowindow17 = new google.maps.InfoWindow({
    content: "This is Robert's Chapel. A Chapel service is held every Tuesday at 11am and an UpperRoom service on Sunday nights at 8pm.",
  });

  chapel.addListener("click", () => {+
    infowindow17.open({
      anchor: chapel,
      map,
      shouldFocus: false,
    });
  });
  const ChapelCoords = [
  { lat: 39.90094412190922, lng: -80.18730816171713 },
  { lat: 39.900937434485016, lng:-80.18702518866414  },
  { lat:39.90050687827982 , lng:-80.18703994081373  },
  { lat: 39.90051099364375, lng: -80.18732090220995 },
  { lat: 39.90094412190922, lng: -80.18730816171713 }
  ];
  const ChapelHousepolygon = new google.maps.Polygon({
    paths: ChapelCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
});
  ChapelHousepolygon.setMap(map);

  const stover = new google.maps.Marker({
    position: {lat:39.899889178759366, lng:-80.18620635366936 }, 
    map,
    title: "Stover Student Center",
    icon: "convenience.svg",
});

   const infowindow18 = new google.maps.InfoWindow({
    content: "This is Stover Student Center. Currently, some classes are taught on the thrid floor. Students often come here to socialize, study, or eat food from the Beehive/market. This building is open 24/7.",
  });

  stover.addListener("click", () => {+
    infowindow18.open({
      anchor: stover,
      map,
      shouldFocus: false,
    });
  });
  const StoverCoords = [
  {lat: 39.899772227541916, lng: -80.18636360069222},
  {lat: 39.89980309309625, lng: -80.18636695345333},
  {lat: 39.89980309309625, lng: -80.18640517492993},
  {lat: 39.89999548807153, lng: -80.18639712830327},
  {lat: 39.89999548807153, lng: -80.18635823627444},
  {lat: 39.90002841122172, lng: -80.18635756572223},
  {lat: 39.90002326698055, lng: -80.18596864543396},
  {lat: 39.89976502557723, lng: -80.18597803316504},
  {lat: 39.899772227541916, lng: -80.18636360069222}
  ];

 // Construct the polygon.
 const Stoverpolygon = new google.maps.Polygon({
    paths: StoverCoords,
    strokeColor: "#1C1A18",
    strokeOpacity: 3,
    strokeWeight: 2,
    fillColor: "#82E0AA",
    fillOpacity: 1.5,
});

 Stoverpolygon.setMap(map);

}