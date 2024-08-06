
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from "layouts/default/components/navigation";
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';

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
                <Navigation />
            </GestureHandlerRootView>
        </QueryClientProvider>
    )
}