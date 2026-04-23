import { Toast, ToastContainer } from "react-bootstrap";

const Popup = (isShown, setIsShown) => {
    return (
        <ToastContainer position="top-center">
            <Toast onClose={() => setIsShown(false)} show={isShown} delay={3000}>
                Testing 1 2 3
            </Toast>
        </ToastContainer>
    );
};

export default Popup;