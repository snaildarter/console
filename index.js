~(function() {
    if (!window.console) {
        var methods = ['debug', 'error', 'info', 'log', 'warn', 'dir', 'dirxml', 'table', 'trace', 'assert', 'count', 'markTimeline', 'profile', 'profileEnd', 'time', 'timeEnd', 'timeStamp', 'timeline', 'timelineEnd', 'group', 'groupCollapsed', 'groupEnd', 'clear'];
        var length = methods.length;
        var console = {};
        
        while (length--) {
            console[methods[length]] = console[methods[length]] || function() {};
        }
        window.console = console;
    }
    
    window.log = console.log; // 项目中使用方便打印
})();
