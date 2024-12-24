import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  //   const [details, setDetails] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [detail, setDetail] = useState("");
  const [yourName, setYourName] = useState("");
  const [contact, setContact] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newDetails = {
      name,
      gender,
      age,
      location,
      detail,
      yourName,
      contact,
      selectedFile,
    };
    console.log(newDetails);
    setName("");
    setAge("");
    setContact("");
    setGender("");
    setLocation("");
    setDetail("");
    setYourName("");
    setSelectedFile(null);
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <div className={styles.formRight}>
          <div className={styles.row}>
            <label>Enter Full Name of the lost</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.subRow}>
            <div className={styles.row}>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className={styles.row}>
              <label>Age</label>
              <input
                type="Number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <label>Last seen location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label>More Details</label>
            <input
              type="text"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label>Your Name</label>
            <input
              type="text"
              value={yourName}
              onChange={(e) => setYourName(e.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label>Enter Yout Contact Details</label>
            <input
              type="text"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
