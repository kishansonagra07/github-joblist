import {useEffect,useState} from 'react'
import './App.css';
import Jobs from './Jobs'

const API_URL = 'http://localhost:5000/job-list';

async function fetchJobs(updateCb) {
  const res = await fetch(API_URL);
  const json = await res.json();
  updateCb(json);
}

function App() {
  const [jobList,setJobList] = useState([]);

  useEffect(() => {
    fetchJobs(setJobList);
  }, [])
  return (
    <div className="App">
      <Jobs jobs={jobList} />
    </div>
  );
}

export default App;
