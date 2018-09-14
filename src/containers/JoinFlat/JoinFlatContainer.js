import React, {Component} from 'react';
import {connect} from 'react-redux';
import JoinFlat from "./JoinFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";
import {joinFlat, newFlat} from "../../actions/flatActions";

type Props = {};

class JoinFlatContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('Join Flat');
    };

    constructor() {
        super();
        this.state = {
            flatId: '',
            loading: false,
        };
        this.onChangeFlatId = this.onChangeFlatId.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeFlatId(text) {
        this.setState({flatId: text});
    }

    onSubmit(e) {
        const promise = this.props.joinFlat(this.state.flatId);
        if (promise !== undefined) {
            this.props.navigation.navigate('Chores');
        }
    }

    render() {
        return <JoinFlat
            flatIdValue={this.state.flatId}
            onChangeFlatId={this.onChangeFlatId}
            loading={this.state.loading}
            onSubmit={this.onSubmit}/>
    }
}

JoinFlatContainer.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {joinFlat})(JoinFlatContainer)