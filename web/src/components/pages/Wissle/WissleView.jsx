import React, { Component } from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default class WissleView extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            wissle: { text: "" }
        }

        this.onWissleNameChange = this.onWissleNameChange.bind(this)
        this.onClickSave = this.onClickSave.bind(this)
    }
    onWissleNameChange(event) {
        const wissle = this.state.wissle
        wissle.text = event.target.value
        this.setState({ wissle: wissle })
    }
    onClickSave() {
        this.props.actions.saveWissle(this.state.wissle)
    }
    render() {
        return (
            <div>
                <div>
                    <div>Create Wissle</div>
                </div>
                <div>
                    <input
                        type="text"
                        onChange={this.onWissleNameChange}
                        placeholder="text"
                        value={this.state.wissle.text} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Create Wissle"
                        onClick={this.onClickSave} />
                </div>
            </div>
        )
    }
}
