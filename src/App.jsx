import { Container } from '@mui/material'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom'
// pages
import RootLayout from './pages/RootLayout'
import Login from './pages/Login'
import ViewClient from './pages/client/ViewClient'
import AddClient from './pages/client/AddClient'
import Profile from './pages/add client/Profile'
import Modules from './pages/add client/Modules'
import Payment from './pages/add client/Payment'
import Theme from './pages/add client/Theme'
import Success from './pages/add client/Success'
import ProtectedRoute from './pages/protectedRoute'
import { useEffect } from 'react'
const user = 'bvhn'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={'/view-client'}
      element={
        // user ?
        // <RootLayout />
        //  : <Login />
        <ProtectedRoute user={user}>
          <RootLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<ViewClient />} />
      <Route path='/login' element={<Login />} />
      <Route path='add-Client' element={<AddClient />}>
        <Route index element={<Profile />} />
        <Route path='payment' element={<Payment />} />
        <Route path='modules' element={<Modules />} />
        <Route path='theme' element={<Theme />} />
        <Route path='success' element={<Success />} />
      </Route>

      {/* <Route path='hotals'>
        <Route index element={<SearchHotels />} />
        <Route path=':hotelId' element={<Hotel/>} />
      </Route>  */}
    </Route>
  )
)
function App() {
  useEffect(() => {
    if (user) <Navigate to={'login'} />
  }, [])

  // return (
  //   <Container maxWidth='sm'>
  //     <Login />
  //   </Container>
  // )
  return (
    //  <Provider store={store}>
    <RouterProvider router={router} />
    //  </Provider>
  )
}

export default App
