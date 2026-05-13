function TeenPage() {
  return (
    <div>
      <section style={hero}>
        <h1>Earn Money With Your Skills 💰</h1>
        <p>Work with real companies and build your future.</p>
        <button style={btn}>Join as Teen</button>
      </section>

      <section style={section}>
        <h2>Why Teens Love Funngro</h2>
        <ul>
          <li>💸 Earn Real Money</li>
          <li>🏠 Work From Home</li>
          <li>📄 Build Resume Early</li>
          <li>🎯 Learn Real Skills</li>
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

export default TeenPage;