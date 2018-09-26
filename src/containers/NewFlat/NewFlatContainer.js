import React, {Component} from 'react';
import {connect} from 'react-redux';
import NewFlat from "./NewFlat";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";
import {newFlat, fetchFlatData} from "../../actions/flatActions";
import {fetchFlatmates} from "../../actions/flatmateActions";

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

    async onSubmit(e) {
        const data = {
            flatName: this.state.flatName,
            userId: this.props.auth.userId
        };
        this.setState({loading: true});
        const promise = await this.props.newFlat(data);
        if (promise !== undefined) {
            this.props.fetchFlatData(this.props.flatmates.flatId).then(() => {
                this.props.fetchFlatmates(this.props.flatmates.flatId).then(() => {
                    this.setState({loading: false});
                    this.props.navigation.navigate('Chores');
                });
            })
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

const mapStateToProps = state => ({
    auth: state.auth,
    flatmates: state.flatmates,
});

export default connect(mapStateToProps, {newFlat, fetchFlatData, fetchFlatmates})(NewFlatContainer)