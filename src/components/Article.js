import React, {Component} from 'react';

export default class Article extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleClick = (ev) => {
        ev.preventDefault();
        console.log('--- React event: ', ev);
        console.log('--- Native event: ', ev.nativeEvent);
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    getBody = () => {
        if(!this.state.isOpen) return null;
        const {article} = this.props;
        return <section>{article.text}</section>;
    };

    render() {
        const {article} = this.props;
        const {isOpen} = this.state;
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick={this.toggleClick}>
                    {isOpen ? 'close' : 'open'}
                </button>
                {this.getBody()}
            </div>
        );
    };
}

/*export default function Article(props) {
    const {article} = props;
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    );
}*/
