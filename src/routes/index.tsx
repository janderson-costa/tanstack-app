import { createFileRoute } from '@tanstack/react-router'
import { RouteComponent as HomeComponent } from './home'

export const Route = createFileRoute('/')({ staticData: { title: 'Home', description: 'Página inicial da aplicação' }, component: HomeComponent })
