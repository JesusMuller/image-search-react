import { Field, Form, Formik } from "formik";
import "./Header.css";

function App() {
  return (
    <div>
      <header className="header">
        <Formik
          initialValues={{ search: "" }}
          onSubmit={async (values) => {
            const response = await fetch(
              `https://api.unsplash.com/search/photos?per_page=20&&query=${values.search}`,
              {
                headers: {
                  Authorization:
                    "Client-ID LmCjlb9s29mZTiW7pWlMO5EnfIyxD8jWh212o22s6xY",
                },
              }
            );
            const data = await response.json();
          }}
        >
          <Form>
            <Field name="search"></Field>
          </Form>
        </Formik>
      </header>
    </div>
  );
}

export default App;
