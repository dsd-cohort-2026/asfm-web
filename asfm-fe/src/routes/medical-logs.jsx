import { createFileRoute } from '@tanstack/react-router'
import BasicNavBar from '@/components/basicNavBar'
import SearchBar from '@/components/SearchBar' 

export const Route = createFileRoute('/medical-logs')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex flex-col gap-4'>
    <BasicNavBar/>
    <div className='flex justify-center'>
        Medical History
    </div>
    <SearchBar/>
  </div>
}
