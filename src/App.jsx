import "./styles/theme.css";
import "./styles/global.css";
import { MyGrid } from "./components/MyGrid";
import {Cloudy} from "lucide-react"
export default function App() {

  return (
    //React Fragment
    <>
      <MyGrid />
    <Cloudy />
    </>
  );
}

