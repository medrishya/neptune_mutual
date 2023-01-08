import { ReactElement } from "react"
import { Connector } from "./Connector"
import { Converter } from "./Converter"
import { Modal } from "./Modal";


export const Main  = (): ReactElement =>{
  return (
    <div>
      <Converter />  
      <Modal child={<Connector />} />
    </div>
  );
}
