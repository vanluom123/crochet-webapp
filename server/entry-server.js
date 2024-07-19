import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import React, { useState } from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Outlet, Routes, Route } from "react-router-dom";
const AppBar = () => {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", justifyContent: "start", backgroundColor: "#333", color: "#FFFFFF", padding: "10px 10px", width: "100vw" }, children: [
    /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none", color: "#FFFFFF", marginRight: "20px" }, to: "/", children: "Home" }),
    /* @__PURE__ */ jsx(Link, { style: { textDecoration: "none", color: "#FFFFFF", marginRight: "20px" }, to: "/contact", children: "Contact" })
  ] });
};
const Contact = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(AppBar, {}),
    /* @__PURE__ */ jsx("h6", { children: "Contact" })
  ] });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(AppBar, {}),
    /* @__PURE__ */ jsx("h6", { children: "Home" })
  ] });
};
const reactLogo = "/assets/react-CHdo91hT.svg";
const viteLogo = "/vite.svg";
function App() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("a", { href: "https://vitejs.dev", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }),
      /* @__PURE__ */ jsx("a", { href: "https://react.dev", target: "_blank", children: /* @__PURE__ */ jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })
    ] }),
    /* @__PURE__ */ jsx("h1", { children: "Vite + React" }),
    /* @__PURE__ */ jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxs("button", { onClick: () => setCount((count2) => count2 + 1), children: [
        "count is ",
        count
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Edit ",
        /* @__PURE__ */ jsx("code", { children: "src/App.tsx" }),
        " and save to test HMR"
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" }),
    /* @__PURE__ */ jsx(Outlet, {})
  ] });
}
const RoutesComponent = () => {
  return /* @__PURE__ */ jsx(Routes, { children: /* @__PURE__ */ jsxs(Route, { path: "/", element: /* @__PURE__ */ jsx(App, {}), children: [
    /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) })
  ] }) });
};
function render({ path }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(RoutesComponent, {}) }) })
  );
  return { html };
}
export {
  render
};
