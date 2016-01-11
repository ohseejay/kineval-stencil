/*

     KinEval
     Implementation of robot kinematics, control, decision making, and dynamics 
     in HTML5/JavaScript and threejs
     
     @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

*/


function startingPlaceholderInit() {

    //console.log(JSON.stringify(robot));  // just to see initial starting robot object
    //console.log(robot);  // same thing but displayed as an object. click it in the console

    var local_spacing = 0.9;  // variables declared with "var" are local 
    global_spacing = 0.9;  // variables declared with "var" are global
    vert_offset = 1;  // this could be useful later
    jitter_radius = 0.02;  // and this too

    my_object = {};  // objects can be created with braces
    my_object.university = "Michigan";  // create object property with an assignment
    my_object["department"] = "EECS";  // equivalent to my.object.department = "EECS";
    my_object.course_number = 398;  // this is a number
    my_object.course_number = my_object.course_number*Math.pow(10,3) + 2;  // this is a number = 398002; + operator adds number
    my_object.course_number = Math.floor(my_object.course_number/1000).toString() + "-" + "00" + (my_object.course_number%1000).toString();  // this is a string; + operator concatenates strings
    var string_containing_the_word_subject = "subject";
    my_object[string_containing_the_word_subject] = "robotics"; // not equivalent to my_object.string_containing_the_word_subject = "robotics";

    // typeof can be used to test whether an object is defined
    if (typeof copied_object === 'undefined') {  // if copied_object does not already exist
        console.log(my_object);  // check it out on the console  
        console.log(JSON.stringify(my_object));  // same thing as a string  

        // objects are copied by reference
        copied_object = my_object;
        copied_object.subject = "autonomous_robotics";  // what is my_object.subject on the console?
        // view object at the console prompt, type "copied_object" and press enter
    }

    var empty_array = [];  // this creates an object as an empty array
    my_array = [8, 6, 7, 5, 3, 0, 9]; // this creates a 7-element array
    my_array[6] = 'ni-i-i-ine';  // replace the sixth element with a string

    var i;  // local variable for iterating through array
    for (i=0;i<my_array.length;i++) {
        console.log(my_array[i]);
    }

    // create a text element to display a message
    textbar = document.createElement('div'); // create an empty div element 
    textbar.style.position = 'absolute'; // set element style parameters
    textbar.style.width = window.innerWidth-10;
    textbar.style.height = 20;
    textbar.style.top = 10 + 'px';
    textbar.style.left = 10 + 'px';
    textbar.style["font-family"] = "Monospace";
    //textbar.style.backgroundColor = "black";
    textbar.style.color = "#00ff00";
    //textbar.style.zIndex = 1;    // if you still don't see the textbar, try uncommenting this
    textbar.innerHTML = "autorob.github.io";
    document.body.appendChild(textbar);  // put element into document body

}

function startingPlaceholderAnimate() {

    // this starting point routine is to show how rigid bodies are displayed andtransformed interactively based on user controls

    // in this example, each link of robot will be spaced evenly apart, centered along the x-axis and floating along y-axis using a translation matrix.  additional translational offsets will be controlled interactive through key controls

    // HANDLE USER KEY INTERACTION

    // keyboard is threejs helper for reading keyboard state
    if (keyboard.pressed("x")) {
        textbar.innerHTML = "moving on up";  // make the pieces move up
    // STENCIL: update the vertical offset variable
    }
    else if (keyboard.pressed("z")) {
        textbar.innerHTML = "relax your mind, let your conscience be free";  // stop jittering the pieces
    // STENCIL: update the radius of the jittering
    }
    else if (keyboard.pressed("shift+1")) { 
        textbar.innerHTML = "get a move on";  // increase spacing
    // STENCIL: update the global spacing variable
    }
    else if (keyboard.pressed("1")) {
        textbar.innerHTML = "come together";  // decrease spacing
    // STENCIL: update the global spacing variable
    }
    else {
        // make the pieces jitter, and say something more interesting
        textbar.innerHTML = "Welcome to KinEval. I want to see some text. Can you place a message here?";  // set message text
        vert_offset = 1;
        jitter_radius = 0.2;
    }

    // CREATE TRANSFORMATION MATRIX

    // jsmat is the matrix data structure used to separately transform each 3D object to a specific location in the world
    // we will represent matrices with index notation, such that matrix[row][column] indexes into elements of the matrix
    var jsmat = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1] 
    ];

    // TRANSLATE ROBOT JOINTS

    // jsmat[0][3] corresponds to the x-coordinate of the position for the 3D object
    // Object.key(object) is a rough way to get number of keys in an object, in this case the number of joints in the robot.joints object
    // this offset will perform the centering along the x-axis
    jsmat[0][3] = -Object.keys(robot.joints).length*global_spacing/2;  

    // iterate over each joint of the robot independently, creating a unique translation matrix for each joint, and setting its 3D transform
    for (x in robot.joints) {

        // jsmat[1][3] corresponds to the y-coordinate of the position for the 3D object
        jsmat[1][3] = (vert_offset+1)+Math.random()*jitter_radius;  // the Math object has lots of helpful functions, such as random number generation

        // jsmat[2][3] corresponds to the z-coordinate of the position for the 3D object
        jsmat[2][3] = Math.random()*jitter_radius;

        // add spacing offset for translation of next joint geometry
        jsmat[0][3] += global_spacing;

        // apply matrix to transform
        robot.joints[x].xform = matrix_copy(jsmat);
    } 

    // TRANSLATE ROBOT LINKS

    // iterate over each link of the robot independently
    jsmat[0][3] = -Object.keys(robot.joints).length*global_spacing/2;
    for (x in robot.links) {
        jsmat[1][3] = vert_offset+Math.random()*jitter_radius;
        jsmat[2][3] = Math.random()*jitter_radius;
        jsmat[0][3] += global_spacing;
        robot.links[x].xform = matrix_copy(jsmat);
    } 

} 


