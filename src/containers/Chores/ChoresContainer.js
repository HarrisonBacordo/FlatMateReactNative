import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import Chores from "./Chores";
import {headerStyle} from "../../styles/header";
import {colors} from "../../config/colors";

type Props = {};

class ChoresContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return {
            ...headerStyle('Chores'),
            headerRight: (
                <Button
                    onPress={navigation.getParam('navigateToAddChore')}
                    title="Add"
                    color='transparent'
                />
            ),
        }
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
        //todo fix this
        console.log(this.props.flat.chores);
        return (<Chores
            chores={this.props.flat.chores}/>)
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {})(ChoresContainer)