 
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import './index.css'
import Login from './components/auth/Login.jsx'
import Signup from './components/auth/Signup.jsx'
import { RouterProvider } from 'react-router'
import Home  from './components/Home.jsx'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
const appRouter =createBrowserRouter([{
  path:'/',
  element:<Home/>
},{
  path:'/login',
  element:<Login/>
},{
  path:'/signup',
  element:<Signup/>
},{
  path:'/jobs',
  element:<Jobs/>
},
{
  path:'/description/:id',
  element:<JobDescription/>
},
{
  path:'/browse',
  element:<Browse/>
},{
  path:'/profile',
  element:<Profile/>
}
])
function App() { 
  return ( 
    <> 
    <div>
        <RouterProvider router={appRouter}/>
    </div> 
    </> 
 
  )
}

export default App
