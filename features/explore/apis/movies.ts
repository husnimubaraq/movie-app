
import { axiosInstance } from 'apis'
import { TMovieRequest } from 'features/home/types'

export const getMovieTrendingRequest = async (params: TMovieRequest) => {
    const { data } = await axiosInstance.get('/trending/movie/day', {
        params
    })
    
    return data
}

export const getSearchMovieRequest = async (params: TMovieRequest) => {
    const { data } = await axiosInstance.get('/search/movie', {
        params
    })
    
    return data
}