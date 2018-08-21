// console
~(function() {
    var methods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'dirxml', 'table', 'trace', 'assert', 'count', 'markTimeline', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp', 'timeline', 'timelineEnd', 'group', 'groupCollapsed', 'groupEnd', 'clear'];
    var length = methods.length;
    window.console = window.console || {};
    window.log = console.log;

    while (length--) {
        console[methods[length]] = console[methods[length]] || function() {};
    }
})()
