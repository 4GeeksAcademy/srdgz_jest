describe('sum', () => {
test('adds 14 + 9 to equal 23', () => {
    const { sum, oneEuroIs } = require('./app.js');

    let total = sum(14,9);
    expect(total).toBe(23);
})
});


describe('conversion', () => {
    const { oneEuroIs } = require('./app.js');
    const ratioDollarYen = oneEuroIs.JPY / oneEuroIs.USD;
    const ratioYenPound =  oneEuroIs.GBP / oneEuroIs.JPY;

    test(`One euro should be ${oneEuroIs.USD} dollars`, function(){
    // importo la funcion desde app.js
        const { fromEuroToDollar } = require('./app.js')
        const euroToCover = 3.5;
        const totalDollar = euroToCover * oneEuroIs.USD;
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(euroToCover)).toBe(totalDollar); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    })

    test(`One dollar should be ${ratioDollarYen} yenes`, function(){
        // importo la funcion desde app.js
        const { fromDollarToYen } = require('./app.js')
        const dollarToConver = 3.5;
        const totalYenes = dollarToConver * ratioDollarYen;
        
        // hago mi comparacion (la prueba)
        expect(fromDollarToYen(dollarToConver)).toBe(totalYenes); 
    })

    test(`One yen should be ${ratioYenPound} pounds`, function(){
        // importo la funcion desde app.js
        const { fromYenToPound } = require('./app.js')
        const yenToConver = 3.5;
        const totalPound = yenToConver * ratioYenPound;
        
        // hago mi comparacion (la prueba)
        expect(fromYenToPound(yenToConver)).toBe(totalPound); 
    })
})