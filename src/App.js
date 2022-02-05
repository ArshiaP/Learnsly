import Domains from './components/Domain/Domains';
import Subdomains from './components/SubdomainsList/Subdomains';
import JobCard from './components/Card/job-card';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CourseCard from './components/Card/course-card';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="jobcard" element={<JobCard />} />
          <Route path="coursecard" element={<CourseCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
