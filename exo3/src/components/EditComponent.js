import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeHostName = this.onChangeHostName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {name: '', age: '', type: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ name: response.data.name, age: response.data.age, type: response.data.type });
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        onChangeHostName(e) {
            this.setState({
                nom: e.target.value
            });
        }
        onChangeAge(e) {
            this.setState({
                age: e.target.value
            });
        }
        onChangeType(e) {
            this.setState({
                type: e.target.value
            });
        }
    onSubmit(e) {
        e.preventDefault();
        const serverport = {
            name: this.state.name,
            age: this.state.age,
            type: this.state.type
        }

        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
        .then(res => console.log(res.data));
        this.setState({
            name: '',
            age: '',
            type:''
        })
        this.props.history.push('/index');

    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Afficher utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>renseigner le nom: </label>
                        <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input type="text" value={this.state.age} className="form-control" onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <label>Type : </label>
                        <input type="text" value={this.state.type} className="form-control" onChange={this.onChangeType}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
