import '@mui/material';
import 'react-icons';
import 'react-icons/bi';
import 'react-icons/md';
import 'react-icons/bs';
import 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PostView from './components/views/PostView';
import CreatePostView from './components/views/CreatePostView';
import ProfileView from './components/views/ProfileView';
import LoginView from './components/views/LoginView';
import SignupView from './components/views/SignupView';
import ExploreView from './components/views/ExploreView';
import PrivateRoute from './components/PrivateRoute';
import SearchView from './components/views/SearchView';
import MessengerView from './components/views/MessengerView';
import { initiateSocketConnection } from './helpers/socketHelper';
import ExternalApiSearch from './components/ExternalApiSearch';
import './components/globalStyles.css';

function App() {
  initiateSocketConnection();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<ExploreView />} />
          <Route path="/posts/:id" element={<PostView />} />
          <Route
            path="/posts/create"
            element={
              <PrivateRoute>
                <CreatePostView />
              </PrivateRoute>
            }
          />
          <Route
            path="/messenger"
            element={
              <PrivateRoute>
                <MessengerView />
              </PrivateRoute>
            }
          />
          <Route path="/search" element={<SearchView />} />
          <Route path="/users/:id" element={<ProfileView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/signup" element={<SignupView />} />
          <Route path="/externalApi" element={<ExternalApiSearch />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
