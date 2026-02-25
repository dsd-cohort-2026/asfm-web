import FilterSelect from './components/custom/FilterSelect';
import { Button } from './components/ui/button';
import { usePetStore } from './hooks/useStore';
import TopNavBar from './components/NonMemberSignInNavBar';
import SearchBar from './components/SearchBar';
import CustomBadge from './components/custom/CustomBadge';

function App() {
  const pets = usePetStore((state) => state.pets);
  const addPet = usePetStore((state) => state.addPet);

  return (
    <>
      <TopNavBar />
      <div className='pt-5 flex gap-x-4'>
        <CustomBadge badgeClassName="font-semibold text-sm px-5 bg-destructive text-white " isChecked={false} text={"overdue"}/>
          <CustomBadge badgeClassName="font-semibold text-lg px-2" isChecked={true} text={"Admin"}/>
      </div>
      <div className="flex items-center justify-center h-screen gap-4">
        <Button >Default button</Button>
        <Button disabled>Disabled button</Button>
        <Button variant="destructive">Destructive button</Button>
        <Button variant="outline">Outline button</Button>
        <Button variant="secondary">Secondary button</Button>
        <Button variant="ghost">Ghost button</Button>
        <Button variant="link">Link button</Button>
        <FilterSelect
          selectTriggerClassName="w-[300px]"
          selectItems={['approved', 'pending', 'denied']}
        />
      </div>
    </>
  );
}

export default App;
