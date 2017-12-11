import React, { Component } from 'react'
import { PropTypes } from 'react'
import { Link } from 'react-router-dom'

export default class TagView extends Component {
    constructor(props, context) {
        super(props, context)

        this.state = {
            tag: { title: "" }
        }

        this.onTagNameChange = this.onTagNameChange.bind(this)
        this.onClickSave = this.onClickSave.bind(this)
    }
    onTagNameChange(event) {
        const tag = this.state.tag
        tag.title = event.target.value
        this.setState({ tag: tag })
    }
    onClickSave() {
        this.props.actions.saveTag(this.state.tag)
    }
    render() {
        return (
            <div>
                <div>
                    <div>Create Tag</div>
                </div>
                <div>
                    <input
                        type="text"
                        onChange={this.onTagNameChange}
                        placeholder="text"
                        value={this.state.tag.title} />
                </div>
                <div>
                    <input
                        type="submit"
                        value="Create Tag"
                        onClick={this.onClickSave} />
                </div>
            </div>
        )
    }
}
