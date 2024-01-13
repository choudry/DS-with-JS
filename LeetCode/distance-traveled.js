/**
 * A truck has two fuel tanks. You are given two integers, 
 * mainTank representing the fuel present in the main tank 
 * in liters and additionalTank representing the fuel 
 * present in the additional tank in liters.

 * The truck has a mileage of 10 km per liter. Whenever 5 liters 
 * of fuel get used up in the main tank, if the additional tank 
 * has at least 1 liters of fuel, 1 liters of fuel will be 
 * transferred from the additional tank to the main tank.
 */

/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    if (mainTank < 5) return mainTank * 10;    
    if (additionalTank > 0) {
        additionalTank--
        return 50 + distanceTraveled(mainTank - 4, additionalTank);
    } else {
        return 50 + distanceTraveled(mainTank - 5, additionalTank);
    }
};

console.log(distanceTraveled(14, 1));