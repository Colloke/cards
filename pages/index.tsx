import Cards from './src/components/cards'
import { cardData } from './src/components/cardData'

export default function Home() {
  return (
      <main>
        <Cards slides={cardData} />
      </main>
  )
}
