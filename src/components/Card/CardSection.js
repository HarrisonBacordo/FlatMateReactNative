import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';
import {View, Image, Text} from "react-native";
import {Menu, MenuOption, MenuOptions, MenuTrigger} from "react-native-popup-menu";

type Props = {};

export class CardSection extends Component<Props> {

    constructor() {
        super();

    }

    onDelete() {
    //    TODO FIGURE OUT WHAT TO PUT HERE
    }

    render() {
        if (this.props.moreIcon) {
            return (
                <View style={styles.cardSectionWithIconContainerStyle}>
                    {this.props.children}
                    <Menu onSelect={value => alert(`Selected number: ${value}`)}>
                        <MenuTrigger>
                            <Image source={require('../../assets/more_icon.png')} style={styles.iconStyle}/>
                        </MenuTrigger>
                        <MenuOptions>
                            <MenuOption value={1}>
                                <Text style={{color: 'red'}}>Delete</Text>
                            </MenuOption>
                            <MenuOption value={2} text='Edit'/>
                        </MenuOptions>
                    </Menu>
                </View>
            );
        }
        return (
            <View style={styles.cardSectionContainerStyle}>
                {this.props.children}
            </View>
        );
    }
}

CardSection.defaultProps = {
    moreIcon: false,
};


CardSection.propTypes = {
    moreIcon: PropTypes.bool,
    objectType: PropTypes.string,
    objectKey: PropTypes.string,

};