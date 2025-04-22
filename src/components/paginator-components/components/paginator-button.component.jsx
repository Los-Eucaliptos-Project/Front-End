import React from 'react';
import {StyleButtonPaginator} from '../../../styled/paginator.styles';


function ButtonPaginator({ children, isActive, ...rest }) {
  return (
    <StyleButtonPaginator isActive={isActive} {...rest}>
      {children}
    </StyleButtonPaginator>
  );
}

export default ButtonPaginator;