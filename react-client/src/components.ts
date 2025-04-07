import DataTable from './DataTable'
import MyComponent from './MyComponent'

// Component registry by name
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentRegistry: Record<string, React.FC<any>> = {
  DataTable,
  MyComponent
}