import { BrowserRouter, Route, Routes } from 'react-router'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import { Toaster } from 'sonner'
import ChatAppPage from './pages/ChatAppPage'
import ProtectedRoute from './components/auth/protectedRoute'
function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* 1. public routes */}
          <Route
            path='/signin'
            element={<SignInPage />}>
          </Route>
          <Route
            path='/signup'
            element={<SignUpPage></SignUpPage>}>
          </Route>

          {/* 2. protected routes */}
          <Route element={<ProtectedRoute></ProtectedRoute>}>
            <Route
              path='/'
              element={<ChatAppPage></ChatAppPage>}>
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
