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

class townElements {
    constructor (name, yearBuilt) {
        this.name = name;
        this.yearBuilt = yearBuilt;
    }
}

class Park extends townElements {
    constructor (name, yearBuilt, parkArea, trees) {
        super(name, yearBuilt);
        this.parkArea = parkArea;
        this.trees = trees;
    }
    treeDensity() {
        const density = (this.trees/this.parkArea).toFixed(2);
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends townElements {
    constructor (name, yearBuilt, length, size = 3) {
        super(name, yearBuilt);
        this.length = length;
        this.size = size;
    }
    classifyStreetSize() {
        const classification = new Map();
        
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        
        const sizeName = classification.get(this.size);
        console.log(`${this.name}, built in ${this.yearBuilt}, is a ${sizeName} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), 
                  new Park('National Park', 1894, 2.9, 3541), 
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), 
                    new Street('Evergreen Street', 2008, 2.7, 2), 
                    new Street('4th Street', 2015, 0.8), 
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function reportParks(parksArray) {
    console.log('-----PARKS REPORT-----');
    
    // Tree density of each park in the town
    parksArray.forEach(current => current.treeDensity());
                       
    // The name of the park that has more than 1000 trees
    const index = parksArray.map(current => current.trees).findIndex(current => current > 1000);
    console.log(`Moreover, this park (${parksArray[index].name}) has more than 1000 trees.`);
    
    // An average age of each town's park
    const ages = parksArray.map(current => new Date().getFullYear() - current.yearBuilt);
    const sum = ages.reduce((total, current) => total + current);
    const averageAge = (sum/(ages.length)).toFixed(2);
    
    console.log(`Our all ${ages.length} parks have an average age of ${averageAge} years.`);
}

function reportStreets(streetsArray) {
    console.log('-----STREETS REPORT-----');
    
    // Size classification of all streets
    streetsArray.forEach(current => current.classifyStreetSize());
    
    // Total and average length of the town's streets
    const sum = streetsArray.map(current => current.length).reduce((current, total) => current + total);
    const averageLength = (sum/streetsArray.length).toFixed(2)
 
    console.log(`Our ${streetsArray.length} streets have a total length of ${sum.toFixed(2)} km, with an average of ${averageLength} km.`);
}

reportParks(allParks);
reportStreets(allStreets);