
import { axiosInstance } from 'apis'

export const getMovieDetailRequest = async (id: number) => {
    const { data } = await axiosInstance.get(`/movie/${id}`)
    
    return data
}

export const getMovieRecommendationRequest = async (id: number) => {
    const { data } = await axiosInstance.get(`/movie/${id}/recommendations`)
    
    return data
}