import React, { Component } from 'react';
import axios from 'axios';
export default class CreateComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nom: '',
            age: '',
            type:''
        }
    }
    onChangeNom(e) {
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
            nom: this.state.nom,
            age: this.state.age,
            type: this.state.type
        }
        axios.post('http://localhost:4200/serverport/add', serverport)
        .then(res => console.log(res.data));
        this.setState({
            nom: '',
            age: '',
            type: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Ajouter un utilisateur</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nom : </label>
                        <input type="text" value={this.state.nom} className="form-control" onChange={this.onChangeNom}/>
                    </div>
                    <div className="form-group">
                        <label>Age : </label>
                        <input type="text" value={this.state.age} className="form-control" onChange={this.onChangeAge}/>
                    </div>
                    <div className="form-group">
                        <label>Type : </label>
                        <input type="text" value={this.state.type} className="form-control" onChange={this.onChangeType}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Ajouter" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
