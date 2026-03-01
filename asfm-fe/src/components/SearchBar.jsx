import InputGroupForSearch from "./InputGroupForSearch";
import { InputGroup, InputGroupInput, InputGroupAddon } from "./ui/input-group";
import {
  SearchIcon,
} from "lucide-react"

function SearchBar({ value = '', onChange, placeholder = "Search by ..." }) {
  return (
    <div className="flex flex-row rounded-md">
      <InputGroupForSearch
        placeholder_text={placeholder}
        add_search_icon={true}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar;
