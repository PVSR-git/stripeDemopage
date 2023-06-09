
import './App.css';

function App() {
  return (
    <div class="main-grid">
     <main class="testimonial-grid">
     <div class="flex">
     <img  src="./images/1.png" style={{  width: '300px' ,height:'200px'}} class="testimonial grid-col-span-1" alt="daniel clifford"/></div>
     <div class="flex ">
     <img src="./images/carpenter.jpg"  class="testimonial grid-col-span-2"/></div>
     <div class="flex ">
     <img src="./images/2.png" style={{  width: '300px' ,height:'200px'}}   class="testimonial grid-col-span-1" alt="Jeanette Harmon" /></div>
     <div class="flex1">
     <img src="./images/4.png" class="testimonial grid-col-span-2" alt="Kira Whittle" /></div>
     <div class="flex1 " >
     <img  src="./images/3.png" style={{  width: '300px' ,height:'200px'}}  class="testimonial grid-col-span-1" alt="Patrick Abrams" /></div>
  
  </main>
    <aside>
    
   <h1 className='page-title'>Seeking: impatient,curious optimists</h1>
   <p className='eyebrow'>Stripe is for people who not only enjoy solving hard problems, they thrive on it. if that sounds like you ,come and play a lead role in the next chapter of out story.</p>
    </aside>
 </div>
  );
}

export default App;
