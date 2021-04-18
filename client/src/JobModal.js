import {forwardRef} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobModal({open, job, handleClose}) {
    if(!job.title){
        return <div/>
    }
    return (
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
                {job.title} {" - "}
                {job.company}
                {job.company_logo ? (<img className='detail-logo' src={job.company_logo}/>) : ("")}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description" dangerouslySetInnerHTML={{__html:job.description}} />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Close
              </Button>
              <a href={job.url} target="_blank">
                <Button color="primary">
                    Apply
                </Button>
              </a>
            </DialogActions>
          </Dialog>
        </div>
      );
}
