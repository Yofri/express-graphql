import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()
const port = process.env.PORT || 3000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(3000, () => console.log(`Express listening on port ${port}`))