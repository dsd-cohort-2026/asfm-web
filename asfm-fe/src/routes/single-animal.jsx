import { createFileRoute } from '@tanstack/react-router'
import SingleAnimalPage from '@/pages/SingleAnimalPage'
import BasicNavBar from '@/components/basicNavBar'

export const Route = createFileRoute('/single-animal')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
    <>
    <BasicNavBar/>
    <SingleAnimalPage />
    </>
)
}
