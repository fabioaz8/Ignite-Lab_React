import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q0wos72tjg01xl4e6kg9bi/master',
    cache: new InMemoryCache()
})