import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes/routes";

const Master = () => {
  return (
    <div className="master-container">
      <Routes>
        {routes.map((route, idx) => {
          return (
            <Route
              key={idx}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          );
        })}
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Master;
