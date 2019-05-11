import { colors } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Colors from './Colors';

const regularFontSize = 14;
export const spacing = 15;

const theme = {
  Icon: {
    size: 20,
  },
  Button: {
    containerStyle: {
      minWidth: 100,
      marginVertical: spacing,
    },
    buttonStyle: {
      borderColor: colors.primary,
    },
    titleStyle: {
      fontSize: regularFontSize,
      marginHorizontal: 3,
    },
  },
  Input: {
    containerStyle: {
      paddingHorizontal: 0,
    },
    inputStyle: {
      color: colors.primary,
    },
  },
  CheckBox: {
    containerStyle: {
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.primary,
      backgroundColor: '#fff',
      marginHorizontal: 0,
    },
    textStyle: {
      color: colors.primary,
    },
    wrapperStyle: {
      borderColor: colors.primary,
    },
  },
  Divider: {
    style: {
      backgroundColor: Colors.primary,
      marginVertical: 5,
    },
  },
  Text: {
    style: {
      fontSize: regularFontSize,
      color: Colors.primary,
    },
  },
};

export default theme;
