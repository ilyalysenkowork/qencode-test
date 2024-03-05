import styles from './error.module.css'

const Error = ({text}) => {
  return <div className={styles.error}> {text} </div>
}

export default Error;