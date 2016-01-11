
kineval.initrosbridge = function init_rosbridge() {

// KE 2 : add this to kineval object
ros = new ROSLIB.Ros({
    url : 'ws://fetch7:9090'
}); 

ros.on('connection', function() {
    console.log('kineval: roslib: connect to websocket server.');
});

ros.on('error', function(error) {
    console.log('kineval: roslib: error connecting to websocket server', error);
});

ros.on('close', function() {
    console.log('kineval: roslib: connection to websocket server closed.');
});

//KE : add this to kineval object
listener = new ROSLIB.Topic({
    ros : ros,
    name : '/joint_states_throttle',
    messageType : 'sensor_msgs/JointState'
}); 
    // run topic throttling on ros backend
    // rosrun topic_tools throttle joint_states 2
    //name : '/joint_states',

listener.subscribe(function(message) {
    for (var i=0;i<message.name.length;i++) {
        if (typeof robot.joints[message.name[i]] !== 'undefined')
            robot.joints[message.name[i]].angle = message.position[i];
            console.log('kineval: roslib: set '+message.name[i]+' to '+message.position[i]);
    }
    console.log('kineval: roslib: new message at '+message.header.stamp.secs+'.'+message.header.stamp.nsecs);
});

}
