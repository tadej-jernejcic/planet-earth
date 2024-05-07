import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import addStar from "./addStar";
import animate from "./animate";

let scene, camera, renderer, planet, controls;

function start() {
	scene = new THREE.Scene();

	//camera
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);
	camera.position.z = 30;

	// renderer
	renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector("#background"),
		alpha: true,
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0x000000, 0);

	// controls
	controls = new OrbitControls(camera, renderer.domElement);
	controls.target.set(0, 0, 0);
	controls.minDistance = 20;
	controls.maxDistance = 40;
	controls.enableDamping = true;
	controls.dampingFactor = 0.05;

	// populate sky with stars
	Array(70).fill().forEach(addStar);

	// add the planet
	addPlanet();

	//draw
	renderer.render(scene, camera);

	// animate
	animate();
}

function addPlanet() {
	const geometry = new THREE.SphereGeometry(10, 32, 32);
	const planetTexture = new THREE.TextureLoader().load("../assets/earth.jpg");
	const material = new THREE.MeshBasicMaterial({
		map: planetTexture,
	});
	planet = new THREE.Mesh(geometry, material);

	planet.rotation.y = 23.5;
	planet.rotation.z = 120;

	// add to scene
	scene.add(planet);
}

export { scene, camera, renderer, planet, controls };
export default start;
