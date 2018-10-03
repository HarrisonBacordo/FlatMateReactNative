import React, {Component} from 'react';
import {connect} from 'react-redux';
import More from "./More";
import {signOut} from '../../actions/authActions';
import {clearFlatState} from '../../actions/flatActions';
import {clearFlatmateState} from '../../actions/flatmateActions';
import {headerStyle} from "../../styles/header";

type Props = {};

class MoreContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('More');
    };
    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    constructor() {
        super();
        this.onSignOut = this.onSignOut.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    async onSignOut(e) {
        const promise = await this.props.signOut();
        if (promise !== undefined) {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return <More onSignOut={this.onSignOut} navigation={this.props.navigation}/>
    }
}

MoreContainer.propTypes = {};

const mapStateToProps = state => ({
    flatmate: state.flatmate,
});

export default connect(mapStateToProps, {signOut, clearFlatmateState, clearFlatState})(MoreContainer)