import React, {Component} from 'react'
import axios from 'axios'
import parse from 'parse-jsonp'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {data: null}
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
                // quorum_factor: 1,
                page_size: 1,
                // page: 1
            }
        })
            .then(function (response) {
                return parse("jsonp_callback", response.data);
            });
        this.setState({data})
    }

    getTrackid() {
        return this.state.data && this.state.data.message.body.track_list[0].track.track_id
    }

    render() {

        console.log(this.state.data);
        return (
            <div>
                <h1>Break</h1>
            </div>
        )
    }
}

export default App
