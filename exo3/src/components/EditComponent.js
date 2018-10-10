import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {nom: '', age: '', type: ''};
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ nom: response.data.nom, age: response.data.age, type: response.data.type });
            })
            .catch(function (error) {
                console.log(error);
            })
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

        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
        .then(res => console.log(res.data));
        this.setState({
            nom: '',
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
                        <input type="text" value={this.state.nom} className="form-control" onChange={this.onChangeNom}/>
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
                        <input type="submit" value="Valider" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
