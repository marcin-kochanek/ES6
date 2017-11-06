'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/////////// CODING CHALLENGE ///////////
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
A. For parks:
    1. Tree density of each park in the town (formula: number of trees/park area) - DONE
    2. Average age of all parks (formula: sum of all ages/number of parks)
    3. The name of the park that has more than 1000 trees

B. For streets:
    4. Total and average length of the town's streets
    5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal - DONE

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

var townElements = function townElements(name, yearBuilt) {
    _classCallCheck(this, townElements);

    this.name = name;
    this.yearBuilt = yearBuilt;
};

var Park = function (_townElements) {
    _inherits(Park, _townElements);

    function Park(name, yearBuilt, parkArea, trees) {
        _classCallCheck(this, Park);

        var _this = _possibleConstructorReturn(this, (Park.__proto__ || Object.getPrototypeOf(Park)).call(this, name, yearBuilt));

        _this.parkArea = parkArea;
        _this.trees = trees;
        return _this;
    }

    _createClass(Park, [{
        key: 'treeDensity',
        value: function treeDensity() {
            var density = (this.trees / this.parkArea).toFixed(2);
            console.log(this.name + ' has a tree density of ' + density + ' trees per square km.');
        }
    }]);

    return Park;
}(townElements);

var Street = function (_townElements2) {
    _inherits(Street, _townElements2);

    function Street(name, yearBuilt, length) {
        var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3;

        _classCallCheck(this, Street);

        var _this2 = _possibleConstructorReturn(this, (Street.__proto__ || Object.getPrototypeOf(Street)).call(this, name, yearBuilt));

        _this2.length = length;
        _this2.size = size;
        return _this2;
    }

    _createClass(Street, [{
        key: 'classifyStreetSize',
        value: function classifyStreetSize() {
            var classification = new Map();

            classification.set(1, 'tiny');
            classification.set(2, 'small');
            classification.set(3, 'normal');
            classification.set(4, 'big');
            classification.set(5, 'huge');

            var sizeName = classification.get(this.size);
            console.log(this.name + ', built in ' + this.yearBuilt + ', is a ' + sizeName + ' street.');
        }
    }]);

    return Street;
}(townElements);

var allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];

var allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('4th Street', 2015, 0.8), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function reportParks(parksArray) {
    console.log('-----PARKS REPORT-----');

    // Tree density of each park in the town
    parksArray.forEach(function (current) {
        return current.treeDensity();
    });

    // The name of the park that has more than 1000 trees
    var index = parksArray.map(function (current) {
        return current.trees;
    }).findIndex(function (current) {
        return current > 1000;
    });
    console.log('Moreover, this park (' + parksArray[index].name + ') has more than 1000 trees.');

    // An average age of each town's park
    var ages = parksArray.map(function (current) {
        return new Date().getFullYear() - current.yearBuilt;
    });
    var sum = ages.reduce(function (total, current) {
        return total + current;
    });
    var averageAge = (sum / ages.length).toFixed(2);

    console.log('Our all ' + ages.length + ' parks have an average age of ' + averageAge + ' years.');
}

function reportStreets(streetsArray) {
    console.log('-----STREETS REPORT-----');

    // Size classification of all streets
    streetsArray.forEach(function (current) {
        return current.classifyStreetSize();
    });

    // Total and average length of the town's streets
    var sum = streetsArray.map(function (current) {
        return current.length;
    }).reduce(function (current, total) {
        return current + total;
    });
    var averageLength = (sum / streetsArray.length).toFixed(2);

    console.log('Our ' + streetsArray.length + ' streets have a total length of ' + sum.toFixed(2) + ' km, with an average of ' + averageLength + ' km.');
}

reportParks(allParks);
reportStreets(allStreets);
