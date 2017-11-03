/////////// CODING CHALLENGE ///////////
/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
A. For parks:
    1. Tree density of each park in the town (formula: number of trees/park area) - DONE
    2. Average age of each town's park (formula: sum of all ages/number of parks)
    3. The name of the park that has more than 1000 trees

B. For streets:
    4. Total and average length of the town's streets
    5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal - DONE

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.
*/

class townElements {
    constructor (name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }
}

class Park extends townElements {
    constructor (name, yearBuilt, trees, parkArea) {
        super(name, yearBuilt);
        this.trees = trees;
        this.parkArea = parkArea;
    }
    treeDensity() {
        console.log(`${this.name} has a tree density of ${this.trees/this.parkArea} trees per square km.`);
    }
}

class Street extends townElements {
    constructor (name, yearBuilt, length, size = 3) {
        super(name, yearBuilt);
        this.streetLength = streetLength;
        this.streetSize = streetSize;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
    }
}

