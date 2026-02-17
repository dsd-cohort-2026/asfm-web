import { InputGroup , InputGroupInput , InputGroupAddon } from "./ui/input-group";
import {
    SearchIcon,
  } from "lucide-react"
function InputGroupForSearch() {
     return <div className="basis-1/5">
      <InputGroup className="border-highlight">
        <InputGroupInput placeholder="Search by Animal Id" />
        <InputGroupAddon>
        <SearchIcon/>
        </InputGroupAddon>
      </InputGroup>
    </div>
}
export default InputGroupForSearch;