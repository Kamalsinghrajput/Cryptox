import { useParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
function Dashboard() {
  const { coinName } = useParams();

  return (
    <>
      {/* <Navbar /> */}

      {coinName}
    </>
  );
}
export default Dashboard;
