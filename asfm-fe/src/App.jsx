import FilterSelect from './components/custom/FilterSelect';
import { Button } from './components/ui/button';
import { usePetStore } from './hooks/useStore';
import TopNavBar from './components/NonMemberSignInNavBar';
import SearchBar from './components/SearchBar';
import {ReusableTable} from './components/table_components'
import {mockLoanedItems} from './features/mockLoanedItems'

function App() {
  // src/features/loaned-items/loanedItemsColumns.js
 const loanedItemsColumns = [
    {
      accessorKey: "itemDescription",
      header: "Item Description",
      textSize: "md",
      headClassName: "min-w-[160px]",
    },
    {
      accessorKey: "userId",
      header: "User ID",
      textSize: "sm",
      headClassName: "w-[120px] text-center",
      cellClassName: "text-center",
    },
  ]


  return (
    <>
      <TopNavBar />
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
      <ReusableTable columns={loanedItemsColumns} data={mockLoanedItems} 
      headerClassName="bg-secondary text-primary-foreground" 
      tablebodyRowClassName="bg-white hover:bg-secondary/20" 
      containerClassName='overflow-auto max-h-150 rounded-lg border border-pale-sky shadow-sm '
      />

      </div>
    </>
  );
}

export default App;
