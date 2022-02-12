import Rec from "./UI/Rec";
import "./Filter.css";
const Filter = (props) => {
  return (
    <Rec cs="left">
      <h3>Filters </h3>
      <hr></hr>
      <div className="Filters">
        <select className="select">
          <option style={{ display: "none" }} selected>
            Products
          </option>
          {props.products.map((x) => (
            <option>{x.product_name}</option>
          ))}
        </select>
        <select className="select">
          <option style={{ display: "none" }} selected>
            State
          </option>
          {props.products.map((x) => (
            <option>{x.address.state}</option>
          ))}
        </select>
        <select className="select">
          <option style={{ display: "none" }} selected>
            City
          </option>
          {props.products.map((x) => (
            <option>{x.address.city}</option>
          ))}
        </select>
      </div>
    </Rec>
  );
};
export default Filter;
