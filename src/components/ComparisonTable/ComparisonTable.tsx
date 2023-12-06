import "./ComparisonTable.scss"

export interface ComparisonTableRow {
  values: string[]
}

interface ComparisonTableProps {
  languages: string[]

  onChange?(language: string, value: string): void
}

function ComparisonTable(props: ComparisonTableProps) {
  return (
    <div className="comparison-table">
      <table>
        <thead>
          <tr>
            <th>Key</th>
            {props.languages.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {props.languages.map((value, index) => (
              <td key={index}>
                <textarea
                  value={value}
                  onChange={event => props.onChange?.(props.languages[index], event.currentTarget.value)}
                />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ComparisonTable
