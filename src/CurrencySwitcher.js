import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { AVAILABLE_CURRENCIES } from './constants'

export default function currencySwitcher({ selectedCurrency, onChange }) {
    return (
        <select value={selectedCurrency} onChange={event => onChange(event.target.value)}>
            {
                AVAILABLE_CURRENCIES.map(currency => (
                    <option value={currency} key={currency}>
                        {currency}
                    </option>
                ))
            }
        </select>
    )

}

currencySwitcher.propTypes = {
    onChange: PropTypes.func,
    selectedCurrency: PropTypes.string,
}
