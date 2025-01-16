import React from 'react'
import SectionWrapper from './SectionWrapper'

export default function Workout(props) {
	const { workout } = props

	return (
		<SectionWrapper header={"welcome to"} title={['The', 'DANGER', 'zone']}>
			<div className='flex flex-col gap-4'>
				{workout.map((excercise, i) => {
					return (
						
					)
				})}
			</div>
		</SectionWrapper>
	)
}
