// Widget Entry file
require('./stock.template.html');

//Component controller
var StockController = [function() {
    this.title = "Widget 1 in Javascript"
}]

// Widget component
var StockComponent = { controller: StockController, templateUrl: "components/stock/stock.template.html" }

// Creating widget module and registering widget component
angular.module("stockModule", []).component("stockWidget", StockComponent)
