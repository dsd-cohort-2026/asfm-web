import FilterSelect from './components/custom/FilterSelect';
import { Button } from './components/ui/button';
import { usePetStore } from './hooks/useStore';
import TopNavBar from './components/NonMemberSignInNavBar';
import { ModalDialog } from './components/ModalDialog';
import { useState } from 'react';

function App() {
  const pets = usePetStore((state) => state.pets);
  const addPet = usePetStore((state) => state.addPet);

  // For modal example
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const submitHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <>
      <TopNavBar />
      <div id="examples" className="flex flex-col items-center h-auto gap-4 mt-17.5">
        <div className="flex flex-col items-center justify-center gap-4">
          <Button>Default button</Button>
          <Button disabled>Disabled button</Button>
          <Button variant="destructive">Destructive button</Button>
          <Button variant="outline">Outline button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button variant="link">Link button</Button>
        </div>
        <FilterSelect
          selectTriggerClassName="w-[300px]"
          selectItems={['approved', 'pending', 'denied']}
        />
        <ModalDialog
          trigger={<Button>Open Modal</Button>}
          title={'Title'}
          description={'Description'}
          buttonVariant={'secondary'}
          formId={'my-form'}
          isSubmitting={loading}
          submitHandler={submitHandler}
          open={open}
          setOpen={setOpen}
        >
          {/* any content you need, below is just an example */}
          <form id="my-form" className="flex flex-col min-w-fit max-w-20">
            <label>Name:</label>
            <input type="text" className="border" />
            <label>Email:</label>
            <input type="text" className="border" />
          </form>
        </ModalDialog>
      </div>
    </>
  );
}

export default App;
