import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export const formatRuntime = (minutes: number) => {
    return dayjs.duration(minutes, 'minutes').format('H[h] m[m]')
}