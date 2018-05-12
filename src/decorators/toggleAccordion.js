import React, {Component as ReactComponent} from 'react';

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openArticleId: null
    };

    toggleOpen = openArticleId => ev =>{
        const currentArticleId = this.state.openArticleId;
        if(currentArticleId === openArticleId) {
            this.setState({
                openArticleId: null
            })
        } else {
            this.setState({
                openArticleId
            })
        }
    };

    render() {
        return <OriginalComponent {...this.props} {...this.state} toggleOpen = {this.toggleOpen} />
    };
}
