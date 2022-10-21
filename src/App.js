import React from 'react';
import About from './/components/About';
import coverImage from "../../assets/cover/cover-image.jpg";

function App() {
  return (
    <div>
      <main>
        <About>
        <section className="my-5">
          <h1 id="about">Who am I?</h1>
          <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
        </About>
      </main>
    </div>
  );
}

export default App;
