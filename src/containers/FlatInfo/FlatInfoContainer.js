import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlatInfo from "./FlatInfo";
import {headerStyle, headerStyleWithAddButton} from "../../styles/header";
import {Button} from "react-native";

type Props = {};

class FlatInfoContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('Flat Info');
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    render() {
        return <FlatInfo
            flatId={this.props.flat.flatId}/>
    }
}

FlatInfoContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {})(FlatInfoContainer)