
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Navigation } from "layouts/default/components/navigation";
import { QueryClient, QueryClientProvider, QueryCache } from '@tanstack/react-query';
import { FavoriteProvider } from 'contexts';
import { MessagePopup } from 'components/message-popup';
import { useState } from 'react';
import { TErrorMessage } from 'types/response';
import { AxiosError } from 'axios';

export const AppWrapper = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')

    const queryClient = new QueryClient({
        queryCache: new QueryCache({
            onError: (error: unknown) => {
                if (error instanceof AxiosError) {
                    const { response } = error

                    if(response?.data){
                        const data = response?.data as TErrorMessage

                        setMessage(data.status_message)
                        setIsOpen(true)
                    }
                }
            },
        }),
    });

    return (
        <QueryClientProvider client={queryClient}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <FavoriteProvider>
                    <Navigation />
                    <MessagePopup
                        title="Error"
                        message={message}
                        isOpen={isOpen}
                        onCancel={() => setIsOpen(false)}
                    />
                </FavoriteProvider>
            </GestureHandlerRootView>
        </QueryClientProvider>
    )
}