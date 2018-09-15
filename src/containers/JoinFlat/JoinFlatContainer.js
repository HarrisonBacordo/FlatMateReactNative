import React, {Component} from 'react';
import {connect} from 'react-redux';
import JoinFlat from "./JoinFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";
import {joinFlat, fetchFlatData} from "../../actions/flatActions";

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

    async onSubmit(e) {
        const data = {
            flatId: this.state.flatId,
            userId: this.props.auth.userId
        };
        this.setState({loading: true});
        const promise = await this.props.joinFlat(data);
        if (promise !== undefined) {
            await this.props.fetchFlatData(this.props.flatmates.flatId).then(() => {
                this.setState({loading: false});
                this.props.navigation.navigate('Chores');
            })
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

const mapStateToProps = state => ({
    auth: state.auth,
    flatmates: state.flatmates,
});

export default connect(mapStateToProps, {joinFlat, fetchFlatData})(JoinFlatContainer)