import React, { Component } from "react";

class BodyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Товар 1", selected: false },
        { id: 2, name: "Товар 2", selected: false },
        { id: 3, name: "Товар 3", selected: false },
      ],
    };
  }

  handleCheckboxChange = (productId) => {
    this.setState((prevState) => ({
      products: prevState.products.map((product) =>
        product.id === productId
          ? { ...product, selected: !product.selected }
          : product
      ),
    }));
  };

  render() {
    const { products } = this.state;
    const selectedProductsCount = products.filter(
      (product) => product.selected
    ).length;

    return (
      <div className="ProductList">
        <div className="CountProducts">
          {selectedProductsCount} товарів обрано
        </div>
        {products.map((product) => (
          <li key={product.id}>
            <label>
              <input
                type="checkbox"
                checked={product.selected}
                onChange={() => this.handleCheckboxChange(product.id)}
              />
              {product.name}
            </label>
          </li>
        ))}
      </div>
    );
  }
}

export default BodyComponent;
