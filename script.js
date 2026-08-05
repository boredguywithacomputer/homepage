import * as THREE from 'three';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@v0.185.1/examples/jsm/loaders/GLTFLoader.js';

const searchbar = document.querySelector("#searchbar");
const canvas = document.querySelector("#turtlecanvas");

document.addEventListener("keypress", function(e) {
  const key = e.key;
  if(key == "Enter" && document.activeElement == searchbar) {
    const query = encodeURIComponent(searchbar.value);
    window.open(`https://google.com/search?q=${query}`);
  }
  if(key == "/" && document.activeElement != searchbar) {
    e.preventDefault();
    console.log("wow");
    searchbar.focus();
  }
})

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true});
const ambientLight = new THREE.AmbientLight(0xffffff, 1);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4 );
scene.add(directionalLight);
scene.add(ambientLight);
scene.background = new THREE.Color(0xf5e1dc);

//renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

let turty;

loader.load(
  "turtle.glb",
  function(gltf) {
    turty = gltf.scene;
    scene.add(turty);
    turty.position.z -= 5;
  }
)

function animate() {
  if(turty) {
    renderer.render(scene, cam);
    turty.rotation.y += 0.05;
    turty.rotation.x += 0.01;
    turty.rotation.z += 0.02;
  }
}

renderer.setAnimationLoop(animate);

async function getWeather() {
  try {
    const weatherstuff = await fetch('http://api.weatherapi.com/v1/current.json?q=%22Los+Angeles%22&key=042b059e3c134377ab7171013260508');
    const res = await weatherstuff.json();
    const tempf = res["current"].temp_f
    console.log(res);
    console.log(tempf);
    document.querySelector("#tempf").textContent = `${tempf}°F`
  } catch(err) {
    console.log(err);
  }
}

getWeather();

setInterval(function() {
  getWeather();
}, 60000)