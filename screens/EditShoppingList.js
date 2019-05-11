import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editShoppingList } from '../actions';
import EditList from '../components/EditList';
import isEmpty from '../utils/isEmpty';

class EditShoppingList extends React.Component {
  static navigationOptions = {
    title: 'Изменить Список',
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

  editList = () => {
    const { editShoppingList, navigation } = this.props;
    const { name = '', products = [], note = '' } = this.state;
    const item = navigation.getParam('item', {});
    const errors = {};
    if (!name) {
      errors.name = 'Название списка обязательно!';
    }
    if (isEmpty(products)) {
      errors.products = 'Добавьте минимум 1 продукт!';
    }
    this.setState({ errors });
    if (isEmpty(errors)) {
      editShoppingList({
        name,
        products,
        note,
        id: item.id,
        createdAt: item.createdAt,
      });
      navigation.popToTop();
    }
  };

  componentDidMount = () => {
    const item = this.props.navigation.getParam('item', {});
    this.setState({ ...item });
  };

  render() {
    return (
      <EditList
        {...this.state}
        onNameChange={name => this.setState({ name })}
        onProductChange={product => this.setState({ product })}
        onNoteChange={note => this.setState({ note })}
        onSave={this.editList}
        onProductAdd={this.addProduct}
        onProductDelete={this.deleteProduct}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  editShoppingList: data => dispatch(editShoppingList(data)),
});

EditShoppingList.propTypes = {
  name: PropTypes.string,
  product: PropTypes.string,
  products: PropTypes.arrayOf(PropTypes.string),
  note: PropTypes.string,
  errors: PropTypes.object,
  editShoppingList: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

EditShoppingList.defaultProps = {
  name: '',
  product: '',
  products: [],
  note: '',
  errors: {
    name: '',
    products: '',
  },
};

export default connect(
  null,
  mapDispatchToProps,
)(EditShoppingList);
