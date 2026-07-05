import { useParams } from 'react-router-dom'
import NiceVolley from './realisations/NiceVolley'
import BaseConnaissances from './realisations/BaseConnaissances'
import Portfolio from './realisations/Portfolio'

export default function RealisationDetail() {
  const { id } = useParams()
  const realisationId = parseInt(id)

  switch(realisationId) {
    case 1:
      return <NiceVolley />
    case 2:
      return <BaseConnaissances />
    case 3:
      return <Portfolio />
    default:
      return <NiceVolley />
  }
}

