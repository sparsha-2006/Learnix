import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import logo from "../assets/Learnix.png";

export default function AuthCard({
  mode,
  subtitle,
  buttonText,
  bottomText,
  bottomLinkText,
  bottomLinkHref,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/student");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={logo} alt="Logo" style={styles.logo}/>
        <h2 style={styles.heading}>{mode === "login" ? "Login" : "Sign Up"}</h2>
        <p>{subtitle}</p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          {loading ? "Please wait..." : buttonText}
        </button>

        <button onClick={handleGoogle} style={styles.googleButton}>
          Continue with Google
        </button>

        <p>
          {bottomText}{" "}
          <Link to={bottomLinkHref} style={styles.link}>{bottomLinkText}</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  logo:{
    width: "100px",
    display: "block",
    margin: "0 auto 1rem",
  },
  heading: {
    color: "#075985",
    fontWeight: "500",
    fontSize: "35px",
  },
  link: {
    color: "#075985",
    textDecoration: "none",
    fontWeight: "bold",
  },
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f4f8",
  },
  card: {
    padding: "2rem",
    background: "white",
    borderRadius: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid black",
    borderRadius:"5px",
    color:"black",
    background:"whilte",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#075985",
    borderRadius: "50px",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  googleButton: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    background: "white",
    color: "black",
    borderRadius: "50px",
    border: "black 1px solid",
    cursor: "pointer",
  },
};