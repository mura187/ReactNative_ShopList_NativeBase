import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import Colors from '../constants/Colors';
import { spacing } from '../constants/theme';

const ListItem = ({
  item,
  onPress,
  onIconPress,
  iconName,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text ellipsizeMode="tail">
      {' '}
      {item.name}
      {' '}
    </Text>
    {onIconPress && (
      <Icon
        name={iconName}
        type="feather"
        onPress={onIconPress}
        color={Colors.errorBackground}
      />
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: 10,
    marginBottom: spacing,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
  },
});

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
  onIconPress: PropTypes.func,
  iconName: PropTypes.string,
};

ListItem.defaultProps = {
  iconName: 'delete',
  onIconPress: null,
};

export default ListItem;
