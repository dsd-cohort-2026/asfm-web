import { InputGroup , InputGroupInput , InputGroupAddon } from "./ui/input-group";
import {
    SearchIcon,
  } from "lucide-react"
function InputGroupForSearch({ placeholder_text, add_search_icon, value, onChange }) {
  return (
    <InputGroup>
      <InputGroupInput
        placeholder={placeholder_text}
        value={value}
        onChange={onChange}
      />
      {add_search_icon && <InputGroupAddon><SearchIcon /></InputGroupAddon>}
    </InputGroup>
  )
}
export default InputGroupForSearch;
