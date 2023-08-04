import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client'; // Import the ApolloProvider
import { ApolloClient, InMemoryCache } from '@apollo/client'; // Import the required ApolloClient modules
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

// Create the ApolloClient instance
const client = new ApolloClient({
  uri: 'your_graphql_api_url_here', // Replace 'your_graphql_api_url_here' with your actual GraphQL API URL
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    {/* Wrap the App component with the ApolloProvider and pass the client as a prop */}
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


