import "./App.scss";

import { Accordion, AccordionItem } from "./components";

const items = [
  {
    title: "Title 1",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi
        totam quod ad. Quasi doloribus ipsa adipisci, esse deleniti incidunt
        obcaecati ab voluptas explicabo accusamus vitae, officiis vel nemo
        laborum.
      </p>
    ),
  },
  {
    title: "Title 2",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi
        totam quod ad. Quasi doloribus ipsa adipisci, esse deleniti incidunt
        obcaecati ab voluptas explicabo accusamus vitae, officiis vel nemo
        laborum.
      </p>
    ),
  },
  {
    title: "Title 3",
    content: (
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quasi
        totam quod ad. Quasi doloribus ipsa adipisci, esse deleniti incidunt
        obcaecati ab voluptas explicabo accusamus vitae, officiis vel nemo
        laborum.
      </p>
    ),
  },
];

function App() {
  return (
    <div className="wrapper">
      <Accordion>
        {items.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default App;
