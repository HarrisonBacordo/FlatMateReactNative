import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, Image, View} from 'react-native';
import {styles} from './styles';
import {Card} from "../Card/Card";
import {CardSection} from "../Card/CardSection";
import {Menu, MenuTrigger, MenuOptions, MenuOption} from 'react-native-popup-menu'

type Props = {};

export class Chore extends Component<Props> {

    render() {
        return (
            <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                <MenuTrigger>
                    <Card>
                        <CardSection>
                            <Text>{this.props.choreName}</Text>
                        </CardSection>
                        <CardSection>
                            <Text>{this.props.choreInterval}</Text>
                        </CardSection>
                        <CardSection>
                            <Image source={require('../../assets/ic_launcher.png')} style={styles.imageStyle}/>
                            <Text>{this.props.flatmateAssigned}</Text>
                        </CardSection>
                    </Card>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption value={1}>
                        <Text style={{color: 'red'}}>Delete</Text>
                    </MenuOption>
                    <MenuOption value={2} text='Edit'/>

                    <MenuOption value={3} text='cancel'/>
                </MenuOptions>
            </Menu>
        );
    }
}

Chore.propTypes = {
    choreName: PropTypes.string.isRequired,
    flatmateAssigned: PropTypes.string.isRequired,
    choreInterval: PropTypes.string.isRequired,

};