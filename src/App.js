import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import New from "./pages/New";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) =>
      alert(`GraphQl Error: ${message}`)
    );
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://us-central1-build-myhouse.cloudfunctions.net/bmhAPi/graphql",
  }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <main>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<New />} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
