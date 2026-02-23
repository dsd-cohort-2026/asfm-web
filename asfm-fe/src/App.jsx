import './App.css'
import FilterSelect from './components/custom/FilterSelect'
import { Button } from './components/ui/button'
import { usePetStore } from './hooks/useStore'
import  TopNavBar  from './components/NonMemberSignInNavBar'
import DashboardCard from './components/custom/DashboardCard'

function App() {
  const pets = usePetStore((state) => state.pets)
  const addPet= usePetStore((state) => state.addPet)

  return (

    <>
      <TopNavBar/>
      <div className="flex items-center justify-center h-[250px] gap-4">
      <Button className="bg-secondary text-secondary-foreground font-montserrat text-h2 px-xl py-xl">
        Testing ShadeCn Config
      </Button>
      <FilterSelect selectTriggerClassName="w-[300px]" selectItems={["approved", "pending", "denied"]} />
      </div>
      <div className='flex justify-center'>Admin Dashboard Card</div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-5'>
        <DashboardCard title={"Testing Title"} navLink={"admin-portal"} itemsArray={[{name: 'Chewy', species: 'dog', sex: 'male', dob: '09/15/16'}, {name: 'Bailey', species: 'dog', sex: 'female', dob: '12/26/19'}]}/>
        <DashboardCard title={"Testing Title 2"} navLink={"admin-portal"} itemsArray={[{name: 'Chewy', species: 'dog', sex: 'male', dob: '09/15/16'}, {name: 'Bailey', species: 'dog', sex: 'female', dob: '12/26/19'}]}/>
      </div>
    </>
  )
}

export default App
