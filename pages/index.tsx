import styles from '@/styles/Home.module.css'

export default function Cards() {
  return (
      <div className={styles.cards}>
        <div className={styles.card1}>
        <img src="https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoyo"/>
        </div>
        <div className={styles.card2}>
          <img src="https://images.unsplash.com/photo-1637066725928-d55765ff664a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoyo"/>
        </div>
        <div className={styles.card3}>
          <img src="https://images.unsplash.com/photo-1646197879190-78a962aab29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo"/>
        </div>
        <div className={styles.card4}>
          <img src="https://images.unsplash.com/photo-1646198047133-c0ca69d470f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo"/>
        </div>
        <div className={styles.card5}>
          <img src="https://images.unsplash.com/photo-1646198037117-10070247a9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo" />
        </div>
      </div>
  )
}
