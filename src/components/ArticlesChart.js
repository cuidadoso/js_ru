import React, {Component} from 'react';

class ArticleChart extends Component {
    static propTypes = {

    };

    componentWillReceiveProps(nextProps) {
        // update chart for new articles
    };

    render() {
        return(
            <div ref = 'chart'/>
        );
    };

    componentDidMount() {
        // d3 works with this.refs.chart
    };

    componentWillUnmount() {
        // do same clean
    };
}

export default ArticleChart;
