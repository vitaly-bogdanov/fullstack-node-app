import React, { FC, ChangeEvent } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TSearchMethod from '../../abstractions/types/TSearchMethod';

interface Props {
  searchMethod: TSearchMethod
  searchQuery: string
  change(event: ChangeEvent<HTMLInputElement>): void
  input(event: ChangeEvent<HTMLInputElement>): void
}

const SearchField: FC<Props> = props => {

  return (
    <form noValidate autoComplete="off">
      <h6>State</h6>
      <TextField id="standard-search" label={props.searchMethod} type="search" name="searchName" value={props.searchQuery} onChange={props.input} /> <br />
      <FormControl component="fieldset">
        <FormLabel component="legend">Поиск по:</FormLabel>
        <RadioGroup aria-label="search-method" name="searchMethod" value={props.searchMethod} onChange={props.change}>
          <FormControlLabel value="id" control={<Radio />} label="id" defaultChecked/>
          <FormControlLabel value="name" control={<Radio />} label="name" />
        </RadioGroup>
      </FormControl>
    </form>
  );
};

export default SearchField;