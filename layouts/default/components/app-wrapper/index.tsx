
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from "layouts/default/components/navigation";
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import { FavoriteProvider } from 'contexts';

export const AppWrapper = () => {

    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error) => {

            },
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <FavoriteProvider>
                    <Navigation />
                </FavoriteProvider>
            </GestureHandlerRootView>
        </QueryClientProvider>
    )
}