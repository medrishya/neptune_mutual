
import { ReactElement, ReactNode } from "react"
import  "./Modal.css";

export const Modal = ({ child } : {child: ReactNode}): ReactElement => {
  return (
    <div id="modal" className="modaloverlay">
      <div className="modal">
        <a href="" className="close">&times;</a>
        <div>
          {child}
        </div>
      </div>
    </div>
  );
}