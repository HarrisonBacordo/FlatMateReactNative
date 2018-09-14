import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chores from "./Chores";
import {headerStyleWithAddButton} from "../../styles/header";
import {colors} from "../../config/colors";
import {Button} from "../../components/Button";

type Props = {};

class ChoresContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Chores', navigation.getParam('navigateToAddChore'));
    };

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddChore: this._navigateToAddChore});
    }

    _navigateToAddChore = () => {
        this.props.navigation.navigate('AddChore');
    };


    render() {
        return (<Chores
            chores={this.props.flat.chores}/>)
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {})(ChoresContainer)