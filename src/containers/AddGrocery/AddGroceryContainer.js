import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddGrocery from "./AddGrocery";
import {headerStyle} from "../../styles/header";
import {newGrocery} from '../../actions/flatActions';

type Props = {};

class AddGroceryContainer extends Component<Props> {
    static navigationOptions = ({navigation}) => {
        return headerStyle('Groceries');
    };

    constructor() {
        super();
        this.state = {
            groceryName: '',
            loading: false,
        };
        this.onGroceryNameChange = this.onGroceryNameChange.bind(this);
        this.onGroceryIntervalChange = this.onGroceryIntervalChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onGroceryNameChange(text) {
        this.setState({groceryName: text});
    }

    onGroceryIntervalChange(choice) {
        this.setState({groceryInterval: choice});
    }

    onSubmit(e) {
        const grocery = {
            groceryName: this.state.groceryName,
            completed: false,
        };
        this.setState({loading: true});
        const promise = this.props.newGrocery(grocery);
        if (promise !== undefined) {
            this.props.navigation.navigate('Groceries');
        }
    }

    render() {
        return <AddGrocery
            groceryNameValue={this.state.groceryName}
            groceryIntervalValue={this.state.groceryInterval}
            onChangeGroceryInterval={this.onGroceryIntervalChange}
            onChangeGroceryName={this.onGroceryNameChange}
            onSubmit={this.onSubmit}
            loading={this.state.loading}/>
    }
}

const mapStateToProps = state => ({
    flat: state.flat,
});

export default connect(mapStateToProps, {newGrocery})(AddGroceryContainer)