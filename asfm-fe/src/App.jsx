import FilterSelect from './components/custom/FilterSelect';
import { Button } from './components/ui/button';
import { usePetStore } from './hooks/useStore';
import TopNavBar from './components/NonMemberSignInNavBar';
import SearchBar from './components/SearchBar';
import AdminBadge from './components/custom/AdminBadge';

function App() {
  const pets = usePetStore((state) => state.pets);
  const addPet = usePetStore((state) => state.addPet);

  return (
    <>
      <TopNavBar />
      <div className="flex items-center justify-center h-screen gap-4">
        <AdminBadge badgeClassName="font-semibold text-lg px-2" />
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
