import LayersProvider from '../context/LayersContext/LayersProvider'
import { MainContainer } from '../components/containers/MainContainer/MainContainer.jsx'


export default function Home () {

  return (
    <LayersProvider>
      <MainContainer>
      </MainContainer>
    </LayersProvider>
  )
}
