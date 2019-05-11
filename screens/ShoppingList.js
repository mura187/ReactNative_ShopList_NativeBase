import React from 'react';
import PropTypes from 'prop-types';
import { Container, Header, Content, SwipeRow, View, Text, Icon, Button } from 'native-base';
import {
  StyleSheet,
  FlatList
} from 'react-native'; 
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';
import { deleteFromShoppingList } from '../actions';

class ShoppingListScreen extends React.Component {
  static navigationOptions = {
    title: 'Список Покупок',
  };

  render() {
    const { shoppingList, navigation, deleteFromShoppingList } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item, index) => index.toString()}
          data={shoppingList}
          renderItem={({ item }) => (
            <Content scrollEnabled={false}>
            <SwipeRow 
              rightOpenValue={-75}
              body={
                <ListItem
              item={item}
              onPress={() => navigation.navigate('ShoppingDetails', { item })} 
            />
              }
              right={
                <Button primary onPress={() => navigation.navigate('ShoppingDetails', { item })}
                onIconPress={() => deleteFromShoppingList(item)} >
                  <Icon active name="create" />
                </Button>
              }
            />
          </Content>
          )}
        />
        
         

        
        <Button full info
          type="outline"
          title="ДОБАВИТЬ"
          onPress={() => navigation.navigate('AddShoppingList')}
        >
        <Text>ДОБАВИТЬ</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  contentContainer: {
    backgroundColor: '#fff',
  },
});

const mapStateToProps = state => ({
  shoppingList: state.shoppingList,
});

const mapDispatchToProps = dispatch => ({
  deleteFromShoppingList: list => dispatch(deleteFromShoppingList(list)),
});

ShoppingListScreen.propTypes = {
  shoppingList: PropTypes.array.isRequired,
  navigation: PropTypes.object.isRequired,
  deleteFromShoppingList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingListScreen);
