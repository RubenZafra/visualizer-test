import { config } from '../../../firebase/config'
import  { initializeApp } from 'firebase/app'
import {
  getFirestore, 
  collection, 
  getDocs
} from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { ImageContainer } from '../ImageContainer/ImageContainer'
import { LayersContext } from '../../../context/LayersContext/LayersContext'

// connect to DB
initializeApp(config)
const db = getFirestore()

// reference to collections
const pointsRef = collection(db, 'points')
const materialsRef = collection(db, 'materials')

export const MainContainer = () => {

  const {setPoints, layersState, setMaterials} = useContext(LayersContext)
  const {materials, points} = layersState

  useEffect(() => {
    ( async () => {
      const points = await getDocs(pointsRef)
      const pointsData = points.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        }
      })
      setPoints(pointsData)
    }
    )()
  }, [])

  useEffect(() => {
      ( async () => {
          const materials = await getDocs(materialsRef)
          const materialsData = materials.docs.map((doc) => {
              return {
                  id: doc.id,
                  ...doc.data()
                }
            })
            setMaterials(materialsData)
        }
        )()
    }, [])
    

  return (
    <div className='flex flex-col items-center justify-center w-full min-h-screen py-2'>
        <h1 className='text-xl font-bold mb-4'>ESTUDIO CACTUS VISUALIZER TEST</h1>
        <ImageContainer points={points} materials={materials} />
    </div>
  )
}
