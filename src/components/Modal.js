import React from 'react';
import { Confirm } from 'semantic-ui-react';
const AppModal = props => {
  return (
    <Confirm
      open={props.open}
      onCancel={props.setModalStatus}
      onConfirm={props.showPlayerProfits}
      content="Are you sure you want to end the game?"
      confirmButton="Yes"
    />
  );
};

export default AppModal;
