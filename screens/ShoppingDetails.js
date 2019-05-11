import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
//import { Button } from 'react-native-elements';
import { Button, Text, Icon} from 'native-base';
import Colors from '../constants/Colors';
import { archiveShoppingList } from '../actions';
import Details from './Details';

class ShoppingDetails extends React.Component {
  static navigationOptions = {
    title: 'Детали Покупки',
  };

  archive = (item) => {
    const { archiveShoppingList, navigation } = this.props;
    archiveShoppingList(item);
    navigation.popToTop();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', {});

    return (
      <Details item={item}>
        <View style={styles.buttonsContainer}>
          <Button info type="outline" title="Измен." onPress={() => navigation.navigate('EditShoppingList', { item })} >
            <Icon name='create' /> 
          </Button>
          <Button danger type="outline" title="В архив" onPress={() => this.archive(item)} >
            <Icon name='archive' /> 
          </Button>
          
        </View>
      </Details>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
    width: '40%',
  },
  centerText: {
    textAlign: 'center',
  },
});

const mapDispatchToProps = dispatch => ({
  archiveShoppingList: item => dispatch(archiveShoppingList(item)),
});

ShoppingDetails.propTypes = {
  archiveShoppingList: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(null, mapDispatchToProps)(ShoppingDetails);
