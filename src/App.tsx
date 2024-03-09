import { Route, Routes, redirect } from 'react-router-dom';
import Login from './routes/Login';
import Sign from './routes/Sign';
import Home from './routes/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route loader={() => redirect('/login')} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign' element={<Sign />} />
      </Routes>
    </div>
  )
}

export default App;
