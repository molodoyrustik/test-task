import React from 'react';
import {
  Select, Input, Button, Card,
} from 'antd';
import './product-list-item.css';

const { Option } = Select;

class ProductListItem extends React.Component {
  state = {
    currency: this.props.book.currency,
    price: this.props.book.price,
  };

  handleChangeSelect = (value) => {
    this.setState({
      currency: value,
    });
  };

  handleChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  };

  handleAddProduct = () => {
    const { onAddToCart, book } = this.props;
    const { currency, price } = this.state;
    const newBook = {
      ...book,
      currency,
      price,
    };
    onAddToCart(newBook)();
  };

  render() {
    const { book } = this.props;
    const { currency, price } = this.state;
    const {
      name, author, quantity,
    } = book;
    return (
      <Card title={name} style={{ width: 300 }}>
        <div className="book-list-item">
          <div className="book-details">
            <span className="book-title">{name}</span>
            <div className="book-author">{author}</div>
            <span className="book-author">Quantity : {quantity}</span>
            <Input placeholder="Basic usage" value={price} onChange={this.handleChangePrice}/>
            <Select
              defaultValue={currency}
              style={{ width: 100 }}
              onChange={this.handleChangeSelect}
            >
              <Option value="RUB">RUB</Option>
              <Option value="USD">USD</Option>
              <Option value="EUR">EUR</Option>
            </Select>
            <Button type="primary" onClick={this.handleAddProduct}>
              Add to cart
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default ProductListItem;
