// variable to hold a reference to our A-Frame world
let world;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set a background color for the world using RGB values
	world.setBackground(15, 10, 50);

	// now that we have a world we can add elements to it using a series of wrapper classes
  
   // Add a starry sky by generating random spheres
    for (let i = 0; i < 100; i++) {
        let star = new Sphere({
            x: random(-50, 50), 
            y: random(5, 50), 
            z: random(-50, 50),
            radius: random(0.1, 0.3),
            red: 255, 
            green: 255, 
            blue: 255,
        });
        world.add(star);
    }

	// Base of the runway (large gray rectangle for runway)
	var runwayBase = new Box({
	    x: 0, y: 0.05, z: 0, // Positioning the runway
	    width: 20, height: 0.1, depth: 5, // Large rectangle for runway
	    red: 169, green: 169, blue: 169  // Gray color floor
	});
	world.add(runwayBase);

	// New base in the middle of the runway, black and taller
	var middleBase = new Box({
	    x: 0, y: 0.05, z: 0, // Positioned in the middle
	    width: 5, height: 0.8, depth: 5, // A bit taller and narrower
	    red: 0, green: 0, blue: 0  // Black color
	});
	world.add(middleBase);

	// Runway markers (cylinders as markers along the runway)
	for (let i = -8; i <= 8; i += 4) {  // Placing markers every 4 units
	    var marker = new Cylinder({
	        x: i, y: 0.5, z: -2.1, // Adjusting position along the z-axis for depth
	        radius: 0.1, height: 0.5,
	        red: 255, green: 255, blue: 255  // White color for markers
	    });
	    world.add(marker);
	}

	// Futuristic Modern Boxes (adding more visual interest)
	var box1 = new Box({
	    x: -7, y: 0.25, z: -4, // Positioning the box
	    width: 1, height: 10, depth: 1, // Size of the box
	    red: 0, green: 255, blue: 255  // Cyan color to add contrast
	});
	world.add(box1);

	var box2 = new Box({
	    x: 7, y: 0.25, z: -5, // Positioning the box
	    width: 1, height: 10, depth: 1, // Size of the box
	    red: 0, green: 255, blue: 255  // Cyan color to match the other box
	});
	world.add(box2);

	var box3 = new Box({
	    x: -5, y: 0.25, z: -3, // Positioning the box
	    width: 2, height: 9, depth: 0.5, // Size of the box
	    red: 0, green: 0, blue: 255  // Blue color for a cool tone
	});
	world.add(box3);

	var box4 = new Box({
	    x: 5, y: 0.25, z: -3, // Positioning the box
	    width: 2, height: 7, depth: 0.5, // Size of the box
	    red: 0, green: 0, blue: 255  // Blue color for contrast
	});
	world.add(box4);

	var box5 = new Box({
	    x: 0, y: 0.25, z: -7, // Positioning the box slightly further down the runway
	    width: 3, height: 25, depth: 0.5, // Size of the box
	    red: 255, green: 255, blue: 255  // White color to bring brightness to the scene
	});
	world.add(box5);

	// Add clouds or decorative elements in the sky using spheres
	var cloud1 = new Sphere({
	    x: -4, y: 12, z: -3,
	    radius: 1,
	    red: 255, green: 255, blue: 255
	});
	world.add(cloud1);

	var cloud2 = new Sphere({
	    x: 4, y: 7, z: -4,
	    radius: 1.5,
	    red: 255, green: 255, blue: 255
	});
	world.add(cloud2);
	  
	var cloud3 = new Sphere({
	    x: 0, y: 19, z: -3, 
	    radius: 2,
	    red: 255, green: 255, blue: 255
	});
	world.add(cloud3);

	// Create a plane to serve as our "ground"
	var ground = new Plane({
	    x: 0, y: 0, z: 0,
	    width: 100, height: 100,
	    red: 0, green: 102, blue: 153, // Blue color for the ground
	    rotationX: -90, metalness: 0.25
	});
	world.add(ground);

	// Black walls around the floor (using boxes to enclose the base)
	var wallHeight = 3;  // Height of the walls
	var wallThickness = 0.1;  // Thickness of the walls

	// Left wall
	var leftWall = new Box({
	    x: -10, y: wallHeight / 2, z: 0, // Positioning left wall
	    width: wallThickness, height: wallHeight, depth: 5,
	    red: 0, green: 0, blue: 0  // Black color for the wall
	});
	world.add(leftWall);

	// Right wall
	var rightWall = new Box({
	    x: 10, y: wallHeight / 2, z: 0, // Positioning right wall
	    width: wallThickness, height: wallHeight, depth: 5,
	    red: 0, green: 0, blue: 0  // Black color for the wall
	});
	world.add(rightWall);

	// Front wall (along the negative z-axis)
	var frontWall = new Box({
	    x: 0, y: wallHeight / 2, z: -2.5, // Positioning front wall
	    width: 20, height: wallHeight, depth: wallThickness,
	    red: 0, green: 0, blue: 0  // Black color for the wall
	});
	world.add(frontWall);

	// Add the light source over the black box in the middle
	var light = new Light({
	    type: 'point',  // Point light that emits in all directions
	    x: 0, y: 1, z: 0,  // Positioning the light above the black middle base
	    intensity: 1.5,  // Brightness of the light
	    red: 255, green: 255, blue: 255  // White light color
	});
	world.add(light);

	// Text primitive
	var text = new Text({
		text: 'We were waiting for you',
		red: 128, green: 128, blue: 128,
		side: 'double',
		x: 0, y: 2, z: 0,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text);

	// Create a plane to serve as our "ground"
	var g = new Plane({x:0, y:0, z:0, width:100, height:100, red:50, green:90, blue:150, rotationX:-90, metalness:3000});

	// Add the plane to our world
	world.add(g);
}

function draw() {
	// Animation logic can be added here if needed
}
