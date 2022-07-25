import ImgResizer from "../pages/ImgResizer";
import ImgCompressor from "../pages/ImgCompressor";
import ImgConverter from "../pages/ImgConverter";
import AboutSection from "../pages/AboutSection";
import ContactSection from "../pages/ContactSection";

const routes = [
  { path: "/", exact: true, name: "ImgResizer", element: <ImgResizer /> },
  {
    path: "/img-resizer",
    exact: true,
    name: "ImgResizer",
    element: <ImgResizer />,
  },
  {
    path: "/img-compressor",
    exact: true,
    name: "ImgCompressor",
    element: <ImgCompressor />,
  },
  {
    path: "/img-converter",
    exact: true,
    name: "ImgConverter",
    element: <ImgConverter />,
  },
  {
    path: "/about-us",
    exact: true,
    name: "AboutSection",
    element: <AboutSection />,
  },
  {
    path: "/contact",
    exact: true,
    name: "ContactSection",
    element: <ContactSection />,
  },
];

export default routes;