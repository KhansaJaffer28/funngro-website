import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={styles.nav}>
      <h2>Funngro</h2>
      <div>
        <Link to="/" style={styles.link}>Companies</Link>
        <Link to="/teens" style={styles.link}>Teens</Link>
      </div>
    </div>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    background: "#4f46e5",
    color: "white"
  },
  link: {
    marginLeft: 20,
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Navbar;