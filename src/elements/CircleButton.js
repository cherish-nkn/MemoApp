import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class CircleButton extends React.Component {
  render() {
    const {
      style, color, name, size, bgColor, onPress,
    } = this.props;
    const _bgColor = bgColor || '#E31676';
    return (
      <TouchableHighlight style={[styles.container, style]} onPress={onPress} underlayColor="transparent">
        <View style={[styles.circleButton, { backgroundColor: _bgColor }]}>
          <Icon name={name} size={size} color={color} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  circleBottenTitle: {
    fontSize: 32,
    lineHeight: 32,
  },
  circleButton: {
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
