angularjs-interpolate-interceptor
==================
[![Build Status](https://travis-ci.org/pussinboots/angularjs-interpolate-interceptor.svg?branch=master)](https://travis-ci.org/pussinboots/angularjs-interpolate-interceptor)
[![Coverage Status](https://img.shields.io/coveralls/pussinboots/angularjs-interpolate-interceptor.svg)](https://coveralls.io/r/pussinboots/angularjs-interpolate-interceptor?branch=master)
[![Dependencies](https://david-dm.org/pussinboots/angularjs-interpolate-interceptor.png)](https://david-dm.org/pussinboots/angularjs-interpolate-interceptor)

 
AngularJS Module to define dynamic variables in ngResource defintion like familiar with in templates. Its has the same bracket syntax for exampel {{config.value}} could also be used in the ngResource url definition and will be replaced with the correspondant value when the request is performed.

Continous Integration
------------
* [travis](https://travis-ci.org/pussinboots/angularjs-interpolate-interceptor)

Dependencies
------------
- [AngularJS 1.1.4 + ](http://angularjs.org/) (tested with 1.1.4)

##Usage

* download [js file](https://github.com/pussinboots/angularjs-interpolate-interceptor/blob/master/public/js/lib/angularjs-interpolate-interceptor.js)
* added javascript file to your app html file
```html
<script type='text/javascript' src="angularjs-interpolate-interceptor.js"></script>
```
* add module to the app.js and register interpolateInterceptor as http interceptor

```js
var appModule = angular.module('app', ['angularjs-interpolate-interceptor'])
appModule.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('interpolateInterceptor');
}])
```

That done. Now you can use the angularjs bracket syntax to define variables in the nrResource service url definition. For example

```js
angular.module('Services', ['ngResource'], function ($provide) {
    $provide.factory('ServiceA', function ($resource, $rootScope) {
        var resource = $resource('/{{config.valuea}}/', {}, {
            get: {method: 'GET', params: {}},
        });
        return resource;
    });
});
```

The variable {{config.valuea}}

```js
var resource = $resource('/{{config.valuea}}/', {}, {
```

Issues
-------------
- Report at the github [issue tracker](https://github.com/pussinboots/angularjs-interpolate-interceptor/issues)

Todos
-------------
* at the moment the variable is hardcoded with name config and has to be registered on the $rootScope make it configurable 
```js
request: function (config) {
    var exp = $interpolate(config.url);
    config.url  = exp({config: $rootScope.config})
    return config;
}
```

Features
-------------
* support variable in url of ngResource service definition

Configuration
-------------

missing

##Example

#### Simple Variable Example

Define on the $rootScope the config object amd use it on the service defintion like

```js
appModule.run(function ($rootScope) {
	$rootScope.config = {valuea:'test', valueb:'prod'}
});

angular.module('Services', ['ngResource'], function ($provide) {
    $provide.factory('ServiceA', function ($resource, $rootScope) {
        var resource = $resource('/{{config.valuea}}/', {}, {
            get: {method: 'GET', params: {}},
        });
        return resource;
    });
});
```

Demo
-------------

live
------

[Variable Example](http://angularjs-ii.herokuapp.com/products-e2e.html)

local
------

Two ways to run the demo app local one with play or second with nodejs.

Dependencies
* play 2.2.3 (optional)
* nodejs 0.10.28
* (karma-test runner)[http://karma-runner.github.io/0.12/intro/installation.html]

Start it with play

    play run
    
Then go to
* [Variable Example](http://localhost:9000/products-e2e.html)

Start it with nodejs

    node server.js
    

Then go to
* [Variable Example](http://localhost:9000/products-e2e.html)

Or run the karma test local with 

  npm test

Description
-------------

The motivation is to support dynamic variables for ngResource service defintion to change urls at runtime for example or to inject global variables. Maybe it could also be used to minimize the controller logic to only bind data for the view and the service defined which variable he need for his request. It is a young project and started as proof of concept maybe they can support other uise case. Feel free to try and develop it to support your needs. Questions, thanks, ideas contact me.

License
--------------

angularjs-interpolate-interceptor is released under the [MIT License](http://opensource.org/licenses/MIT).
