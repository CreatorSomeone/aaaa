// Set up the scene, camera, and renderer
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// Add the 3D model to the scene
var loader = new THREE.GLTFLoader();
loader.load( 'path/to/model.gltf', function ( gltf ) {
    scene.add( gltf.scene );
}, undefined, function ( error ) {
    console.error( error );
} );

// Add the renderer to the model container
document.getElementById("model-container").appendChild( renderer.domElement );

// Render the scene
function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();

// Make the 3D model responsive
window.addEventListener( 'resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}, false );
