import { render, h } from 'preact'
import { useState } from 'preact/hooks'
import { memo } from 'preact/compat'

const Row = memo(({ row }) => {
  return row.id
})

const rows = [
  { id: '1', a: 5, b: 100 },
  { id: '2', a: 50, b: 10 },
  { id: '3', a: 25, b: 1000 },
]

const App = () => {
  const [sortBy, setSortBy] = useState('a')

  return (
    <div>
      <table>
        {rows
          .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1))
          .map(row => (
            <Row row={row} key={row.id} />
          ))}
      </table>
      <h1>Sorting by: {sortBy}</h1>
      <button onClick={() => setSortBy('a')}>Sort by a</button>
      <button onClick={() => setSortBy('b')}>Sort by b</button>
    </div>
  )
}

render(<App />, document.body)

// function shallowDiffers(a, b) {
//   for (const i in a) if (i !== '__source' && !(i in b)) return true
//   for (const i in b) if (i !== '__source' && a[i] !== b[i]) return true
//   return false
// }

// function memo(c) {
//   function shouldUpdate(nextProps) {
//     const ref = this.props.ref
//     const updateRef = ref == nextProps.ref
//     if (!updateRef && ref) {
//       ref.call ? ref(null) : (ref.current = null)
//     }
//     return shallowDiffers(this.props, nextProps)
//   }

//   function Memoed(props) {
//     this.shouldComponentUpdate = shouldUpdate
//     return h(c, Object.assign({}, props))
//   }
//   Memoed.prototype.isReactComponent = true
//   Memoed.displayName = 'Memo(' + (c.displayName || c.name) + ')'
//   Memoed._forwarded = true
//   return Memoed
// }
