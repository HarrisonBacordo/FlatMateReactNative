import React, {Component} from 'react';
import {connect} from 'react-redux';
import FlatInfo from "./FlatInfo";
import {headerStyle} from "../../styles/header";

type Props = {};

class FlatInfoContainer extends Component<Props> {
    static navigationOptions = () => {
        return headerStyle('Flat Info');
    };
    _navigateToAddGrocery = () => {
        this.props.navigation.navigate('AddReminder');
    };

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddGrocery: this._navigateToAddGrocery});
    }

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