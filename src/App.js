import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import currencyService from './currencyService'
import FileUpload from './file-upload/FileUpload'
import Transactions from './transactions/Transactions'
import CurrencySwitcher from './CurrencySwitcher'

import 'react-datepicker/dist/react-datepicker.css'
import './app.scss'

export default class App extends Component {
    state = {
        transactions: [],
        date: moment(),
        currency: 'EUR',
        rates: {},
    }

    componentWillMount = () => {
        const transactions = JSON.parse(window.localStorage.getItem('transactions'))

        if (Array.isArray(transactions)) {
            this.setState({
                transactions
            })
        }

        this.getCurrencies()

    }

    selectCurrency = (currency) => {
        this.getCurrencies({
            currency
        })
        this.setState({
            currency
        })
    }

    getCurrencies = ({date, currency}={}) => {
        currencyService.getRates({
            currency: currency || this.state.currency,
            date: date || this.state.date,
        }).then((res) => {
            this.setState({
                rates: res.rates
            })
        })
    }

    handleDateChange = (date) => {
        this.getCurrencies({
            date
        })
        this.setState({
            date
        })
    }

    handleTransactionsChange = (transactions) => {
        this.setState({
            transactions
        })
    }

    render() {
        return (
            <div>
                <header key="header" className="header">
                    <div key="title">
                        Kanban Test
                    </div>

                    <FileUpload key="upload" addTransactions={this.handleTransactionsChange} />
                </header>

                <main key="main">


                    <div className="controls" key="controls">
                        <div key="datepicker">
                            <div className="label" key="label"><strong>Select Date</strong></div>
                            <DatePicker selected={this.state.date} onChange={this.handleDateChange} key="control" />
                        </div>

                        <div key="swicther">
                            <div className="label" key="label"><strong>Select Currency</strong></div>
                            <CurrencySwitcher key="swicther" selectedCurrency={this.state.currency} onChange={this.selectCurrency} key="control" />
                        </div>


                    </div>

                    {
                         (
                            this.state.transactions.length ?

                            <Transactions key="table" transactions={this.state.transactions} currency={this.state.currency} rates={this.state.rates}/>

                            :

                            <div style={{padding: '1em 0', fontWeight: 500}}>
                                Upload a file with transactions to get started
                            </div>
                         )
                    }

                </main>
            </div>
        )
    }
}

