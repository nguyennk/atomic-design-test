import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

const PropsTypes = {
  text: PropTypes.string
}
const App = ({ text }: PropsTypes) => (
  <div className={styles.container}>Example Component: {text}</div>
)
export default App
