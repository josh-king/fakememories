	// workaround for chrome bug: https://code.google.com/p/chromium/issues/detail?id=35980#c12
	if (window.innerWidth === 0) { window.innerWidth = parent.innerWidth;
	    window.innerHeight = parent.innerHeight; }

	var camera, scene, renderer;
	var geometry, material, mesh;

	init();
	animate();

	function init() {

	    camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 2, 1000);
	    camera.position.z = 250;

	    scene = new THREE.Scene();

	    geometry = new THREE.IcosahedronGeometry(100, 2);
	    material = new THREE.MeshBasicMaterial({ color: 0x1BE862, wireframe: true, wireframeLinewidth: 1 });

	    mesh = new THREE.Mesh(geometry, material);
	    mesh.position.set(100, 100, 100);
	    scene.add(mesh);

	    renderer = new THREE.CanvasRenderer();
	    renderer.setSize(window.innerWidth, window.innerHeight);

	    container = document.getElementById( 'geo' );
	    container.appendChild(renderer.domElement);
	}

	function animate() {

	    requestAnimationFrame(animate);

	    mesh.rotation.x += 0.03;
	    mesh.rotation.y += 0.03;

	    renderer.render(scene, camera);

	}