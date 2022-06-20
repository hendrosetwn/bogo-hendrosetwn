import React from "react";
import "../assets/scss/index.scss";
import { Validation } from "../services/Validation";
import alertify from "alertifyjs";
import { useNavigate } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      date_of_birth: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      province: "",
      password: "",
      confirm_password: "",
      terms: false,
    };
  }

  handleNext = (e) => {
    const formPage = e.target.parentElement.parentElement;
    formPage.setAttribute("style", "display:none;");

    const nextPage = formPage.nextElementSibling;
    nextPage.removeAttribute("style");
  };

  handlePrev = (e) => {
    const formPage = e.target.parentElement.parentElement;
    formPage.setAttribute("style", "display:none;");

    const prevPage = formPage.previousElementSibling;
    prevPage.removeAttribute("style");
  };

  handleSubmit = () => {
    const nameRequired = Validation.required(
      "name",
      this.state.name,
      "Name Must Be Filled"
    );
    const dateOfBirthRequired = Validation.required(
      "date_of_birth",
      this.state.date_of_birth,
      "Date of Birth Must Be Filled"
    );
    const emailRequired = Validation.required(
      "email",
      this.state.email,
      "Email Address Must Be Filled"
    );
    const phoneRequired = Validation.required(
      "phone",
      this.state.phone,
      "Phone Number Must Be Filled",
    );
    const addressRequired = Validation.required(
      "address",
      this.state.address,
      "Address Must Be Filled"
    );
    const cityRequired = Validation.required(
      "city",
      this.state.city,
      "City Must Be Filled"
    );
    const provinceRequired = Validation.required(
      "province",
      this.state.province,
      "Province Must Be Filled"
    );
    const passwordRequired = Validation.required(
      "password",
      this.state.password,
      "Password Must Be Filled"
    );
    const confirmPasswordRequired = Validation.required(
      "confirm_password",
      this.state.confirm_password,
      "Confirm Password Must Be Filled"
    );
    const termsRequired = Validation.isChecked(
      "terms",
      this.state.terms,
      "Please agree this terms and conditions"
    );
    let passwordEqual = true;
    if (passwordRequired && confirmPasswordRequired) {
      passwordEqual = Validation.isEqual(
        "confirm_password",
        [this.state.password, this.state.confirm_password],
        "Password And Confirm Password Must Same"
      );
    }

    const allValidationRequired =
      nameRequired &&
      dateOfBirthRequired &&
      emailRequired &&
      phoneRequired &&
      addressRequired &&
      cityRequired &&
      provinceRequired &&
      passwordRequired &&
      confirmPasswordRequired &&
      termsRequired &&
      passwordEqual;

    if (!allValidationRequired) {
      alertify.alert("Validation Error !", "All Must Be Filled !");
    } else {
      this.saveToStorage({
        name: this.state.name,
        dateOfBirth: this.state.date_of_birth,
        email: this.state.email,
        phone: this.state.phone,
        address: this.state.address,
        city: this.state.city,
        province: this.state.province,
        password: this.state.password,
      });
    }
  };

  saveToStorage = (data) => {
    if (!localStorage.getItem("users")) {
      localStorage.setItem("users", JSON.stringify([]));
    }
    let users = JSON.parse(localStorage.getItem("users"));
    let newUser = {
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      email: data.email,
      phone: data.phone,
      address: data.address,
      city: data.city,
      province: data.province,
      password: data.password,
      carts: [],
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    this.props.navigate("/login");
  };

  render() {
    return (
      <form className="register">
        <div className="register__title">REGISTER</div>

        <div className="pageone">
          <div className="pageone__name">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              autoComplete="off"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pageone__date">
            <label htmlFor="date_of_birth">Date Of Birth</label>
            <input
              id="date_of_birth"
              type="date"
              onChange={(e) => this.setState({ date_of_birth: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pageone__email">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="text"
              autoComplete="off"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pageone__phone">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="text"
              autoComplete="off"
              onChange={(e) => this.setState({ phone: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pageone__btn">
            <button type="button" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>

        <div className="pagetwo" style={{ display: "none" }}>
          <div className="pagetwo__address">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              onChange={(e) => this.setState({ address: e.target.value })}
            ></textarea>
            <p></p>
          </div>

          <div className="pagetwo__city">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              autoComplete="off"
              onChange={(e) => this.setState({ city: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pagetwo__province">
            <label htmlFor="Province">Province</label>
            <select
              id="province"
              name="province"
              className="form-select"
              onChange={(e) => this.setState({ province: e.target.value })}
            >
              <option defaultValue="Pick">Pick a province</option>
              <option defaultValue="aceh">Aceh</option>
              <option defaultValue="bali">Bali</option>
              <option defaultValue="banten">Banten</option>
              <option defaultValue="bangka belitung">Bangka Belitung</option>
              <option defaultValue="bengkulu">Bengkulu</option>
              <option defaultValue="gorontalo">Gorontalo</option>
              <option defaultValue="jakarta">Jakarta</option>
              <option defaultValue="jambi">Jambi</option>
              <option defaultValue="jawa barat">Jawa Barat</option>
              <option defaultValue="jawa tengah">Jawa Tengah</option>
              <option defaultValue="jawa timur">Jawa Timur</option>
              <option defaultValue="kalimantan barat">Kalimantan Barat</option>
              <option defaultValue="kalimantan selatan">
                Kalimantan Selatan
              </option>
              <option defaultValue="kalimantan tengah">
                Kalimantan Tengah
              </option>
              <option defaultValue="kalimantan timur">Kalimantan Timur</option>
              <option defaultValue="kalimantan utara">Kalimantan Utara</option>
              <option defaultValue="lampung">Lampung</option>
              <option defaultValue="maluku">Maluku</option>
              <option defaultValue="nusa tenggara barat">
                Nusa Tenggara Barat
              </option>
              <option defaultValue="nusa tenggara timur">
                Nusa Tenggara Timur
              </option>
              <option defaultValue="papua">Papua</option>
              <option defaultValue="riau">Riau</option>
              <option defaultValue="sulawesi barat">Sulawesi Barat</option>
              <option defaultValue="sulawesi selatan">Sulawesi Selatan</option>
              <option defaultValue="sulawesi tengah">Sulawesi Tengah</option>
              <option defaultValue="sulawesi utara">Sulawesi Utara</option>
              <option defaultValue="sumatera barat">Sumatera Barat</option>
              <option defaultValue="sumatera selatan">Sumatera Selatan</option>
              <option defaultValue="sumatera utara">Sumatera Utara</option>
              <option defaultValue="yogyakarta">Yogyakarta</option>
            </select>
            <p style={{ color: "red" }}></p>
          </div>

          <div className="pagetwo__btn">
            <button type="button" onClick={this.handlePrev}>
              Prev
            </button>
            <button type="button" onClick={this.handleNext}>
              Next
            </button>
          </div>
        </div>

        <div className="pagethree" style={{ display: "none" }}>
          <div className="pagethree__password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <p></p>
          </div>

          <div className="pagethree__confirm_password">
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              id="confirm_password"
              type="password"
              onChange={(e) =>
                this.setState({ confirm_password: e.target.value })
              }
            />
            <p></p>
          </div>

          <div className="pagethree__agree">
            <input
              id="terms"
              type="checkbox"
              onChange={(e) => this.setState({ terms: true })}
            />
            <label htmlFor="terms">I agree with the terms and conditions.</label>
          </div>
            <p className="pagethree__warning"></p>

          <div className="pagethree__btn">
            <button type="button" onClick={this.handlePrev}>
              Prev
            </button>
            <button type="button" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const RegisterNavigate = () => {
  const navigate = useNavigate();
  return <Register navigate={navigate} />;
};

export default RegisterNavigate;
