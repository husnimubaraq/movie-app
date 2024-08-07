export type TResponse<T> = {
    page: number
    results: T
    total_pages: number
    total_results: number
}

export type TErrorMessage = {
    status_code: number
    status_message: string
    success: boolean
}