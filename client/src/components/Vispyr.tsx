const Vispyr = () => {
  return (
    <>
      <div className="project-logo">
        <img id="vispyr-logo" src="src/assets/vispyr-flame-cropped.png" />
        <img id="vispyr-text" src="src/assets/vispyr-text.png" />
      </div>

      <div className="project-subhead">
        <h3>Code-Level Observability in Minutes</h3>
        <a href="https://vispyr.com" target="_blank" className="case-study">
          Case Study
          <img className="button-svg" src="src/assets/diag-arrow.svg" />
        </a>
      </div>

      <p>
        Vispyr is an open-source, easy to install observability tool that brings
        continuous profiling to small development teams by combining profiles
        with traditional telemetry data to provide code-level insights into an
        application’s performance. It simplifies the setup and configuration of
        a full observability platform by automating the deployment of a
        self-hosted backend on AWS.
      </p>

      <video
        className="project-content"
        src="src/assets/grafana-dashboard.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <p>
        Vispyr uses a TypeScript-based CLI to deploy the observability platform
        to AWS, returning a Vispyr Agent that runs alongside an application in
        just a single command.
      </p>

      <img
        className="project-content"
        src="src/assets/Vispyr-Infrastructure.svg"
      />
    </>
  );
};

export default Vispyr;
