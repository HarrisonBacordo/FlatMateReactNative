import React, {Component} from 'react';
import {connect} from 'react-redux';
import QrScanner from "./QrScanner";
import {headerStyle} from "../../styles/header";
import {fetchFlatData, joinFlat} from "../../actions/flatActions";
import {fetchFlatmates} from "../../actions/flatmateActions";

type Props = {};

class QrScannerContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('Join Flat');
    };

    constructor() {
        super();
        this.onSuccess = this.onSuccess.bind(this);
    }

    async onSuccess(e) {
        const data = {
            flatId: e.data,
            userId: this.props.auth.userId
        };
        this.setState({loading: true});
        const promise = await this.props.joinFlat(data);
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
        return <QrScanner
            onSuccess={this.onSuccess}/>
    }
}

QrScannerContainer.propTypes = {};

const mapStateToProps = state => ({
    auth: state.auth,
    flatmates: state.flatmates,
});

export default connect(mapStateToProps, {joinFlat, fetchFlatData, fetchFlatmates})(QrScannerContainer)