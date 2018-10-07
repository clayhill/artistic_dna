import React, {Component} from 'react'

class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultsButtonEnabled: false,
            resetButtonEnabled: false,
        };
    }

    renderResultsButton = () => {
        return (
            <button
                className='no-underline white bg-animate bg-green grow inline-flex items-center ma2 tc br2 pa2'
                onClick={this.props.onShowResults}
            >
                Toon Resultaat
            </button>
        );
    };

    renderResetButton = () => {
        return (
            <button
                className='no-underline white bg-animate bg-red grow inline-flex items-center ma2 tc br2 pa2'
                onClick={this.props.onResetCards}
            >
                Begin Opnieuw
            </button>
        );
    };

    render() {
        return (
            <div className='pv4 ph2 tc f3'>
                {this.props.resultsButtonEnabled ? this.renderResultsButton() : null}
                {this.props.resetButtonEnabled ? this.renderResetButton() : null}
            </div>
        );
    }
}

export default Toolbar;