
import PropTypes from 'prop-types';
import {LabelFilter, InputFilter} from "./Filter.styled"

export default function Filter({value, onFilter}) {
  return (
    <LabelFilter htmlFor='filter'> Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        placeholder='Enter name of contact'
        onChange={onFilter}
        value={value}/>
    </LabelFilter>
  )

};

Filter.propTypes  = {
    value: PropTypes.any,
  onFilter: PropTypes.func.isRequired,
}
