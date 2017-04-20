import React, { Component } from 'react'
import PropTypes from 'prop-types'

class componentName extends Component {
    getInputElement = (element) => {
        this._inputElement = element
    }

    onClick = () => {
        this.trigger()
    }

    onChange = (event) => {
        this.props.fileSelected(event.target.files[0])
    }

    trigger = () => {
        this._inputElement.click()
    }

    render() {
        return (
            <div>
                <input hidden type="file" ref={this.getInputElement} onChange={this.onChange} />

                <button onClick={this.onClick}>
                    {this.props.children}
                </button>
            </div>
        )
    }
}

componentName.propTypes = {
    fileSelected: PropTypes.func
}

export default componentName;
