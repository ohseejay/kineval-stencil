
    // set rectangular boundary of robot's world as min and max locations
    // collision only checked in x-z plane
    //robot_boundary = [[-2,0,-10],[10,0,2]];
    robot_boundary = [[-1,0,-10],[9,0,2]];

    wall1_x = 2;
    wall2_x = 5;
    // set spherical obstacles in robot's world
    // with locations specified in homogeneous coordinates as 2D array
    robot_obstacles = []; 

    robot_obstacles[0] = {location:[[wall1_x],[0.5],[0],[1]], radius:0.5}; 
    robot_obstacles[1] = {location:[[wall1_x],[0.5],[-1],[1]], radius:0.5}; 
    robot_obstacles[2] = {location:[[wall1_x],[0.5],[-2],[1]], radius:0.5}; 
    robot_obstacles[3] = {location:[[wall1_x],[0.5],[-3],[1]], radius:0.5}; 
    robot_obstacles[4] = {location:[[wall1_x],[0.5],[-4],[1]], radius:0.5}; 
    robot_obstacles[5] = {location:[[wall1_x],[0.5],[-5],[1]], radius:0.5}; 
    robot_obstacles[6] = {location:[[wall1_x],[0.5],[-6],[1]], radius:0.5}; 
    robot_obstacles[7] = {location:[[wall1_x],[0.5],[-7],[1]], radius:0.5}; 
    robot_obstacles[8] = {location:[[wall1_x],[0.5],[-8],[1]], radius:0.5}; 
    robot_obstacles[9] = {location:[[wall1_x],[0.5],[1],[1]], radius:0.5}; 
    robot_obstacles[10] = {location:[[wall1_x],[0.5],[2],[1]], radius:0.5}; 
    //robot_obstacles[21] = {location:[[-2],[0.5],[2],[1]], radius:0.5}; 

    robot_obstacles[11] = {location:[[wall2_x],[0.5],[0],[1]], radius:0.5}; 
    robot_obstacles[12] = {location:[[wall2_x],[0.5],[-1],[1]], radius:0.5}; 
    robot_obstacles[13] = {location:[[wall2_x],[0.5],[-2],[1]], radius:0.5}; 
    robot_obstacles[14] = {location:[[wall2_x],[0.5],[-3],[1]], radius:0.5}; 
    robot_obstacles[15] = {location:[[wall2_x],[0.5],[-4],[1]], radius:0.5}; 
    robot_obstacles[16] = {location:[[wall2_x],[0.5],[-5],[1]], radius:0.5}; 
    robot_obstacles[17] = {location:[[wall2_x],[0.5],[-6],[1]], radius:0.5}; 
    robot_obstacles[18] = {location:[[wall2_x],[0.5],[-7],[1]], radius:0.5}; 
    robot_obstacles[19] = {location:[[wall2_x],[0.5],[-8],[1]], radius:0.5}; 
    robot_obstacles[20] = {location:[[wall2_x],[0.5],[-9],[1]], radius:0.5}; 
    robot_obstacles[21] = {location:[[wall2_x],[0.5],[-10],[1]], radius:0.5}; 

    robot_obstacles[22] = {location:[[wall1_x],[1.5],[0],[1]], radius:0.5}; 
    robot_obstacles[23] = {location:[[wall1_x],[1.5],[-1],[1]], radius:0.5}; 
    robot_obstacles[24] = {location:[[wall1_x],[1.5],[-2],[1]], radius:0.5}; 
    robot_obstacles[25] = {location:[[wall1_x],[1.5],[-3],[1]], radius:0.5}; 
    robot_obstacles[26] = {location:[[wall1_x],[1.5],[-4],[1]], radius:0.5}; 
    robot_obstacles[27] = {location:[[wall1_x],[1.5],[-5],[1]], radius:0.5}; 
    robot_obstacles[28] = {location:[[wall1_x],[1.5],[-6],[1]], radius:0.5}; 
    robot_obstacles[29] = {location:[[wall1_x],[1.5],[-7],[1]], radius:0.5}; 
    robot_obstacles[30] = {location:[[wall1_x],[1.5],[-8],[1]], radius:0.5}; 
    robot_obstacles[31] = {location:[[wall1_x],[1.5],[1],[1]], radius:0.5}; 
    robot_obstacles[32] = {location:[[wall1_x],[1.5],[2],[1]], radius:0.5}; 

    robot_obstacles[33] = {location:[[wall2_x],[1.5],[0],[1]], radius:0.5}; 
    robot_obstacles[34] = {location:[[wall2_x],[1.5],[-1],[1]], radius:0.5}; 
    robot_obstacles[35] = {location:[[wall2_x],[1.5],[-2],[1]], radius:0.5}; 
    robot_obstacles[36] = {location:[[wall2_x],[1.5],[-3],[1]], radius:0.5}; 
    robot_obstacles[37] = {location:[[wall2_x],[1.5],[-4],[1]], radius:0.5}; 
    robot_obstacles[38] = {location:[[wall2_x],[1.5],[-5],[1]], radius:0.5}; 
    robot_obstacles[39] = {location:[[wall2_x],[1.5],[-6],[1]], radius:0.5}; 
    robot_obstacles[40] = {location:[[wall2_x],[1.5],[-7],[1]], radius:0.5}; 
    robot_obstacles[41] = {location:[[wall2_x],[1.5],[-8],[1]], radius:0.5}; 
    robot_obstacles[42] = {location:[[wall2_x],[1.5],[-9],[1]], radius:0.5}; 
    robot_obstacles[43] = {location:[[wall2_x],[1.5],[-10],[1]], radius:0.5}; 

    // obstacles near boundaries to force arm upright
    robot_obstacles[44] = {location:[[wall1_x],[0.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[45] = {location:[[wall1_x],[1.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[46] = {location:[[wall2_x],[0.5],[2.5],[1]], radius:0.5}; 
    robot_obstacles[47] = {location:[[wall2_x],[1.5],[2.5],[1]], radius:0.5}; 
/*
    robot_obstacles[48] = {location:[[wall1_x+1],[0.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[49] = {location:[[wall1_x+1],[1.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[50] = {location:[[wall1_x+2],[0.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[51] = {location:[[wall1_x+2],[1.5],[-10.5],[1]], radius:0.5}; 
    robot_obstacles[52] = {location:[[wall2_x-1],[0.5],[2.5],[1]], radius:0.5}; 
    robot_obstacles[53] = {location:[[wall2_x-1],[1.5],[2.5],[1]], radius:0.5}; 
    robot_obstacles[54] = {location:[[wall2_x-2],[0.5],[2.5],[1]], radius:0.5}; 
    robot_obstacles[55] = {location:[[wall2_x-2],[1.5],[2.5],[1]], radius:0.5}; 
*/
