function Process() {
  const steps = [
    "Discovery",
    "Design",
    "Development",
    "Launch"
  ];

  return (
    <section className="process-section">
      <div className="container">

        <div className="section-title">
          <span>PROCESS</span>
          <h2>How I Work</h2>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>
              <h1>0{index + 1}</h1>
              <h3>{step}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;