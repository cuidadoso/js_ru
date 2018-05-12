import React, {Component as ReactComponent} from 'react';

export default OriginalComponent => class WrappedComponent extends ReactComponent {
    state = {
        isOpen: false
    };

    toggleOpen = ev => {
        ev && ev.preventDefault && ev.preventDefault();
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    componentWillMount() {
        console.log('---', 'mounting');
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    };

    componentWillUnmount() {
        console.log('---', 'unmounting');
    };

    componentDidMount() {
        console.log('---', 'mounted');
    };

    componentDidUpdate() {
        console.log('---', 'updated');
    };
};
