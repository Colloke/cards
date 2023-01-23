import styles from '@/styles/Home.module.css'

const Arrows = () => {
    return (
      <div>
        <p className={`${styles.arrows} ${styles.right}`}></p>
        <p className={`${styles.arrows} ${styles.left}`}></p>
      </div>
    )
}

export default Arrows;