import React, {Component} from 'react';
import {connect} from 'react-redux';
import More from "./More";
import {signOut} from '../../actions/authActions';
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class MoreContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('More');
    };

    constructor() {
        super();
        this.onSignOut = this.onSignOut.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    async onSignOut(e) {
        const promise = await this.props.signOut();
        if (promise !== undefined) {
            this.props.navigation.navigate('Auth');
        }
    }

    render() {
        return <More onSignOut={this.onSignOut}/>
    }
}

MoreContainer.propTypes = {};

const mapStateToProps = state => ({
    flatmate: state.flatmate,
});

export default connect(mapStateToProps, {signOut})(MoreContainer)