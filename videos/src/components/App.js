import React from 'react';
import SearchBar from './SearchBar'
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    state = { videos: [], selectedVideo: null }

    componentDidMount() {
        this.onSearchSubmit('home')
    }

    onSearchSubmit = async videoSearchTerm => {
        const videos = await youtube.get(
            '/search',
            {params: { q: videoSearchTerm }});

        const video_list = videos.data.items

        this.setState( { videos: video_list.slice(1, video_list.length), selectedVideo: videos.data.items[0] })
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div className=" ui grid">
                    <div className="ui row">
                        <div className=" eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;