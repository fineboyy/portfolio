import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom'
import { Home } from './Home';
import { Portfolio } from './Portfolio';
import { Navbar } from './Navbar';
import { Topbar } from './Topbar';
import { Aside } from './Aside';
import { ProjectModal } from './ProjectModal';

export const Dashboard = () => {

  return (
    <div className="App w-full select-none relative">
      <div className='wrapper container w-full h-full flex'>
        <nav className='fixed h-full w-32'>
          <Navbar />
        </nav>

        <ProjectModal />

        <div className='ml-40 w-full sticky top-0'>

          <nav className='w-full mb-14 sticky top-0 z-40 bg-white'>
            <Topbar />
          </nav>


          <main className='grid grid-cols-10 w-full gap-10 pb-40 relative'>

            <section className='col-span-7'>
              <Outlet />
            </section>
            <Aside />

          </main>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Route>
    </Routes>
  )
}


export default App;
