import styles from '@/styles/Home.module.css'

const Cards = () => {
    return (
      <div className={styles.container}>

        <a className={`${styles.arrows} ${styles.arrowleft}`} role="button"></a>
        <a className={`${styles.arrows} ${styles.arrowright}`} role="button"></a>

        <img className={styles.card1} src="https://images.unsplash.com/photo-1516575150278-77136aed6920?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoyo"/>
        <img className={styles.card2} src="https://images.unsplash.com/photo-1637066725928-d55765ff664a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="yoyo"/>
        <img className={styles.card3} src="https://images.unsplash.com/photo-1646197879190-78a962aab29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo"/>
        <img className={styles.card4} src="https://images.unsplash.com/photo-1646198047133-c0ca69d470f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo"/>
        <img className={styles.card5} src="https://images.unsplash.com/photo-1646198037117-10070247a9a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="yoyo"/>
        
      </div>
    )
}

export default Cards;