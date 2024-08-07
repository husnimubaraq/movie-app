import { TMovie } from 'features/home'
import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from 'react'

type FavoriteContextValue = {
    favorites: TMovie[]
    addToFavorite: (movie: TMovie) => void
}

const FavoriteContext = createContext<FavoriteContextValue | undefined>(
    undefined
)

const FavoriteProvider = (props: PropsWithChildren) => {
    const { children } = props

    const [favorites, setFavorites] = useState<TMovie[]>([])

    const addToFavorite = (movie: TMovie) => {
        const dataOld = [...favorites]

        const findIndex = dataOld.findIndex(x => x.id === movie.id)

        if(findIndex > -1){
            dataOld.splice(findIndex, 1)
        }else{
            dataOld.push(movie)
        }

        setFavorites(dataOld)
    }

    const value = {
        favorites,
        addToFavorite
    }

    return (
        <FavoriteContext.Provider 
            value={value}
        >
            {children}
        </FavoriteContext.Provider>
    )
}

const useFavoriteContext = () => {
    const context = useContext(FavoriteContext)
    if (context === undefined) {
        throw new Error(
            'useFavoriteContext must be used within a FavoriteProvider'
        )
    }
    return context
}

export { FavoriteProvider, useFavoriteContext }