function getFuelCost() {
    document.body.innerHTML = "";

    //Creating prompts to collect miles and gas price from user
    let milesPerYear = Number(prompt("Enter miles you drive per year"));
    let fuelPrice = Number(prompt("Enter the price of gasoline"));

    //Displaying the fuel cost for cars wit different ratings
    document.write(`To drive a car with an MPG rating of 12 for ${milesPerYear} miles at $ ${fuelPrice} per gallon
      it would cost ${annualFuelCost(milesPerYear, fuelPrice, 12)} <br>`);
    document.write(`To drive a car with an MPG rating of 17 for ${milesPerYear} miles at $ ${fuelPrice} per gallon
      it would cost ${annualFuelCost(milesPerYear, fuelPrice, 17)} <br>`);
    document.write(`To drive a car with an MPG rating of 26 for ${milesPerYear} miles at $ ${fuelPrice} per gallon
      it would cost ${annualFuelCost(milesPerYear, fuelPrice, 26)} <br>`);
    document.write(`To drive a car with an MPG rating of 29 for ${milesPerYear} miles at $ ${fuelPrice} per gallon
      it would cost ${annualFuelCost(milesPerYear, fuelPrice, 29)} <br>`);
    document.write("<input type = 'button' value = 'Re-Calculate' onclick = 'getFuelCost()'>")
}

function annualFuelCost(milesPerYear, fuelPrice, milesPerGallon){
    let fuelCost = ((milesPerYear/milesPerGallon) * fuelPrice);
    return fuelCost
}
