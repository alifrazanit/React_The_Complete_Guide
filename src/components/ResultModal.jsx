import React, { forwardRef,useRef, useImperativeHandle } from "react";
export const ResultModal = forwardRef(({result, targetTime}, ref) => {
    const dialog = useRef();
    useImperativeHandle(ref, () =>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })



    return (
      <dialog ref={ref} className="result-modal" open>
        <h2>You {result}</h2>
        <p>
          The target time was <strong>{targetTime} seconds.</strong>
        </p>
        <p>
          You stop the timer with <strong>X seconds left.</strong>
        </p>
        <form method="dialog">
          <button>Close</button>
        </form>
      </dialog>
    );
})