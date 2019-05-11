import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import ListItem from '../components/ListItem';

class ArchivedListScreen extends React.Component {
  static navigationOptions = {
    title: 'Архив',
  };

  navigateToItem = (item) => {
    const { navigation } = this.props;
    navigation.navigate('ArchivedDetails', { item });
  }

  render() {
    const { archived } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          keyExtractor={(item, index) => index.toString()}
          data={archived}
          renderItem={({ item }) => (
            <ListItem
              item={item}
              onPress={() => this.navigateToItem(item)}
            />
          )}
        />
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
  archived: state.archived,
});

ArchivedListScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  archived: PropTypes.array,
};

export default connect(mapStateToProps)(ArchivedListScreen);
