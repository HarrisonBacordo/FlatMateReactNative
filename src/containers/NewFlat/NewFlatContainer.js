import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewFlat from "./NewFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";
import {newFlat} from "../../actions/flatActions";

type Props = {};

class NewFlatContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('New Flat');
    };

    constructor() {
        super();
        this.state = {
            flatName: '',
            loading: false,
        };
        this.onChangeFlatName = this.onChangeFlatName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFlatName(text) {
        this.setState({flatName: text});
    }

    onSubmit(e) {
        const promise = this.props.newFlat(this.state.flatName);
        if (promise !== undefined) {
            this.props.navigation.navigate('Chores');
        }
    }

    render() {
        return <NewFlat
            flatNameValue={this.state.flatName}
            onChangeFlatName={this.onChangeFlatName}
            loading={this.state.loading}
            onSubmit={this.onSubmit}/>
    }
}

NewFlatContainer.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {newFlat})(NewFlatContainer)