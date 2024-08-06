import axios from 'axios'

const baseURL = process.env.TMDB_API_URL
const apiKey = process.env.TMDB_API_KEY

export const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
    (config) => {

        config.params = {
            ...config.params,
            api_key: apiKey
        }

        return config
    }
)
