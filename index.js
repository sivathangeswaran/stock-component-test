// An Container Module for Components 
var platformModule = angular.module("platformModule", ["ui.router", "dms-package-tpls"]);

// Inject all Component modules
platformModule.requires.push("stockModule");

