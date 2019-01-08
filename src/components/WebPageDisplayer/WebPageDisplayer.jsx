import React, {Component} from 'react';
import Iframe from 'react-iframe';

class WebDisplayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            urls: [
            'http://www.youtube.com/embed/xDMP3i36naA',
            'http://weavesilk.com/'
            ],
            time: 60,
            index: 0
        }
        this.moveToNextPage = this.moveToNextPage.bind(this);
    }

    componentDidMount() {
        this.surf();
    }
    
    moveToNextPage() {
        console.log('moving to next page');
        const currIndex = this.state.index;
        const urls = this.state.urls;
        const nextIndex = currIndex < urls.length - 1 ? currIndex + 1 : 0;
        this.setState({index: nextIndex});
        this.surf();
    }

    surf() {
        setTimeout(this.moveToNextPage, this.state.time * 1000);
    }

    render() {
        return (
            <Iframe 
                style={{flex: 1}}
                url={this.state.urls[this.state.index]}
                allowFullScreen
            />          
        )
    }
}

export default WebDisplayer;