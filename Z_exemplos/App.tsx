import { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: lesson[] }>(GET_LESSONS_QUERY)

  return (
    //<h1 className="text-5xl font-bold">Hello World</h1>
    <ul>
      {data?.lessons.map(lesson => {
        return <li key={lesson.id}>{lesson.title}</li>
      })}
    </ul>
  )
}

export default App
