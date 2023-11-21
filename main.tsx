import * as THREE from 'three';
import { World } from "./src/world";
import { WORLD_WIDTH, WORLD_HEIGHT } from "./src/config"

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Generate world
const world = new World(WORLD_WIDTH, WORLD_HEIGHT);

// Draw world bunderies
const geometry = new THREE.PlaneGeometry(WORLD_WIDTH, WORLD_HEIGHT);
const material = new THREE.LineBasicMaterial({ color: '#080808', side: THREE.DoubleSide });
const boundaries = new THREE.Mesh(geometry, material);
boundaries.position.x = WORLD_WIDTH / 2;
boundaries.position.y = WORLD_HEIGHT / 2;
scene.add(boundaries);

// Draw creatures
world.population.creatures.forEach(creature => {
  const geometry = new THREE.SphereGeometry(creature.size, 4, 1);
  const material = new THREE.LineBasicMaterial({ color: '#55ccFF' });
  creature.body = new THREE.LineSegments(geometry, material);
  creature.body.position.x = creature.x;
  creature.body.position.y = creature.y;
  scene.add(creature.body);
  creature.status()
});

camera.position.x = WORLD_WIDTH / 2;
camera.position.y = WORLD_HEIGHT / 2;
camera.position.z = 800;

function animate(): void {

  // Render world
  requestAnimationFrame(animate);

  // Move population
  world.population.creatures.forEach(creature => {
    creature.move();
  });
  renderer.render(scene, camera);
}
animate();
