import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { store } from "./store";
import Loader from "./components/common/Loader/Loader";

// Lazy load pages for better performance
const Home = React.lazy(() => import("./pages/Home/Home"));
const Catalog = React.lazy(() => import("./pages/Catalog/Catalog"));
const Details = React.lazy(() => import("./pages/Details/Details"));
const DesignCatalog = React.lazy(() =>
  import("./pages/DesignCatalog/DesignCatalog")
);

// Suspense fallback component
const PageLoader = () => (
  <div className="flex flex-col gap-4 justify-center items-center min-h-screen">
    <Loader text="Loading page..." />
  </div>
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:id" element={<Details />} />
              <Route path="/design" element={<DesignCatalog />} />
            </Routes>
          </Suspense>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#363636",
                color: "#fff",
              },
            }}
          />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
