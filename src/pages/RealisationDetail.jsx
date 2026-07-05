import { useParams } from 'react-router-dom'
import NiceVolley from './realisations/NiceVolley'
import BaseConnaissances from './realisations/BaseConnaissances'
import Portfolio from './realisations/Portfolio'

export default function RealisationDetail() {
  const { id } = useParams()

  switch(parseInt(id)) {
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

