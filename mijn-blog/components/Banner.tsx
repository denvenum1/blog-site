import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <section className="banner">
                <Image src={'/profile.png'} alt={'profile'} className='banner_img' width={400} height={400} />
                <div className='banner_content'>
                    <h2 className='line_bottom'>Ali Ayoub Soujaa</h2>
                    <h3 className='banner_h3'>Backend developer</h3>
                    <p className='banner_p'>Hey, ik ben Ali, student in het tweede jaar graduaat Programmeren.
                        Tijdens mijn stage werk ik aan een reportingtool en capaciteitsplanning met NestJS en TypeScript.
                        Op deze blog deel ik mijn traject, wat ik leer en bouw onderweg.
                    </p>
                </div>
            </section>
        </>
    );
}
