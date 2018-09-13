import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chores from "./Chores";

type Props = {};

class ChoresContainer extends Component<Props> {
    constructor() {
        super();
    }


    render() {
        //todo fix this
        return <Chores
            chores={this.props.flat.chores}/>
    }
}

ChoresContainer.propTypes = {};

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {})(ChoresContainer)