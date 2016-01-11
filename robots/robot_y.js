//   CREATE ROBOT STRUCTURE

//////////////////////////////////////////////////
/////     DEFINE ROBOT AND LINKS
//////////////////////////////////////////////////

// create robot data object
robot = new Object(); // or just {} will create new object

// give the robot a name
robot.name = "y";

// initialize start pose of robot in the world
robot.origin = {xyz: [0,0,0], rpy:[0,0,0]};  

// specify base link of the robot; robot.origin is transform of world to the robot base
robot.base = "base";  

        
// specify and create data objects for the links of the robot
robot.links = {
    "base": {},  
    "clavicle_right": {}, 
    "clavicle_left": {} , 
    "clavicle_front": {}, 
    "clavicle_back": {} , 
};


//////////////////////////////////////////////////
/////     DEFINE JOINTS AND KINEMATIC HIERARCHY
//////////////////////////////////////////////////

/*      joint definition template
        // specify parent/inboard link and child/outboard link
        robot.joints.joint1 = {parent:"link1", child:"link2"};
        // joint origin's offset transform from parent link origin
        robot.joints.joint1.origin = {xyz: [5,3,0], rpy:[0,0,0]}; 
        // joint rotation axis
        robot.joints.joint1.axis = [0.0,0.0,1.0]; 
*/


// roll-pitch-yaw defined by ROS as corresponding to x-y-z 
//http://wiki.ros.org/urdf/Tutorials/Create%20your%20own%20urdf%20file

// specify and create data objects for the joints of the robot
robot.joints = {};

robot.joints.clavicle_right_joint = {parent:"base", child:"clavicle_right"};
robot.joints.clavicle_right_joint.origin = {xyz: [0.5,1.7,0.0], rpy:[-Math.PI/2,0,0]};
robot.joints.clavicle_right_joint.axis = [0.0,-1.0,0.0]; 

robot.joints.clavicle_left_joint = {parent:"base", child:"clavicle_left"};
robot.joints.clavicle_left_joint.origin = {xyz: [-0.5,1.7,0.0], rpy:[-Math.PI/2,0,0]};
robot.joints.clavicle_left_joint.axis = [0.0,1.0,0.0]; 

robot.joints.clavicle_front_joint = {parent:"base", child:"clavicle_front"};
robot.joints.clavicle_front_joint.origin = {xyz: [0.0,1.7,0.5], rpy:[-Math.PI/2,Math.PI/2,0]};
robot.joints.clavicle_front_joint.axis = [0.0,-1.0,0.0]; 

robot.joints.clavicle_back_joint = {parent:"base", child:"clavicle_back"};
robot.joints.clavicle_back_joint.origin = {xyz: [0.0,1.7,-0.5], rpy:[-Math.PI/2,Math.PI/2,0]};
robot.joints.clavicle_back_joint.axis = [0.0,1.0,0.0]; 

//////////////////////////////////////////////////
/////     DEFINE LINK threejs GEOMETRIES
//////////////////////////////////////////////////

/*  threejs geometry definition template, will be used by THREE.Mesh() to create threejs object
    // create threejs geometry and insert into links_geom data object
    links_geom["link1"] = new THREE.CubeGeometry( 5+2, 2, 2 );

    // example of translating geometry (in object space)
    links_geom["link1"].applyMatrix( new THREE.Matrix4().makeTranslation(5/2, 0, 0) );

    // example of rotating geometry 45 degrees about y-axis (in object space)
    var temp3axis = new THREE.Vector3(0,1,0);
    links_geom["link1"].rotateOnAxis(temp3axis,Math.PI/4);
*/

// define threejs geometries and associate with robot links 
links_geom = {};

//*links_geom["base"] = new THREE.CubeGeometry( 1, 2.0, 2 );
links_geom["base"] = new THREE.CubeGeometry( 1, 2, 1.0 );
links_geom["base"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 1.0, 0) );

//**links_geom["clavicle_right"] = new THREE.CubeGeometry( 0.3, 2.0, 2.0 );
//**links_geom["clavicle_right"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.5) );

//links_geom["clavicle_right"] = new THREE.CubeGeometry( 0.3, 2.0, 3.0 );
links_geom["clavicle_right"] = new THREE.CubeGeometry( 0.3, 0.3, 3.0 );
links_geom["clavicle_right"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );

//**links_geom["clavicle_left"] = new THREE.CubeGeometry( 0.3, 2.0, 2.0 );
//**links_geom["clavicle_left"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.5) );

//links_geom["clavicle_left"] = new THREE.CubeGeometry( 0.3, 2.0, 3.0 );
links_geom["clavicle_left"] = new THREE.CubeGeometry( 0.3, 0.3, 3.0 );
links_geom["clavicle_left"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );

links_geom["clavicle_front"] = new THREE.CubeGeometry( 0.3, 0.3, 3.0 );
links_geom["clavicle_front"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );
links_geom["clavicle_back"] = new THREE.CubeGeometry( 0.3, 0.3, 3.0 );
links_geom["clavicle_back"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0) );
