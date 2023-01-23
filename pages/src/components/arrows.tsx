import styles from '@/styles/Home.module.css'

const Arrows = () => {
    return (
      <div>
        <p className={`${styles.arrows} ${styles.right}`}>Right arrow:</p>
        <p className={`${styles.arrows} ${styles.left}`}>Left arrow:</p>
      </div>
    )
}

export default Arrows;