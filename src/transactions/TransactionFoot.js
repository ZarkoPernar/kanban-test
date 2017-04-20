import React from 'react'

import getTransactionsTotal from '../utils/getTransactionsTotal'

export default function transactionFoot({ transactions, rates }) {
    return (
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
                            getTransactionsTotal(transactions, rates)
                        }
                    </strong>
                </td>
            </tr>
        </tfoot>
    )
}
