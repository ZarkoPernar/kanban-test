import React, { Component } from 'react'
import PropTypes from 'prop-types'
import unique from 'array-unique'

import TransactionRow from './TransactionRow'

class Transactions extends Component {
    render() {
        return (
            <div>
                <table key="table" className="table">
                    <thead key="head">
                        <tr>
                            <th key="index" />
                            <th key="currency">
                                Currency
                            </th>
                            <th key="amount">
                                Amount
                            </th>

                            <th key="convert-to">
                                {this.props.currency}
                            </th>
                        </tr>
                    </thead>

                    <tbody key="body">
                        {
                            this.props.transactions.map((ts, i) => {
                                return <TransactionRow key={ts.currency + '-' + ts.amount} index={i + 1} data={ts} modifier={this.props.rates[ts.currency] || 1} />
                            })
                        }
                    </tbody>

                    <tfoot>
                        <tr>
                            <td key="index">
                            </td>
                            <td key="currency">
                            </td>
                            <td key="amount">
                                <strong>Total: </strong>
                            </td>

                            <td key="convert-to">
                                <strong>
                                    {
                                        this.props.transactions.reduce((total, item) => {
                                            return total + (item.amount / (this.props.rates[item.currency] || 1))
                                        }, 0).toFixed(2)
                                    }
                                </strong>
                            </td>
                        </tr>
                    </tfoot>


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
