import {  ReactElement, useReducer, useState } from "react";
import { CURRENCY_CONVERTER_TITLE } from "../constants";
import { ConverterType, CurrencyList, InputBoxProps } from "../types";
import { convert, string2Upper } from "../utils";


export const Converter = () : ReactElement  => {

  const [nep, set_nep] = useState<number>(0);
  const [busd, set_busd] = useState<number>(0);

  const currency_converter = ({type, value} : ConverterType  ) =>{
    if(type === CurrencyList.NEP){
      set_nep(convert(parseFloat(value)));
      set_busd(convert(parseFloat(value)*3));
    }
    if(type === CurrencyList.BUSD){
      set_nep(convert(parseFloat(value)/3));
      set_busd(convert(parseFloat(value)));
    }
  }

  return (
    <form>
      <div className="form-title">
        <h3>
          {CURRENCY_CONVERTER_TITLE}
        </h3>
      </div>
      <InputBox assigned_state={nep} label={CurrencyList.NEP} currency_converter={currency_converter} />
      <InputBox assigned_state={busd} label={CurrencyList.BUSD} currency_converter={currency_converter} />
      <div className="bottom-bar">
        <span className="span-text">
          Check out my
        </span>
        <a className="primary-button" href="#modal"> Wallet </a>
      </div>
    </form>
  );
}

export const InputBox = ({assigned_state, label, currency_converter} : InputBoxProps ) : ReactElement => {
  return (
    <div className="input-box">
        <label htmlFor={label}>{string2Upper(label)}</label>
          <input id={label} onChange={(event)=>{
            currency_converter({type: label,value: event?.target.value})
          }} type="number" value={assigned_state?assigned_state:""}
            placeholder='0.00' />
    </div>
  );
}
