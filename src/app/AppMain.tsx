import { QueryClient } from '@tanstack/react-query'
import AppConfig from './AppConfig'
import './app.scss'
import AppRouter from './AppRouter'

// Cấu hình QueryClient cho TanStack Query v5
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      retryDelay: 3000,
      refetchOnReconnect: true,
    },
  },
})

export default function AppMain() {
  return (
    <AppConfig>
      <AppRouter />
    </AppConfig>
  )
}
