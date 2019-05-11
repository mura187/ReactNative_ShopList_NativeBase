import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addShoppingList } from '../actions';
import EditList from '../components/EditList';
import isEmpty from '../utils/isEmpty';

class AddShoppingList extends React.Component {
  static navigationOptions = {
    title: 'Добавить список покупок',
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      product: '',
      products: [],
      note: '',
      errors: {},
    };
  }

  addProduct = () => {
    const { product, products } = this.state;
    if (product && !products.includes(product)) {
      products.push(product);
      const { errors } = this.state;
      errors.products = undefined;
      this.setState({ products, product: '', errors });
    }
  };

  deleteProduct = (product) => {
    const { products: currentProducts } = this.state;
    const products = currentProducts.filter(item => item !== product);
    this.setState({ products });
  };

  saveList = () => {
    const {
      name, products, note,
    } = this.state;
    const { addShoppingList, navigation } = this.props;
    const errors = {};
    if (!name) {
      errors.name = 'Название списка обязательно';
    }
    if (isEmpty(products)) {
      errors.products = 'Добавьте как минимум 1 продукт!';
    }
    this.setState({ errors });
    if (isEmpty(errors)) {
      addShoppingList({ name, products, note });
      navigation.goBack();
    }
  };

  render() {
    return (
      <EditList
        {...this.state}
        onNameChange={name => this.setState({ name })}
        onProductChange={product => this.setState({ product })}
        onNoteChange={note => this.setState({ note })}
        onSave={this.saveList}
        onProductAdd={this.addProduct}
        onProductDelete={this.deleteProduct}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addShoppingList: data => dispatch(addShoppingList(data)),
});

AddShoppingList.propTypes = {
  addShoppingList: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddShoppingList);
