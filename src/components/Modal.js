import React, { useState } from 'react';
import { Confirm } from 'semantic-ui-react';
const AppModal = props => {
  const [isOpen, setOpen] = useState(props.open);
  const close = 2;
  const handleConfirm = () => {
    setOpen(false);
    props.showPlayerProfits();
  };
  return (
    <Confirm
      open={props.open}
      // open={isOpen}
      onCancel={props.setModalStatus}
      onConfirm={props.showPlayerProfits}
      content="Are you sure you want to end the game?"
      confirmButton="Yes"
    />
  );
};

export default AppModal;
