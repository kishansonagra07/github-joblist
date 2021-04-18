import {useState} from 'react'
import {MobileStepper,Button,Box} from '@material-ui/core'
import {KeyboardArrowRight,KeyboardArrowLeft} from '@material-ui/icons'

import Job from './Job'
import JobModal from './JobModal'

function Jobs({jobs}) {
    // Pagination
    const totalJob = jobs.length;
    const numPages = Math.ceil(totalJob / 50);
    const [activeStep, setActiveStep] = useState(0);    
    const jobList = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // Modal
    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState({});
    const handleClickOpen = () => {
      setOpen(true);
    };  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <>
        {jobs?.length ? (
            <div className='jobs'>
            <JobModal open={open} job={selectedJob} handleClose={handleClose} />
            <Box display="flex">
                <Box flexGrow={1}>
                    <h2>SOFTWARE ENGINEER JOBS</h2>
                </Box>
                <Box>
                    <h4>Found {totalJob} Jobs</h4>
                </Box>
            </Box>
            {
                jobList.map(job => <Job key={job.id} job={job} onClick={() => {handleClickOpen(); setSelectedJob(job)}} />)
            }
            <div>
                Page {activeStep + 1} of {numPages}
            </div>
            <MobileStepper
                variant="progress"
                steps={numPages}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === numPages - 1}>
                    Next
                    <KeyboardArrowRight />
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    <KeyboardArrowLeft />
                    Back
                    </Button>
                }
                />
        </div>
        ) : (
            <div>Loading....</div>
        )}
        </>
    )
}
export default Jobs;