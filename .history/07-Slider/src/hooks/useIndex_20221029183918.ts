import {useState} from 'react'

export const useIndex =(initialNumber:number, maxLength:number
	):[number,number,number,any]=>{
		const [index, setIndex] = useState(initialNumber)
		if(index<0) setIndex(maxLength	)
		if(index>maxLength)setIndex(	0)

		const prevIndex = index-1;
		const nextIndex = index +1
	
	return[index,prevIndex,nextIndex,setIndex]
}