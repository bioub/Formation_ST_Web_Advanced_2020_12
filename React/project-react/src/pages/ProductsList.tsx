import "./ProductsList.css";
import { Component } from "react";
import { Product } from "../model";
import { fetchProducts } from "../api";
import { Link } from "react-router-dom";

interface State {
  products: Product[];
}

class ProductsList extends Component {
  state: State = {
    products: [],
  };

  async componentDidMount() {
    const res = await fetchProducts();
    const products = res.rows.map((r) => r.doc);
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;

    const productsJsx = products.map((p) => (
      <tr key={p._id}>
        <td>{p._id}</td>
        <td>{p.name}</td>
        <td>{p.additionalFeatures}</td>
        <td>
          <Link to={"/products/" + p._id}>Show</Link>
        </td>
      </tr>
    ));

    return (
      <div className="ProductsList">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Additionnal Features</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{productsJsx}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductsList;
