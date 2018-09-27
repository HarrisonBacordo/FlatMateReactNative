import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chores from "./Chores";
import {headerStyleWithAddButton} from "../../styles/header";
import {deleteChore, nudgeChore, toggleChore} from "../../actions/flatActions";

type Props = {};

class ChoresContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyleWithAddButton('Chores', navigation.getParam('navigateToAddChore'));
    };
    _navigateToAddChore = () => {
        this.props.navigation.navigate('AddReminder');
    };

    constructor() {
        super();
        this.onDelete = this.onDelete.bind(this);
        this.onNudge = this.onNudge.bind(this);
        this.onToggleChore = this.onToggleChore.bind(this);
    }

    componentDidMount() {
        this.props.navigation.setParams({navigateToAddChore: this._navigateToAddChore});

    }

    onDelete(choreId) {
        console.log(choreId);
        this.props.deleteChore(choreId);
    }

    onNudge(choreData) {
        this.props.nudgeChore(choreData)
    }

    onToggleChore(choreId, value) {
        this.props.toggleChore(choreId, value);
    }


    render() {
        return (<Chores
            chores={this.props.flat.chores}
            onDelete={this.onDelete}
            onNudge={this.onNudge}
            onToggleChore={this.onToggleChore}
            profPicUri={this.props.flatmates.profPicUri}
            currentFlatmateId={this.props.flatmates.userId}/>)
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
    flatmates: state.flatmates
});

export default connect(mapStateToProps, {nudgeChore, deleteChore, toggleChore})(ChoresContainer)