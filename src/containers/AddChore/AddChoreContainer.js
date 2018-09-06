import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddChore from "./AddChore";

type Props = {};

class AddChoreContainer extends Component<Props> {

    render() {
        return <AddChore/>
    }
}

AddChoreContainer.propTypes = {};

const mapStateToProps = state => ({
    chores: state.chores,
});

export default connect(mapStateToProps, {})(AddChoreContainer)