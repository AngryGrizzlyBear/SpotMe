import React, {Component} from 'react'
import axios from 'axios'


class App extends Component {


    render() {

        const instance = axios.create({
            baseURL: 'https://api.musixmatch.com/ws/1.1/',
            timeout: 1000,
            headers: {'Accept': 'text/plain'}
        });


        instance.get('/track.search', {
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
                console.log(response);
            });

        return (
            <div>
                <h1>Hi</h1>
            </div>
        )
    }
}

export default App
