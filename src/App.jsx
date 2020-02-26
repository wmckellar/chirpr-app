import React from 'react';
import Container from './components/container';

class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            message: '',
            chirp: []
        };
    }

    handleUsernameChange = (e) => this.setState ({ username: e.target.value });
    handleMessageChange = (e) => this.setState ({ message: e.target.value });
    handleChirpMessage = (e) => {
        e.preventDefault ();
        let chirp = this.state.chirp.slice();
        chirp.push({
            username: this.state.username,
            message: this.state.message
        });
        this.setState ({
            username: '',
            message: '',
            chirp
        });
    }

    render () {
        return (
            <Container>
                <section className="row mt-2">
                    <div className="col-md-4">
                        <form className="form-group p-3 shadow-sm">
                            <label>Username</label>
                            <input value={this.state.username} onChange={this.handleUsernameChange} type="text" className="form-control"/>
                            <label>Message</label>
                            <textarea value={this.state.message} onChange={this.handleMessageChange} className="form-control"/>
                            <button onClick={this.handleChirpMessage} className="btn btn-primary btn-block mt-3"> New Message</button>
                        </form>
                    </div>
                    <div className="col-md-7">
                        <ul className="list-group list-group-flush shadow-sm">
                            {this.state.chirp.map((chirp, i) => {
                                return (
                                    <li key={`chirp-item-${i}`} className="list-group-item d-flex justify-content-between align-items-center">
                                    <b>{chirp.username}:</b>
                                    <span>{chirp.message}</span>
                                    </li>
                                )
                            })};
                        </ul>
                    </div>
                </section>
            </Container>
        )
    }
}

export default App;