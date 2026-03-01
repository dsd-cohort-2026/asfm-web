<<<<<<< HEAD
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
=======
import { InputGroup, InputGroupInput, InputGroupAddon } from './ui/input-group';
import { SearchIcon } from 'lucide-react';
function InputGroupForSearch({ placeholder_text, add_search_icon = false }) {
  return (
    <div>
      <InputGroup className="border-highlight">
        <InputGroupInput placeholder={placeholder_text} />
        <InputGroupAddon>{add_search_icon && <SearchIcon />}</InputGroupAddon>
      </InputGroup>
    </div>
  );
>>>>>>> 6d7c57cc359762adde2507787215e6d67f689f4d
}
export default InputGroupForSearch;
