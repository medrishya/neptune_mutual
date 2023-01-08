export type ConverterType = {
  type: CurrencyList,
  value: string
}

export  enum CurrencyList {
  NEP = "nep",
  BUSD= "busd"
}

export type InputBoxProps = {
  assigned_state: number; 
  label: CurrencyList;
  currency_converter: (z:ConverterType) => void;
}