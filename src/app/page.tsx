import { User, columns } from './columns'
import { DataTable } from './data-table'

async function getUsers(): Promise<User[]> {
  // const response = await fetch(`${process.env.NEXT_URL}/graphql`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     query: /* GraphQL */ `
  //       {
  //         users {
  //           _id
  //           username
  //           email
  //           phone
  //           companyName
  //           linkedinProfileUrl
  //         }
  //       }
  //     `,
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   next: {
  //     revalidate: 10,
  //   },
  // })
  // const data = await response.json()
  return []
}

export default async function HomePage() {
  const data = await getUsers()

  return (
    <div className='container mx-auto py-10'>
      <h1 className='text-center font-bold text-3xl mb-6'>List of Users</h1>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
