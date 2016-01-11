//   CREATE ROBOT STRUCTURE

//////////////////////////////////////////////////
/////     DEFINE ROBOT AND LINKS
//////////////////////////////////////////////////

// create robot data object
robot = new Object(); // or just {} will create new object

// give the robot a name
robot.name = "br2";

// initialize start pose of robot in the world
robot.origin = {xyz: [0,0,0], rpy:[0,0,0]};  

// specify base link of the robot; robot.origin is transform of world to the robot base
robot.base = "base";  

        
// specify and create data objects for the links of the robot
robot.links = {
    "base": {},  
    "shin_right": {}, 
    "shin_left": {} , 
    "thigh_right": {}, 
    "thigh_left": {}, 
    "waist": {} 
};
/* for you to do
, "shoulder_left": {}  , "upperarm_left": {} , "forearm_left": {} };
*/


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

robot.joints.ankle_right = {parent:"base", child:"shin_right"};
robot.joints.ankle_right.origin = {xyz: [0,0.4,-.2], rpy:[-Math.PI/2,0,0]};
robot.joints.ankle_right.axis = [0.0,0.0,-1.0]; 

robot.joints.knee_right = {parent:"shin_right", child:"thigh_right"};
robot.joints.knee_right.origin = {xyz: [0.0,0,0.85], rpy:[0,0,Math.PI/2]};
robot.joints.knee_right.axis = [0.0,0.707,0.707]; 

robot.joints.hip_right = {parent:"thigh_right", child:"waist"};
robot.joints.hip_right.origin = {xyz: [0.0,0.0,0.7], rpy:[0,0,0]};
robot.joints.hip_right.axis = [0.0,1.0,0.0]; 

robot.joints.hip_left = {parent:"waist", child:"thigh_left"};
robot.joints.hip_left.origin = {xyz: [0.0,-0.6,0], rpy:[Math.PI,0,0]};
robot.joints.hip_left.axis = [1.0,0.0,0.0]; 
//alert(robot.joints.shoulder_right_yaw.origin.rpy[0]);
robot.joints.knee_left = {parent:"thigh_left", child:"shin_left"};
robot.joints.knee_left.origin = {xyz: [-0.3,0.4,0.0], rpy:[-Math.PI/2,1,0]};
robot.joints.knee_left.axis = [0.0,0.0,1.0]; 

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

links_geom["base"] = new THREE.CubeGeometry( .5, .3, .8 );
links_geom["base"].applyMatrix( new THREE.Matrix4().makeTranslation(0, .2, 0) );

links_geom["shin_right"] = new THREE.CubeGeometry( 0.3, 0.3, 1 );
links_geom["shin_right"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.5) );

links_geom["thigh_right"] = new THREE.CubeGeometry( 0.3, 0.3, .7 );
links_geom["thigh_right"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.5) );

links_geom["waist"] = new THREE.CubeGeometry( .4, 1, .4 );
links_geom["waist"].applyMatrix( new THREE.Matrix4().makeTranslation(0, -.3, 0.35) );

links_geom["thigh_left"] = new THREE.CubeGeometry( 0.3, 0.3, 0.7 );
links_geom["thigh_left"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.35) );

links_geom["shin_left"] = new THREE.CubeGeometry( 0.3, 0.3, 0.5 );
links_geom["shin_left"].applyMatrix( new THREE.Matrix4().makeTranslation(0, 0, 0.25) );

