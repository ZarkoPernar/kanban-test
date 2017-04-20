import React from 'react'

export default function transactionRow({ data, index, modifier }) {
    return (
        <tr>
            <td key="index">
                {index}
            </td>
            <td key="currency">
                {data.currency}
            </td>
            <td key="amount">
                {data.amount}
            </td>
            <td key="converted">
                {(data.amount / modifier).toFixed(2)}
            </td>
        </tr>
    )
}
