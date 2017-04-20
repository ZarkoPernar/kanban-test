
import getTransactionsTotal from './getTransactionsTotal'

let transactions = [
    {
        currency: 'CHF',
        amount: 123.11
    },
    {
        currency: 'USD',
        amount: 754
    }
]
let rates = {
    CHF: .89,
    USD: 1.2
}

describe('getTransactionsTotal', function() {

    test('should return a string', function() {
        let actualResult = getTransactionsTotal(transactions, rates)

        expect(typeof actualResult).toEqual('string')
    })

    test('should return correct result', function() {
        let expectedResult = '766.66'
        let actualResult = getTransactionsTotal(transactions, rates)

        expect(expectedResult).toEqual(actualResult)
    })


})
