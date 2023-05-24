import {AiFillFormatPainter} from 'react-icons/ai'


export const Point = ({style}) => {
  return (
    <div 
        className="absolute z-30"
        style={style}
    >
      <AiFillFormatPainter 
        className='top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white border-2 border-white text-3xl lg:text-4xl bg-slate-600 rounded-full p-1
                  cursor-pointer hover:scale-110 transition-all duration-300 opacity-60 hover:opacity-90'
      />

    </div>
  )
}
