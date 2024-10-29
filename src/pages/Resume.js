import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import resumeConfig from "../config/resumeConfig";

const Resume = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <section className="resume-box" >
        {loading && <LoadingSpinner />}
        
        <figure>
          <PdfLoader loading={loading} handleLoad={handleLoad} url={resumeConfig.url} />
        </figure>
      </section>
    </article>
  );
};

const PdfLoader = ({ loading, handleLoad, url }) => {
  return (
    <figure style={{ display: loading ? "none" : "block" }}>
      <iframe
        src={url}
        width="100%"
        height="600"
        title="resume"
        onLoad={handleLoad}
        style={{ border: "none" }}
      />
    </figure>
  );
};

export default Resume;