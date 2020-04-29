import React from 'react';
import { FormAddMovie } from '../../../Containers';

const AddMovieComponent = (props) => {
  return (
    <div>
      <FormAddMovie isEdit={props.isEdit} dataMovieEdit={props.dataMovieEdit} />
    </div>
  );
};

export default AddMovieComponent;