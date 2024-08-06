
import { axiosInstance } from 'apis'
import { TMovieRequest } from 'features/home/types'

export const getMoviePopularRequest = async (params: TMovieRequest) => {
    const { data } = await axiosInstance.get('/movie/popular', {
        params
    })
    
    return data
}