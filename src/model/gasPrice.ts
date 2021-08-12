export interface Gas {
  status: string;
  message: string;
  result: {
    LastBlock: number;
    SafeGasPrice: number;
    ProposeGasPrice: number;
    FastGasPrice: number;
  };
}
