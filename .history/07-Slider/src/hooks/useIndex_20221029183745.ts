import {useState} from 'react'

export const useIndex =(initialNumber:number, maxNumber:number
	):[number,number,number,any]=>{
		const [index, setIndex] = useState(initialNumber)
	
	return[index,prevIndex,nextIndex,setIndex]
}