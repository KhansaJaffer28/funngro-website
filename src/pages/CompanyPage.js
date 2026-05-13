function CompanyPage() {
  return (
    <div>
      <section style={hero}>
        <h1>Hire Smart Teen Talent 🚀</h1>
        <p>Access verified teenagers ready to work on real business projects.</p>
        <button style={btn}>Post a Project</button>
      </section>

      <section style={section}>
        <h2>Why Companies Love Funngro</h2>
        <ul>
          <li>✔ Verified Talent</li>
          <li>✔ Affordable Workforce</li>
          <li>✔ Fresh Gen-Z Ideas</li>
          <li>✔ Fast Delivery</li>
        </ul>
      </section>
    </div>
  );
}

const hero = {
  textAlign: "center",
  padding: "80px",
  background: "linear-gradient(120deg,#6366f1,#9333ea)",
  color: "white"
};

const section = { padding: "50px", textAlign: "center" };

const btn = {
  padding: "12px 25px",
  marginTop: 20,
  background: "#facc15",
  border: "none",
  borderRadius: 6,
  fontWeight: "bold"
};

export default CompanyPage;