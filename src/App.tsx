import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";

import { useGetGasPriceQuery } from "src/features/etherscanApi";

const App = (): JSX.Element => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { data, isLoading } = useGetGasPriceQuery(API_KEY as string);

  if (isLoading) {
    return <CircularProgress />;
  } else {
    return <Typography>{data?.result.SafeGasPrice}</Typography>;
  }
};

export default App;
