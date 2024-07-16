import React from 'react';
import Image from 'next/image';
import LittleButtonLikeComps from './littleButtonLikeComps';


export default function WorkK({ infor }) {

    const { projectFigure, projectText } = infor || {};


    return (
        <div>
            <div className='flex justify-center items-center'>
                <div className="grid gap-x-12 grid-cols-2 justify-center rounded-xl shadow-xl">
                    <div className='bg-gray-50 rounded-lg items-center justify-center pl-5 pr-5 pb-10 pt-10'><Image src={projectFigure} width={600} height={600} /></div>

                    <div className='bg-white items-center justify-center'>
                        <div className='pb-10'><strong>Fiskill</strong></div>
                        <div className='pr-10'><p>{projectText}</p></div>
                        <di><LittleButtonLikeComps /></di>
                        <div className='pt-10 pb-20'>
                            <Image src="/images/Icon Button.png" alt="" width={40} height={40} />
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className="grid gap-x-12 grid-cols-2 justify-center rounded-xl shadow-xl pl-10 my-10">
                    <div>
                        <div className='pb-10'><strong>Fiskill</strong></div>
                        <p>{projectText}</p>
                        <di><LittleButtonLikeComps /></di>
                        <div className='pt-10 pb-20'>
                            <Image src="/images/Icon Button.png" alt="" width={40} height={40} />
                        </div>
                    </div>
                    <div className='bg-gray-50 rounded-lg items-center justify-center pl-5 pr-5 pb-10 pt-10'><Image src={projectFigure} width={600} height={600} /></div>

                </div>
            </div>


            <div className='flex justify-center items-center'>
                <div className="grid gap-x-12 grid-cols-2 justify-center rounded-xl shadow-xl ">
                    <div className='bg-gray-50 rounded-lg items-center justify-center pl-5 pr-5 pb-10 pt-10'><Image src={projectFigure} width={600} height={600} /></div>

                    <div className='bg-white rounded-lg items-center justify-center pb-10 pt-10 pl-20'>
                        <div className='pb-10'>
                            <strong>Fiskill</strong>
                        </div>
                        <div className='pr-10'>
                            <p>{projectText}</p>
                        </div>
                        <di><LittleButtonLikeComps /></di>
                        <div className='pt-10 pb-20'>
                            <Image src="/images/Icon Button.png" alt="" width={40} height={40} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

