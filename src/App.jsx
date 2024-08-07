import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./components/pages/Error/Error";
import Root from "./components/Root/Root";
import Home from "./components/pages/Home/Home";
import {
  HOME_PAGE_CARD_DATA,
  BTECH_PAGE_CARD_DATA,
  GATE_PAGE_CARD_DATA,
  BCA_PAGE_CARD_DATA,
  BPHARMA_PAGE_CARD_DATA,
  MBBS_PAGE_CARD_DATA,
} from "./components/utils/Constants";

import SemesterContainer from "./components/Root/SemesterContainer";
import Contact from "./components/pages/Contact/Contact";
import Suggest from "./components/pages/Suggest/Suggest";
import AccordionItem from "./components/Accordion/AccordionItem";

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
          <Home heading="Syllabus Branch-Wise" cardData={HOME_PAGE_CARD_DATA} />
        ),
      },
      {
        path: "/btech",
        element: (
          <Home
            heading="B.Tech Syllabus Branch-Wise"
            cardData={BTECH_PAGE_CARD_DATA}
          />
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/suggest-feature",
        element: <Suggest />,
      },
      {
        path: "/btech/cse",
        element: (
          <>
            <SemesterContainer heading="CSE Syllabus Semester-Wise" />
          </>
        ),
      },
      // Semester 1 component goes here
      {
        path: "/btech/cse/semester-1",
        element: (
          <>
            <AccordionItem
              heading="Semester-1"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-2",
        element: (
          <>
            <AccordionItem
              heading="Semester-2"
              title={"This will be title 2"}
              body={"It be a body 2"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-3",
        element: (
          <>
            <AccordionItem
              heading="Semester-3"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-4",
        element: (
          <>
            <AccordionItem
              heading="Semester-4"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-5",
        element: (
          <>
            <AccordionItem
              heading="Semester-5"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-6",
        element: (
          <>
            <AccordionItem
              heading="Semester-6"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-7",
        element: (
          <>
            <AccordionItem
              heading="Semester-7"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },
      {
        path: "/btech/cse/semester-8",
        element: (
          <>
            <AccordionItem
              heading="Semester-8"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil",
        element: (
          <>
            <SemesterContainer
              heading="Civil New Syllabus"
              title="Civil Civil"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-1",
        element: (
          <>
            <AccordionItem
              heading="Semester-1"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-2",
        element: (
          <>
            <AccordionItem
              heading="Semester-2"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-3",
        element: (
          <>
            <AccordionItem
              heading="Semester-3"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-4",
        element: (
          <>
            <AccordionItem
              heading="Semester-4"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-5",
        element: (
          <>
            <AccordionItem
              heading="Semester-5"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-6",
        element: (
          <>
            <AccordionItem
              heading="Semester-6"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-7",
        element: (
          <>
            <AccordionItem
              heading="Semester-7"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/civil/semester-8",
        element: (
          <>
            <AccordionItem
              heading="Semester-8"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech",
        element: (
          <>
            <SemesterContainer
              heading="Mechanical New Syllabus"
              title="Mech Mech"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-1",
        element: (
          <>
            <AccordionItem
              heading="Semester-1"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-2",
        element: (
          <>
            <AccordionItem
              heading="Semester-2"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-3",
        element: (
          <>
            <AccordionItem
              heading="Semester-3"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-4",
        element: (
          <>
            <AccordionItem
              heading="Semester-4"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-5",
        element: (
          <>
            <AccordionItem
              heading="Semester-5"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-6",
        element: (
          <>
            <AccordionItem
              heading="Semester-6"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-7",
        element: (
          <>
            <AccordionItem
              heading="Semester-7"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/mech/semester-8",
        element: (
          <>
            <AccordionItem
              heading="Semester-8"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics",
        element: (
          <>
            <SemesterContainer
              heading="Electronics New Syllabus"
              title="Electronics Electronics"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-1",
        element: (
          <>
            <AccordionItem
              heading="Semester-1"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-2",
        element: (
          <>
            <AccordionItem
              heading="Semester-2"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-3",
        element: (
          <>
            <AccordionItem
              heading="Semester-3"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-4",
        element: (
          <>
            <AccordionItem
              heading="Semester-4"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-5",
        element: (
          <>
            <AccordionItem
              heading="Semester-5"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-6",
        element: (
          <>
            <AccordionItem
              heading="Semester-6"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-7",
        element: (
          <>
            <AccordionItem
              heading="Semester-7"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electronics/semester-8",
        element: (
          <>
            <AccordionItem
              heading="Semester-8"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical",
        element: (
          <>
            <SemesterContainer
              heading="Electrical New Syllabus"
              title="Electrical Electrical"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-1",
        element: (
          <>
            <AccordionItem
              heading="Semester-1"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-2",
        element: (
          <>
            <AccordionItem
              heading="Semester-2"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-3",
        element: (
          <>
            <AccordionItem
              heading="Semester-3"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-4",
        element: (
          <>
            <AccordionItem
              heading="Semester-4"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-5",
        element: (
          <>
            <AccordionItem
              heading="Semester-5"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-6",
        element: (
          <>
            <AccordionItem
              heading="Semester-6"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-7",
        element: (
          <>
            <AccordionItem
              heading="Semester-7"
              title={"This will be title"}
              body={"It be a body"}
            />
          </>
        ),
      },

      {
        path: "/btech/electrical/semester-8",
        element: (
          <>
            <AccordionItem
              heading="Semester-8"
              title={"This will be title"}
              body={"It be a body"}
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
            <AccordionItem
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
            <AccordionItem
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
            <AccordionItem
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
            <AccordionItem
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
            <AccordionItem
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
            <AccordionItem
              heading="IES/ESE New Syllabus"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca",
        element: (
          <SemesterContainer
            heading="BCA Syllabus Semester Wise"
            title="BCA Semester-1 Syllabus"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bca/semester-1",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-1"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-2",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-2"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-3",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-3"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-4",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-4"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-5",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-5"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bca/semester-6",
        element: (
          <>
            <AccordionItem
              heading="BCA Semester-6"
              title="Common for all branches"
              body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
            />
          </>
        ),
      },

      {
        path: "/bpharma",
        element: (
          <SemesterContainer
            heading="B.Pharma Syllabus"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-1",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-1"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-2",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-2"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-3",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-3"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-4",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-4"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-5",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-5"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-6",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-6"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-7",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-7"
            title="B.Pharma Semester-7"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/bpharma/semester-8",
        element: (
          <AccordionItem
            heading="B.Pharma Semester-8"
            title="B.Pharma Semester-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/mbbs",
        element: (
          <SemesterContainer
            heading="MBBS Syllabus"
            title="MBBS-1 MBBS-1 MBBS-1"
            body="Lorem lorem lorem lorem lorem sfsafj hfjs ahf sfh sahjf jsf fs fs d"
          />
        ),
      },

      {
        path: "/mbbs/mbbs-1",
        element: (
          <>
            <AccordionItem
              heading="MBBS-1 Syllabus"
              title="MBBS-1 MBBS-1 MBBS-1"
              body="Lorem lorem lorem lorem lorem"
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
