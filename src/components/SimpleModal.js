import React from 'react';
import { Modal, Button } from '@patternfly/react-core';
import SimpleForm from './SimpleForm';

class SimpleModal extends React.Component {
    state = {
        isModalOpen: false
    };

    handleModalToggle = () => {
        this.setState(({ isModalOpen }) => ({
            isModalOpen: !isModalOpen
        }));
    };

    render() {
        const { isModalOpen } = this.state;

        return (
            <React.Fragment>
                <Button variant="primary" onClick={this.handleModalToggle}>
                    New Enrolment
                </Button>
                <Modal
                    title="Modal Header"
                    isOpen={isModalOpen}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="cancel" variant="secondary" onClick={this.handleModalToggle}>
                            Cancel
                        </Button>,
                        <Button key="confirm" variant="primary" onClick={this.handleModalToggle}>
                            Confirm
                        </Button>
                    ]}
                >
                    <SimpleForm/>
                </Modal>
            </React.Fragment>
        );
    }
}

export default SimpleModal;