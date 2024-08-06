
import { axiosInstance } from 'apis'

export const getMovieCastRequest = async (id: number) => {
    const { data } = await axiosInstance.get(`/movie/${id}/credits`)
    
    return data
}