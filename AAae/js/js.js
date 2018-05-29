function Mapa() {
    var centro = new google.maps.LatLng(-12.911093, -38.353620);
    var espacomapa = document.getElementById("maps");
    var mapProp= {
        center:centro,
        zoom:19};
    var maps=new google.maps.Map(espacomapa,mapProp);
    var icone={
        url: "estilo/map-marker.svg",
        size: new google.maps.Size(30, 46),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(10, 32)

    }

    var marker = new google.maps.Marker({
        position: centro,
        title:"Antenor Aguiar advocacia especializada",
        animation: google.maps.Animation.DROP,
        icon: icone});
    marker.setMap(maps);
    
    
}