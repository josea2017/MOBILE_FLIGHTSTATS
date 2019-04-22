import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';


import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	GoogleMapOptions,
	CameraPosition,
	MarkerOptions,
	Marker,
	Environment
} from '@ionic-native/google-maps';


@Component({
	selector: 'app-map',
	templateUrl: './map.page.html',
	styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

	constructor(public geolocation: Geolocation) { }
	
	map: GoogleMap;
	position;
	
	

	ngOnInit() {
		this.loadMap();
	}
	ngAfterViewInit(){
		this.geolocationNative();
		
	}
	geolocationNative(){
		this.geolocation.getCurrentPosition().then((geposition: Geoposition) =>{

			console.log(geposition);
			this.position = geposition;

		})
	}

	ionViewDidLoad() {

	}

	loadMap() {

		// This code is necessary for browser
		Environment.setEnv({
			'API_KEY_FOR_BROWSER_RELEASE': '(AIzaSyCNsmrLi0tuUFvjskHa_MsSxanx3cUykjM `https://`)',
			'API_KEY_FOR_BROWSER_DEBUG': '(AIzaSyCNsmrLi0tuUFvjskHa_MsSxanx3cUykjM `http://`)'
		});

		let mapOptions: GoogleMapOptions = {
			camera: {
				target: {
					lat: 43.0741904,
					lng: -89.3809802
				},	
				zoom: 18,
				tilt: 30
			}
		};

		this.map = GoogleMaps.create('map_canvas', mapOptions);

		let marker: Marker = this.map.addMarkerSync({
			title: 'Ionic',
			icon: 'blue',
			animation: 'DROP',
			position: {
				lat: 43.0741904,
				lng: -89.3809802
			}
		});
		marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
			alert('clicked');
		});
	}
}
