import { useState } from "react";
import style from "./Todo.module.css";

export default function Todo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let userDetails = JSON.parse(localStorage.getItem("users")) || [];

  const submitHandler = (e) => {
    const user = [
      ...userDetails,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      },
    ];
    e.preventDefault();
    if (email === "" || firstName === "" || lastName === "" || phone === "") {
      alert("enter valid details");
    } else {
      console.log(user);
      localStorage.setItem("users", JSON.stdingify(user));
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={style.container1}>
        <input
          type="text"
          placeholder="Enter your Firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter your Lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter your Phonenumber"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div className={style.container2}>
        <table>
          <tr>
            <th>Users FirstName</th>
            <th>Users LaststName</th>
            <th>Users Email</th>
            <th>Users Phone Number</th>
          </tr>
          {userDetails.map((ele, index) => (
            <tr key={index}>
              <td>{ele.firstName}</td>
              <td>{ele.lastName}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
