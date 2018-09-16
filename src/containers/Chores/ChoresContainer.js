import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chores from "./Chores";
import {headerStyleWithAddButton} from "../../styles/header";
import {colors} from "../../config/colors";
import {Button} from "../../components/Button";
import {deleteChore} from "../../actions/flatActions";

type Props = {};

class ChoresContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Chores', navigation.getParam('navigateToAddChore'));
    };

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddChore: this._navigateToAddChore});
    }

    _navigateToAddChore = () => {
        this.props.navigation.navigate('AddReminder');
    };

    onDelete(choreId) {
        console.log(choreId);
        this.props.deleteChore(choreId);
    }


    render() {
        return (<Chores
            chores={this.props.flat.chores}
            onDelete={this.onDelete}/>)
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {deleteChore: deleteChore})(ChoresContainer)