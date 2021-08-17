import React from 'react';
import { Text, ViewPropTypes, View, StyleSheet } from 'react-native';
import { node, string } from 'prop-types';
import Constants from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 2,
    width: '100%',
  },
  text: {
    ...Constants.Fonts.OpenSans.regularBold,
    alignSelf: 'center',
    color: Constants.Colors.TEXT_COLOR,
    textAlign: 'center',
    marginTop: 10
  },
  descriptionText: {
    ...Constants.Fonts.OpenSans.extraSmallRegular,
    alignSelf: 'center',
    color: '#484848',
    textAlign: 'center',
  }
});

const NoRecordFound = ({
  message, style, icon, description
}) => (
    <View style={[styles.container, style]}>
      {icon}
      <Text style={styles.text}>{message}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </View>
  );

NoRecordFound.defaultProps = {
  message: '',
  style: {},
  description: ''
};

NoRecordFound.propTypes = {
  children: node,
  message: string,
  style: ViewPropTypes.style,
  description: string
};

export default NoRecordFound;
