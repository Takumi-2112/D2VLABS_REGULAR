function InnovatorCorporation({
  innovator,
  setInnovator,
  corporation,
  setCorporation,
}) {
  return (
    <div className="maaster-inn-corp">
      {innovator && (
        <div className="innovator-section">
          <h2>For Innovators</h2>
          <ul>
            <li>
              <strong>Resources & Infrastructure:</strong> Access co-working
              space, lab tools, and cloud credits to help you build fast and
              stay lean.
            </li>
            <li>
              <strong>Mentorship & Advisory:</strong> Learn from founders,
              investors, and engineers who’ve done it — 1-on-1.
            </li>
            <li>
              <strong>Business Development Support:</strong> We connect you to
              the right markets, early adopters, and growth partners.
            </li>
            <li>
              <strong>Founder Wellness:</strong> Holistic support for your
              mental health, routines, and sustainable leadership growth.
            </li>
          </ul>
        </div>
      )}

      {corporation && (
        <div className="corporation-section">
          <h2>For Corporations</h2>
          <ul>
            <li>
              <strong>Project Feasibility:</strong> We assess if your AI ideas
              are technically and economically viable before building.
            </li>
            <li>
              <strong>Testing & Validation:</strong> Deploy proof-of-concepts in
              real-world sandboxed environments, with metrics that matter.
            </li>
            <li>
              <strong>Data Preparation:</strong> We clean, structure, and label
              your data for seamless integration into modern ML pipelines.
            </li>
            <li>
              <strong>RAG Integration:</strong> Implement Retrieval-Augmented
              Generation to unlock business intelligence from your internal
              data.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default InnovatorCorporation;
