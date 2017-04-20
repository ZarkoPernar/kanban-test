import React, { Component } from 'react'

import uploadService from './uploadService'
import FileInput from './FileInput'

class FileUpload extends Component {
    fileSelected = (file) => {
        uploadService.uploadFile(file)
            .then((res) => {
                const transactions = res

                window.localStorage.setItem('transactions', JSON.stringify(transactions))

                this.props.addTransactions(transactions)
            })
            .catch((err) => {
                console.error(err.message)
            })
    }

    render() {
        return (
            <div>
                <FileInput key="upload" fileSelected={this.fileSelected}>
                    Upload Transactions
                </FileInput>
            </div>
        )
    }
}

export default FileUpload
