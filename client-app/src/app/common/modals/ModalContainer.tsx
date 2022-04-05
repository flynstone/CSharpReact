import { observer } from "mobx-react-lite";
import React from "react";
import { Modal } from 'semantic-ui-react';
import { useStore } from "../../stores/store";

export default observer(function ModalContainer() {
  const { modalStore } = useStore();

  return (
    <Modal
      open={modalStore.modal.open}
      onClose={modalStore.closeModal}
      style={{ backgroundColor: '#343434' }}>
      <Modal.Content style={{backgroundColor: '#343434'}}>
        {modalStore.modal.body}
      </Modal.Content>
    </Modal>
  )
});