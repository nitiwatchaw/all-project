import { parseISO, formatDistanceToNow } from 'date-fns'

const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    if (timestamp) {
        // แปลงเวลา   2023-12-07T06:25:18.610Z
        const date = parseISO(timestamp)
        //แปลงวัน Thu Dec 07 2023 13:25:18 GMT+0700 (เวลาอินโดจีน)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return (
        <span title={timestamp}  >
            <i>{timeAgo}</i>
        </span>
    )
}

export default TimeAgo