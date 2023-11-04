import "./App.css";

function App() {
  return (
    <div class="main-grid">
      <main class="testimonial-grid">
        <div class="flex">
          <img
            src="./images/1.png"
            style={{ width: "304px", height: "210px" }}
            class="testimonial"
            alt="daniel clifford"
          />
        </div>
        <div class="flex ">
          <img
            src="./images/carpenter.jpg"
            style={{ width: "230px", height: "300px" }}
            class="testimonial"
          />
        </div>
        <div class="flex ">
          <img
            src="./images/2.png"
            style={{ width: "304px", height: "210px" }}
            class="testimonial"
            alt="Jeanette Harmon"
          />
        </div>
        <div class="flex1">
          <img
            src="./images/4.png"
            style={{ width: "230px", height: "300px" }}
            class="testimonial "
            alt="Kira Whittle"
          />
        </div>
        <div class="flex1 ">
          <img
            src="./images/3.png"
            style={{ width: "304px", height: "200px" }}
            class="testimonial"
            alt="Patrick Abrams"
          />
        </div>
      </main>
      <aside>
        <h1 className="page-title">Seeking: impatient,curious optimists</h1>
        <p className="eyebrow">
          Stripe is for people who not only enjoy solving hard problems, they
          thrive on it. if that sounds like you ,come and play a lead role in
          the next chapter of out story.
        </p>
      </aside>
    </div>
  );
}

export default App;
