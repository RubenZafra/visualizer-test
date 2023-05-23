import { config } from '../firebase/config'
import  { initializeApp } from 'firebase/app'
import {
  getFirestore, 
  collection, 
  getDocs
} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { ImageContainer } from '../components/containers/ImageContainer'
import { AsideContainer } from '../components/containers/AsideContainer'

// connect to DB
initializeApp(config)
const db = getFirestore()

// reference to collections
const pointsRef = collection(db, 'points')
const materialsRef = collection(db, 'materials')


export default function Home () {

  const [points, setPoints] = useState([])
  const [materials, setMaterials] = useState([])

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

  console.log(points)
  console.log(materials.map(material => console.log(Object.keys(material.layers))))


  return (
   
      <div className='flex flex-col items-center justify-center w-full min-h-screen py-2'>
        <h1>ESTUDIO CACTUS VISUALIZER TEST</h1>
        <div className='flex flex-row h-2/3 w-full px-28'>
         <ImageContainer points={points} materials={materials} />
         <AsideContainer materials={materials} points={points} />
        </div>
      </div>
    
  )
}
