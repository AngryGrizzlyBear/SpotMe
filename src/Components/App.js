import React, {Component} from 'react'
import axios from 'axios'


class App extends Component {

    constructor (props) {
        super(props);
        this.state = {data:''}
    }

    async componentDidMount() {
        const instance = axios.create({
            baseURL: 'https://api.musixmatch.com/ws/1.1/',
            timeout: 1000,
            headers: {'Accept': 'text/plain'}
        });


        const data = await instance.get('/track.search', {
            params: {
                q_track: 'In The End',
                q_artist: 'Linkin Park',
                apikey: '1be0819a875857f63d58ac8d8a84dd46',
                format: 'jsonp',
                callback: "jsonp_callback",
                quorum_factor: 1,
                page_size: 3,
                page: 1
            }
        })
            .then(function (response) {
                return (response.data);
            });
        this.setState({data})
    }

    render() {

        return (
            <div>
                <h1>Hi</h1>
                {this.state.data}
            </div>
        )
    }
}

export default App
