import Cards from '../src/components/cards'
import { cardData } from './cardData'

export default function Home() {
  return (
      <main>
        <Cards slides={cardData} />
      </main>
  )
}
