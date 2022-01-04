import React, { useRef } from "react";

interface IModal {
    setModal: (e: boolean) => void;
    content: any;
}

export default function Modal({ setModal, content }: IModal) {
    const modal: any = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        setModal(false);
    }

    return <div className="modal" ref={modal}>
        <div className="modal-content">
            <span className="close" onClick={() => closeModal()}>&times;</span>
            {content}
        </div>
    </div>
}