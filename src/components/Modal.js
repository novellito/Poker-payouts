import React, { useState } from 'react';
import { Confirm } from 'semantic-ui-react';
const AppModal = props => {
  const [isOpen, setOpen] = useState(props.open);
  const close = 2;
  return (
    <Confirm
      open={isOpen}
      onCancel={close}
      onConfirm={close}
      content="Are you sure you want to end the game?"
      confirmButton="Yes"
    />
  );
};

export default AppModal;
