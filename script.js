const width = window.innerWidth, height = window.innerHeight;

// init


const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshNormalMaterial({ color :'purple' });

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// Camera

const sizes = {
    width:600,
    height: 600,
}

const camera = new THREE.PerspectiveCamera (75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

const canvas = document.querySelector(".canvas")
const render = new THREE.WebGLRenderer({canvas})

render.setSize(sizes.width, sizes.height)

render.render(scene, camera)

// const renderer = new THREE.WebGLRenderer( { antialias: true } );
// renderer.setSize( width, height );
// renderer.setAnimationLoop( animation );
// document.body.appendChild( renderer.domElement );

// // animation

// function animation( time ) {

// 	mesh.rotation.x = time / 2000;
// 	mesh.rotation.y = time / 1000;

// 	renderer.render( scene, camera );

// }

