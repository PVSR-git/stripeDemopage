
import './App.css';

function App() {
  return (
    <div class="main-grid">
     <main class="testimonial-grid">
    <article class="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
      <div class="flex">
        <div>
          <img  src="./images/madhu.jpg" alt="daniel clifford"/>
        </div>
      
      </div>
 
    </article>
    <article class="testimonial flow bg-secondary-400 text-neutral-100">
      <div class="flex">
        <div>
          <img src="./images/madhu.jpg" alt="Jonathan Walters"/>
        </div>
       
       
      </div>
    
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
          <img src="./images/madhu.jpg" alt="Jeanette Harmon" />
        </div>
       
      </div>
     
    </article>
    <article class="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
      <div class="flex">
        <div>
          <img class="border-primary-400" src="./images/madhu.jpg" alt="Patrick Abrams" />
        </div>
      
      </div>
 
    </article>
    <article class="testimonial flow bg-neutral-100 text-secondary-400">
      <div class="flex">
        <div>
          <img src="./images/madhu.jpg" alt="Kira Whittle" />
        </div>
       </div>
    </article>
  </main>
    <aside>
    
   <h1 className='page-title'>Seeking: impatient,curious optimists</h1>
   <p className='eyebrow'>Stripe is for people who not only enjoy solving hard problems, they thrive on it. if that sounds like you ,come and play a lead role in the next chapter of out story.</p>
    </aside>
 </div>
  );
}

export default App;
