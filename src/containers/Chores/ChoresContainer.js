import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chores from "./Chores";

type Props = {};

class ChoresContainer extends Component<Props> {

    render() {
        return <Chores/>
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    chores: state.chores,
});

export default connect(mapStateToProps, {})(ChoresContainer)