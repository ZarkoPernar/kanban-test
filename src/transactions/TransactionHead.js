import React from 'react'

export default function transactionHead({ currency }) {
    return (
        <thead>
            <tr>
                <th key="index" />
                <th key="currency">
                    Currency
                </th>
                <th key="amount">
                    Amount
                </th>

                <th key="convert-to">
                    {currency}
                </th>
            </tr>
        </thead>
    )
}
