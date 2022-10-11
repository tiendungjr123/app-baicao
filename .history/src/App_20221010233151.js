import './App.css';
import Table from './Components/table';

function App() {
   return (
      <div class="wrapper">
         <header class="header">Header</header>
         <article class="main">
            <Table/>
         </article>
         <aside class="aside aside-1">Aside 1</aside>
         <aside class="aside aside-2">Aside 2</aside>
         <footer class="footer">Footer</footer>
      </div>

   );
}

export default App;
