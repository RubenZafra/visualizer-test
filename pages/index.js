import { config } from '../firebase/config'
import  { initializeApp } from 'firebase/app'
import {
  getFirestore, 
  collection, 
  getDocs
} from 'firebase/firestore'
import { useEffect, useState } from 'react'

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


  return (
   
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        ESTUDIO CACTUS VISUALIZER TEST
      </div>
    
  )
}
