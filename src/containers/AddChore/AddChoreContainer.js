import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddChore from "./AddChore";
import {headerStyle} from "../../styles/header";
import {newChore} from '../../actions/flatActions';

type Props = {};

class AddChoreContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyle('Groceries');
    };

    constructor() {
        super();
        this.state = {
            choreName: '',
            choreInterval: '',
            loading: false,
        };
        this.onChoreNameChange = this.onChoreNameChange.bind(this);
        this.onChoreIntervalChange = this.onChoreIntervalChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChoreNameChange(text) {
        this.setState({choreName: text});
    }

    onChoreIntervalChange(choice) {
        this.setState({choreInterval: choice});
    }

    onSubmit(e) {
        const chore = {
            choreName: this.state.choreName,
            choreInterval: this.state.choreInterval,
            //TODO change this to be dynamic flatmate
            flatmate: 'Harrison Bacordo',
            isDone: false,
        };
        this.setState({loading: true});
        const promise = this.props.newChore(chore);
        if (promise !== undefined) {
            this.props.navigation.navigate('Chores');
        }
    }

    render() {
        return <AddChore
            choreNameValue={this.state.choreName}
            choreIntervalValue={this.state.choreInterval}
            onChangeChoreInterval={this.onChoreIntervalChange}
            onChangeChoreName={this.onChoreNameChange}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

const mapStateToProps = state => ({
    chores: state.chores,
});

export default connect(mapStateToProps, {newChore})(AddChoreContainer)