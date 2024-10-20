import React from 'react'

const AddBtn = ({ type, onClick, children }) => {
  return (
      <button type={type} onClick={onClick}>
          {children}
      </button>
  );
};

export default AddBtn