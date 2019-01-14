import React from 'react';
import { Modal, Button } from '@patternfly/react-core';
import EnrolmentForm from './EnrolmentForm';

class EnrolmentModal extends React.Component {
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
                    title="New Enrolment"
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
                    <EnrolmentForm/>
                </Modal>
            </React.Fragment>
        );
    }
}

export default EnrolmentModal;