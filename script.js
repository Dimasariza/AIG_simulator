import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MapControls } from 'three/addons/controls/MapControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000);
renderer.setPixelRatio(window.devicePixelRatio);

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf1f1f1);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(4, 5, 11);

const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;
// controls.screenSpacePanning = false;
// controls.minDistance = 5;
// controls.maxDistance = 50;
// controls.maxPolarAngle = Math.PI / 2;

controls.enableDamping = true;
controls.enablePan = true;
controls.minDistance = 2;
controls.maxDistance = 25;
controls.minPolarAngle = 0.5;
controls.maxPolarAngle = 1.5;
controls.autoRotate = false;
controls.target = new THREE.Vector3(0, 1, 0);
controls.update();

const groundGeometry = new THREE.PlaneGeometry(20, 20, 32, 32);
groundGeometry.rotateX(-Math.PI / 2);
const groundMaterial = new THREE.MeshStandardMaterial({
    color: 0x555555,
    side: THREE.DoubleSide
});
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.castShadow = false;
groundMesh.receiveShadow = true;
scene.add(groundMesh);

const spotLight = new THREE.SpotLight(0xffffff,  3, 100, 0.22, 1);
spotLight.position.set(0, 25, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1)
scene.add(ambientLight)

const loader = new GLTFLoader().setPath('assets/');
loader.load('main_engine2.glb', (dieselEngine) => {
    const mesh = dieselEngine.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(2.5, 3.35, -0.78);
    mesh.rotation.set(0, Math.PI / 180 * 0, 0)
    mesh.scale.set(0.12, 0.12, 0.12)
    scene.add(mesh);
});

let propeller = loader.load('propeller2.gltf', (dieselEngine) => {
    const mesh = propeller = dieselEngine.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(3.1, 1.55, -3.4);
    mesh.rotation.set(0, Math.PI / 180 * 180, 0)
    mesh.scale.set(0.01, 0.01, 0.01)
    scene.add(mesh);
    return mesh
});

// loader.load('monitor.gltf', (propeller) => {
//     const mesh = propeller.scene;
//     mesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });
//     mesh.position.set(1.5, 1.66, 5);
//     mesh.rotation.set(0, Math.PI / 180 * 100, 0)
//     mesh.scale.set(0.5, 0.5, 0.5)
//     scene.add(mesh);
// })

// loader.load('monitor.gltf', (propeller) => {
//     const mesh = propeller.scene;
//     mesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });
//     mesh.position.set(0, 1.66, 5.1);
//     mesh.rotation.set(0, Math.PI / 180 * 90, 0)
//     mesh.scale.set(0.5, 0.5, 0.5)
//     scene.add(mesh);
// })

// loader.load('monitor.gltf', (propeller) => {
//     const mesh = propeller.scene;
//     mesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });
//     mesh.position.set(-1.5, 1.66, 5);
//     mesh.rotation.set(0, Math.PI / 180 * 80, 0)
//     mesh.scale.set(0.5, 0.5, 0.5)
//     scene.add(mesh);
// })

loader.load('console controle2.glb', (propeller) => {
    const mesh = propeller.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(0, 0, 4);
    mesh.rotation.set(0, Math.PI / 180 * 0, 0)
    mesh.scale.set(1.2, 1.2, 1.2)
    scene.add(mesh);
})

loader.load('diesel_engine.gltf', (propeller) => {
    const mesh = propeller.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(-2, 0.1, -1.5);
    mesh.rotation.set(0, Math.PI / 180 * 180, 0)
    // mesh.scale.set(1.5, 1.5, 1.5)
    scene.add(mesh);
})

loader.load('diesel_engine.gltf', (propeller) => {
    const mesh = propeller.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(0, 0.1, -1.5);
    mesh.rotation.set(0, Math.PI / 180 * 180, 0)
    // mesh.scale.set(1.5, 1.5, 1.5)
    scene.add(mesh);
})

// loader.load('joystick.gltf', (propeller) => {
//     const mesh = propeller.scene;
//     mesh.traverse((child) => {
//         if (child.isMesh) {
//             child.castShadow = true;
//             child.receiveShadow = true;
//         }
//     });
//     mesh.position.set(0, 1.25, 4.5);
//     mesh.rotation.set(0, Math.PI / 180 * 270, 0)
//     // mesh.scale.set(2, , 1.5)
//     scene.add(mesh);
// })

loader.load('metal_box.gltf', (propeller) => {
    const mesh = propeller.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(2.8, 1.5, -2.7);
    mesh.rotation.set(0, Math.PI / 180 * 270, 0)
    mesh.scale.set(0.5, 1, 1.5)
    scene.add(mesh);
})

loader.load('metal_box.gltf', (propeller) => {
    const mesh = propeller.scene;
    mesh.traverse((child) => {
        if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
        }
    });
    mesh.position.set(2.8, 1.5, -2.7);
    mesh.rotation.set(0, Math.PI / 180 * 90, 0)
    mesh.scale.set(0.5, 1, 1.5)
    scene.add(mesh);
})

// const text = THREE.TextGeometry("Hello")
// const textMesh = THREE.Mesh(text, [
//     new THREE
// ])

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    if(propeller) propeller.rotateZ(0.05)
    controls.update();
    renderer.render(scene, camera);
}

animate();