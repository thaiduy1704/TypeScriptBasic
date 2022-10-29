import {useState} from 'react'

export const useIndex =(initialNumber:number, maxNumber:number
	):[number,number,number,any]=>{
		const [index, setIndex] = useState(initialNumber)

		const prevIndex = index-1;
		const nextIndex = index +1
	
	return[index,prevIndex,nextIndex,setIndex]
}