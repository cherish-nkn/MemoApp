import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class CircleButton extends React.Component {
  render() {
    const {
      style, color, name, size, bgColor,
    } = this.props;
    const _bgColor = bgColor || '#E31676';
    return (
      <View style={[styles.circleButton, style, { backgroundColor: _bgColor }]}>
        <Icon name={name} size={size} color={color} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleBottenTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
  circleButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default CircleButton;
