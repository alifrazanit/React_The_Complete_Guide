import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
export const ModalComponent = () => {};
export const Modal = forwardRef(({ children, buttonCaption }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
        {children}
        <form method="dialog">
            <button>{buttonCaption}</button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
