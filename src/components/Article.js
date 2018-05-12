import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CSSTransitionGroup} from 'react-transition-group';
import './article.css'

import {CommentList} from './';

class Article extends PureComponent {
    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };

    state = {
        updateIndex: 0
    };

    getBody = () => {
        const {article, isOpen} = this.props;
        if(!isOpen) return null;
        return <div>
                <section>
                    {article.text}
                    <button onClick={() => this.setState({updateIndex: this.state.updateIndex + 1})}>update</button>
                    <CommentList comments = {article.comments} ref = {this.setCommentRef} key = {this.state.updateIndex} />
                </section>
        </div>;
    };

    setContainerRef = ref => {
        this.container = ref;
//        console.log('---', ref);
    };

    setCommentRef = ref => {
//        console.log('---', ref);
    };

   /* shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen;
    };*/

    render() {
        const {article, isOpen, toggleOpen} = this.props;
        console.log('---', 'rendering article');
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick={toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <CSSTransitionGroup transitionName = 'article'
                                    transitionAppear = {true}
                                    transitionAppearTimeout = {500}
                                    transitionEnterTimeout = {500}
                                    transitionLeaveTimeout = {300}>
                    {this.getBody()}
                </CSSTransitionGroup>
            </div>
        );
    };
}

export default Article;
