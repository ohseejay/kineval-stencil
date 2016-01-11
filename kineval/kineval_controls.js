
/*-- |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/|

    KinEval | Kinematic Evaluator | update robot state from controls

    Implementation of robot kinematics, control, decision making, and dynamics 
        in HTML5/JavaScript and threejs
     
    @author ohseejay / https://github.com/ohseejay / https://bitbucket.org/ohseejay

    Chad Jenkins
    Laboratory for Perception RObotics and Grounded REasoning Systems
    University of Michigan

    License: Creative Commons 3.0 BY-SA

|\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| |\/| --*/

kineval.applyControls = function robot_apply_controls() {
    // apply robot controls to robot kinematics transforms and joint angles, then zero controls
    // includes update of camera position based on base movement

    // update robot configuration from controls
    for (x in robot.joints) {
        if (isNaN(robot.joints[x].control))
            console.warn("kineval: control value for " + x +" is a nan"); //+robot.joints[x].control);

        // update joint angles
        robot.joints[x].angle += robot.joints[x].control;

        // enforce joint limits
        if (typeof robot.joints[x].type !== 'undefined')
            if ((robot.joints[x].type === 'prismatic')||(robot.joints[x].type === 'revolute')) {
                robot.joints[x].angle = Math.min(Math.max(robot.joints[x].angle,robot.joints[x].limit.lower),robot.joints[x].limit.upper);
             }

        // clear controls back to zero for next timestep
        robot.joints[x].control = 0;
    }

    // base motion
    robot.origin.xyz[0] += robot.control.xyz[0];
    robot.origin.xyz[1] += robot.control.xyz[1];
    robot.origin.xyz[2] += robot.control.xyz[2];
    robot.origin.rpy[0] += robot.control.rpy[0];
    robot.origin.rpy[1] += robot.control.rpy[1];
    robot.origin.rpy[2] += robot.control.rpy[2];

    // move camera with robot base
    camera_controls.object.position.x += robot.control.xyz[0];
    camera_controls.object.position.y += robot.control.xyz[1];
    camera_controls.object.position.z += robot.control.xyz[2];

    // zero controls now that they have been applied to robot
    robot.control = {xyz: [0,0,0], rpy:[0,0,0]}; 
}

