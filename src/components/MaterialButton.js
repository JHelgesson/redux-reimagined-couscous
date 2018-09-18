import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class MaterialButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfClicks: 0
        }
    }

    handleClick = (e) => {
        let nrOfClicks = this.state.numberOfClicks;
        nrOfClicks = ++nrOfClicks;
        this.setState({numberOfClicks: nrOfClicks});
        this.props.onClick(e);
    }

    buttonLabel = (label) => {
        if(this.state.numberOfClicks === 0)
            return label;

        return label + " (" + this.state.numberOfClicks + ")";
    }

    render() {
        return (
          <RaisedButton label={this.buttonLabel(this.props.label)} onClick={this.handleClick} />
        );
    }
}

export default MaterialButton;