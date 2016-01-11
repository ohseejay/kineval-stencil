
KinEval
=======

The Kinematic Evaluator (KinEval) is a package containing a collection of HTML5/Javascript implementations for teaching robot kinematics, control, decision making, and dynamics.

To see kineval in action, open home.html in a web browser.  Firefox 29.0 through 41.0 works for sure.  Chrome and Opera will throw security errors when loading local files from JavaScript (which feels like forcing people into the cloud).  One method around this issue is to serve home.html from a web server.  If python is available on your system, this can be done by running python's SimpleHTTPServer: 

python -m SimpleHTTPServer

and loading the file from the following URL:

http://localhost:8000/home.html

## Stencil markers

This code stencil contains "STENCIL" markers throughout the code to highlight where various features and functions need to be implemented.

## Controls (approximate description):

- T - toggle starting point mode
- Z/X - camera zoom in/out
- W/A/S/D - move forward/backward and turn right/left
- Q/R - strafe left right
- U/I - control current joint to rotate forward/backward
- H/J/K/L - switch control to parent/child/sibling joint
- C - servo all joints to current setpoint
- O - servo all joints based on seconds of the system clock
- Shift+1-9 - assign current pose to a pose setpoint
- 1-9 - assign a pose setpoint to current setpoint target
- G - print pose setpoints to console
- P - perform inverse kinematics iteration (hold down for continual motion)
- R/F - move inverse kinematics target up/down
- M - execute RRT planner
- N/B - set robot configuration to next/previous configuration in generated RRT plan
- H - toggle gui command widget
- V - print commands to screen

## Robots and Worlds:

The subdirectories "robots" and "worlds" contains descriptions of various robots and worlds as js files that can be used with KinEval.  These robots and worlds can be included by including the appropriate js files in home.html.  For example:

<script src="robots/robot_br2.js"></script> 
<script src="worlds/world_local_minima.js"></script> 

## Sub-Projects

This project also includes sub-projects for:

### Pendularm 1 DOF pendulum simulation with servo control

Open pendulum/pendularm.html in a browser.  Pendulum will servo to a set desired angle by default.

### 2D RRT planner

Open rrt/rrt_canvas.html in a browser.  Planner will execute automatically upon page load.  Other worlds can be used through uncomment/commenting lines in set_planning_scene().

