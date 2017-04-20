
export default function getTransactionsTotal(transactions, rates) {
    return transactions.reduce((total, item) => {
        return total + (item.amount / (rates[item.currency] || 1))
    }, 0).toFixed(2)
}
