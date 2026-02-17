import InputGroupForSearch from "./InputGroupForSearch";
import { InputGroup , InputGroupInput , InputGroupAddon } from "./ui/input-group";
import {
    SearchIcon,
  } from "lucide-react"
function SearchBar () {
   return  <div className="bg-secondary flex flex-row m-16 px-2 py-2 rounded-md">
      <InputGroupForSearch/>
    </div>
}
export default SearchBar;