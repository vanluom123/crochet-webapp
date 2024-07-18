import { jsxs, jsx } from "react/jsx-runtime";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { Link, Routes, Route } from "react-router-dom";
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
const Router = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Home, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "/contact", element: /* @__PURE__ */ jsx(Contact, {}) })
  ] });
};
function render({ path }) {
  const html = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(StaticRouter, { location: path, children: /* @__PURE__ */ jsx(Router, {}) }) })
  );
  return { html };
}
export {
  render
};
