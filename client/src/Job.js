import {Paper,Typography} from '@material-ui/core'

const getMDY = (ts) => {
    return ts.toDateString().split(' ').slice(0,3).join(' '); // will return like Fri Jun 14
}

const makeDate = (timestamp) => {
    const date = new Date(timestamp);
    const dateStr =  getMDY(date);
    const todayStr = getMDY(new Date());
    const yesterdayStr = getMDY(new Date(Date.now() - (24*3600*1000)));
    if (dateStr === todayStr) {
        return 'today';
    } else if (dateStr === yesterdayStr) {
        return 'yesterday';
    } else {
        return dateStr;
    }
}

export default function Job({job, onClick}) {
    return (
        <Paper onClick={onClick} className='job'>
            <div>
                <Typography variant="h6">{job.title}</Typography>
                <Typography variant="h5">{job.company}</Typography>
                <Typography>{job.location}</Typography>
            </div>
            <div>
            <Typography>{makeDate(job.created_at)}</Typography>
            </div>
        </Paper>
    )
}
