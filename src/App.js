
import { ToastContainer } from 'react-toastify';
import AuthorProvider from './context/AuthorProvider';
import MovieProvider from './context/MovieProvider';
import AppRouter from './router/AppRouter';


function App() {
  return (
    <div  className="dark:bg-[#23242a] min-h-screen">
      <AuthorProvider>
        <MovieProvider>
          <AppRouter/>
          <ToastContainer/>
        </MovieProvider>      
      </AuthorProvider>

    </div>
  );
}

export default App;
