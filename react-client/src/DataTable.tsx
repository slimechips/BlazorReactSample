import React, { useState } from 'react'

export interface Person {
  id: number
  name: string
  age: number
  email: string
}

interface DataTableProps {
  people: Person[]
}

const DataTable: React.FC<DataTableProps> = ({ people }) => {
  const [sortBy, setSortBy] = useState<keyof Person>('id')
  const [sortAsc, setSortAsc] = useState(true)

  const sortedPeople = [...people].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortAsc ? -1 : 1
    if (a[sortBy] > b[sortBy]) return sortAsc ? 1 : -1
    return 0
  })

  const handleSort = (field: keyof Person) => {
    if (sortBy === field) {
      setSortAsc(!sortAsc)
    } else {
      setSortBy(field)
      setSortAsc(true)
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>People Table</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'sans-serif' }}>
        <thead>
          <tr>
            {['id', 'name', 'age', 'email'].map((field) => (
              <th
                key={field}
                onClick={() => handleSort(field as keyof Person)}
                style={{
                  padding: '0.75rem',
                  borderBottom: '2px solid #ccc',
                  cursor: 'pointer',
                  background: '#f9f9f9',
                  textAlign: 'left',
                }}
              >
                {field.toUpperCase()} {sortBy === field ? (sortAsc ? '▲' : '▼') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedPeople.map((person) => (
            <tr key={person.id}>
              <td style={cellStyle}>{person.id}</td>
              <td style={cellStyle}>{person.name}</td>
              <td style={cellStyle}>{person.age}</td>
              <td style={cellStyle}>{person.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const cellStyle: React.CSSProperties = {
  padding: '0.75rem',
  borderBottom: '1px solid #eee',
}

export default DataTable
