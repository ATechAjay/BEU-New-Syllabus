import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import Root from "./components/pages/_Root/Root";
import Home from "./components/pages/Home/Home";
import {
  FIRST_PAGE_CARD_DATA,
  BTECH_PAGE_CARD_DATA,
  GATE_PAGE_CARD_DATA,
  BCA_PAGE_CARD_DATA,
  BPHARMA_PAGE_CARD_DATA,
  MBBS_PAGE_CARD_DATA,
} from "./components/utils/Constants";
// import Accordion from "./components/Accordion/Accordion";
import AccordionContainer from "./components/Accordion/AccordionContainer";
const appRouter = createBrowserRouter([
  // Add an extra route configuration for the nested route.
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Home heading="BEU New Syllabus" cardData={FIRST_PAGE_CARD_DATA} />
        ),
      },
      {
        path: "/btech",
        element: (
          <Home
            heading="B.Tech Syllabus Branch Wise"
            cardData={BTECH_PAGE_CARD_DATA}
          />
        ),
      },
      {
        path: "/btech/cse",
        element: (
          <>
            <AccordionContainer
              heading="CSE New Syllabus"
              title="Ajay Yadav"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/btech/civil",
        element: (
          <>
            <AccordionContainer
              heading="Civil New Syllabus"
              title="Civil Civil"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/btech/mech",
        element: (
          <>
            <AccordionContainer
              heading="Mechanical New Syllabus"
              title="Mech Mech"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/btech/electronics",
        element: (
          <>
            <AccordionContainer
              heading="Electronics New Syllabus"
              title="Electronics Electronics"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/btech/electrical",
        element: (
          <>
            <AccordionContainer
              heading="Electrical New Syllabus"
              title="Electrical Electrical"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/gate",
        element: (
          <Home
            heading="Gate Syllabus Branch Wise"
            cardData={GATE_PAGE_CARD_DATA}
          />
        ),
      },

      {
        path: "/gate/cse-it",
        element: (
          <>
            <AccordionContainer
              heading="CSE-IT New Syllabus"
              title="CSE-IT CSE-IT"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/gate/civil",
        element: (
          <>
            <AccordionContainer
              heading="Civil New Syllabus"
              title="Civil Civil"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/gate/mech",
        element: (
          <>
            <AccordionContainer
              heading="Mech New Syllabus"
              title="Mech Mech"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/gate/eee",
        element: (
          <>
            <AccordionContainer
              heading="Electrical & Electronics Engg. New Syllabus"
              title="Electrical & Electronics Engg."
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/gate/electronics",
        element: (
          <>
            <AccordionContainer
              heading="Electronics Engg. New Syllabus"
              title="Electronics Engg."
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/ies",
        element: (
          <>
            <AccordionContainer
              heading="IES/ESE New Syllabus"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      // {
      //   path: "/bca",
      //   element: <Card />,
      // },

      {
        path: "/bca",
        element: (
          <Home
            heading="BCA Syllabus Semester Wise"
            cardData={BCA_PAGE_CARD_DATA}
          />
        ),
      },

      {
        path: "/bca/semester-1",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-1 Syllabus"
              title="BCA Semester-1 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-2",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-2 Syllabus"
              title="BCA Semester-2 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-3",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-3 Syllabus"
              title="BCA Semester-3 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-4",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-4 Syllabus"
              title="BCA Semester-4 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-5",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-5 Syllabus"
              title="BCA Semester-5 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-6",
        element: (
          <>
            <AccordionContainer
              heading="BCA Semester-6 Syllabus"
              title="BCA Semester-6 Syllabus"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bpharma",
        element: (
          <Home
            heading="B.Pharma Syllabus Sem-Wise"
            cardData={BPHARMA_PAGE_CARD_DATA}
          />
        ),
      },

      {
        path: "/bpharma/semester-1",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-1 Syllabus"
              title="B.Pharma Semester-1"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-2",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-2 Syllabus"
              title="B.Pharma Semester-2"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-3",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-3 Syllabus"
              title="B.Pharma Semester-3"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-4",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-4 Syllabus"
              title="B.Pharma Semester-4"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-5",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-5 Syllabus"
              title="B.Pharma Semester-5"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-6",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-6 Syllabus"
              title="B.Pharma Semester-6"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/sem-7",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Semester-7 Syllabus"
              title="B.Pharma Semester-7"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/semester-8",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Sem-8 Syllabus"
              title="B.Pharma Semester-8"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
      {
        path: "/bpharma/elective",
        element: (
          <>
            <AccordionContainer
              heading="B.Pharma Elective Syllabus"
              title="B.Pharma Elective"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/mbbs",
        element: (
          <Home heading="MBBS Syllabus" cardData={MBBS_PAGE_CARD_DATA} />
        ),
      },

      {
        path: "/mbbs/mbbs-1",
        element: (
          <>
            <AccordionContainer
              heading="MBBS-1 Syllabus"
              title="MBBS-1 MBBS-1 MBBS-1"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/mbbs/mbbs-2",
        element: (
          <>
            <AccordionContainer
              heading="MBBS-2 Syllabus"
              title="MBBS-2 MBBS-2 MBBS-2"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/mbbs/mbbs-3",
        element: (
          <>
            <AccordionContainer
              heading="MBBS-3 Syllabus"
              title="MBBS-3 MBBS-3 MBBS-3"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/mbbs/mbbs-4",
        element: (
          <>
            <AccordionContainer
              heading="MBBS-4 Syllabus"
              title="MBBS-4 MBBS-4 MBBS-4"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
