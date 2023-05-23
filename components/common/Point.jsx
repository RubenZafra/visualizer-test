import {AiFillFormatPainter} from 'react-icons/ai'


export const Point = ({ style}) => {
  return (
    <div 
        className="absolute rounded-full z-30"
        style={style}
    >
      <AiFillFormatPainter 
        className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white border-2 border-white text-5xl bg-slate-600 rounded-full p-2
                  cursor-pointer hover:scale-110 transition-all duration-300 opacity-70 hover:opacity-90'
      />

    </div>
  )
}
