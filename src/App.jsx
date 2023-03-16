import { Container } from '@mui/material'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
// page
import RootLayout from './page/RootLayout'
import Login from './page/Login'
import ViewClient from './page/client/ViewClient'
import AddClient from './page/client/AddClient'
import Profile from './page/add client/Profile'
import Modules from './page/add client/Modules'
import Payment from './page/add client/Payment'
import Theme from './page/add client/Theme'
import Success from './page/add client/Success'
import ProtectedRoute from './pages/protectedRoute'
const User = false
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path={'/'}
      element={
        <ProtectedRoute>
          <RootLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<ViewClient />} />
      <Route path='login' element={<Login />} />
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
