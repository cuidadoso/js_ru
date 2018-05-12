import React, {Component as ReactComponent} from 'react';

export default OriginalComponent => class Accordion extends ReactComponent {
    state = {
        openItemId: null
    };

    toggleOpen = openItemId => ev =>{
        this.setState({
            openItemId: this.state.openItemId === openItemId ? null : openItemId
        })
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    };
}
