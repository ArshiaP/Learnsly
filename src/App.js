import Domains from './components/Domain/Domains';
import Subdomains from './components/SubdomainsList/Subdomains';
import JobCard from './components/Card/job-card';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CourseCard from './components/Card/course-card';
import ProfilePage from './components/ProfilePage/profile-page';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="jobcard" element={<JobCard />} />
          <Route path="coursecard" element={<CourseCard />} />
          <Route path="profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
