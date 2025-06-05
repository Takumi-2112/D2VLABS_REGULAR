import "../styles/InnovatorCorporation.css";

function InnovatorCorporation({
  innovator,
  setInnovator,
  corporation,
  setCorporation,
}) {
  return (
    <div className="master-inn-corp">
      {innovator && (
        <div className="innovator-section">
          <div className="innovator-button-content">
            <p className="inn-button-tagline">
              <strong>Resources & Infrastructure:</strong> Access co-working
              space, lab tools, and cloud credits to help you build fast and
              stay lean.
            </p>
            <p className="inn-button-tagline">
              <strong>Mentorship & Advisory:</strong> Learn from founders,
              investors, and engineers who’ve done it — 1-on-1.
            </p>
            <p className="inn-button-tagline">
              <strong>Business Development Support:</strong> We connect you to
              the right markets, early adopters, and growth partners.
            </p>
            <p className="inn-button-tagline">
              <strong>Founder Wellness:</strong> Holistic support for your
              mental health, routines, and sustainable leadership growth.
            </p>
          </div>
        </div>
      )}

      {corporation && (
        <div className="corporation-section">
          <div className="corporation-button-content">
            <p className="corp-button-tagline">
              <strong>Project Feasibility:</strong> We assess if your AI ideas
              are technically and economically viable before building.
            </p>
            <p className="corp-button-tagline">
              <strong>Testing & Validation:</strong> Deploy proof-of-concepts in
              real-world sandboxed environments, with metrics that matter.
            </p>
            <p className="corp-button-tagline">
              <strong>Data Preparation:</strong> We clean, structure, and label
              your data for seamless integration into modern ML pipelines.
            </p>
            <p className="corp-button-tagline">
              <strong>RAG Integration:</strong> Implement Retrieval-Augmented
              Generation to unlock business intelligence from your internal
              data.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InnovatorCorporation;
