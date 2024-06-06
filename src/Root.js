import "./main.css";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
      <div className={"bg-amber-100 h-screen"}>
        <Outlet/>
      </div>
  );
}


