function openNav(){document.getElementById("sidenav").style.width="300px",document.getElementById("corner-infowindow").style.left="330px"}function closeNav(){document.getElementById("sidenav").style.width="0",document.getElementById("corner-infowindow").style.left="80px"}var zoom=13,map,bounds,infoWindow,miniInfoWindow,cornerInfoWindow,initMap=function(){showMap(),ko.bindingHandlers.stopBinding={init:function(){return{controlsDescendantBindings:!0}}},ko.applyBindings(new ViewModel)},mapsHandleError=function(){var a=document.getElementById("map"),b=document.createElement("div");b.innerHTML='<h1 id="map-error-message">Map could not get loaded</h1>',b.style.position="absolute",b.style.left="250px",b.style.top="100px",b.style.color="#f00",a.appendChild(b)},showMap=function(){map=new google.maps.Map(document.getElementById("map"),{center:{lat:40.7413549,lng:-73.9980244},zoom:zoom,styles:styles,mapTypeControl:!1}),bounds=new google.maps.LatLngBounds,infoWindow=new google.maps.InfoWindow({maxWidth:300}),miniInfoWindow=new google.maps.InfoWindow,cornerInfoWindow=document.getElementById("corner-infowindow")},initWeather=function(a){ko.applyBindings(new WeatherViewModel(a),document.getElementById("weather"))},weatherHandleError=function(){var a=document.getElementById("weather-modal-content");a.innerHTML='<p>Weather could not get loaded</p><p>You can view the weather here: <a href="http://www.yr.no/place/United_States/New_York/New_York/" target="_blank">Weather on Yr.no</a></p>'},resizeLayout=function(){var a=document.getElementById("top-nav"),b=document.getElementById("map"),c=document.getElementById("sidenav"),d=document.getElementById("license-text"),e=document.getElementById("corner-infowindow"),f=window.innerHeight,g=window.innerWidth,h=a.clientHeight;b.style.width=g+"px",b.style.height=f-h+"px",c.style.height=f-h+"px",d.style.width=g-60+"px",e.style.top=h+30+"px"};document.addEventListener("DOMContentLoaded",function(){resizeLayout();var a=window.innerWidth;a<992&&closeNav()}),function(){function a(){c||(c=setTimeout(function(){c=null,b()},66))}function b(){resizeLayout()}window.addEventListener("resize",a,!1);var c}();