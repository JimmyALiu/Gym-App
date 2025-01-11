import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title } = props

    return (
        <section classNAme='min-height-screen flex flex-col gap-10'>
            <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center'>
                <p>{header}</p>
                <h2>{title[0]} <span>{title[1]}</span> {title[2]}</h2>
            </div>
        </section>
    )
}
