import React, { Component } from 'react'
import PropTypes from 'prop-types'
import unique from 'array-unique'

import TransactionHead from './TransactionHead'
import TransactionFoot from './TransactionFoot'
import TransactionRow from './TransactionRow'

class Transactions extends Component {
    render() {
        return (
            <div>
                <table key="table" className="table">
                    <TransactionHead key="head" currency={this.props.currency} />

                    <tbody key="body">
                        {
                            this.props.transactions.map((ts, i) => (
                                <TransactionRow
                                    key={ts.currency + '-' + ts.amount}
                                    index={i + 1} data={ts}
                                    modifier={this.props.rates[ts.currency] || 1} />
                            ))
                        }
                    </tbody>

                    <TransactionFoot rates={this.props.rates} transactions={this.props.transactions} />

                </table>

                <div key="bottom">
                    <div key="currency">
                        <strong>
                            List of converted currencies:
                        </strong>
                    </div>
                    <div key="amount">
                        {
                            unique(
                                this.props.transactions.map(ts => ts.currency)
                            ).join(', ')
                        }
                    </div>
                </div>
            </div>
        )
    }
}

Transactions.propTypes = {
    currency: PropTypes.string,
    rates: PropTypes.object,
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            currency: PropTypes.string,
            amount: PropTypes.number
        })
    )
}

export default Transactions
