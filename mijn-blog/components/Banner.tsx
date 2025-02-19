import Image from 'next/image';

export default function Banner() {
    return (
        <>
            <section className="banner">
                <Image src={'/profile.png'} alt={'profile'} className='banner_img' width={400} height={400}/>
                <div className='banner_content'>
                    <h2 className='banner_h2'>Ali Ayoub Soujaa</h2>
                    <h3 className='banner_h3'>Backend developer</h3>
                    <p className='banner_p'>Ik ben een gemotiveerde backend-stagiair bij iCapps met een passie voor technologie en softwareontwikkeling. Tijdens mijn stage heb ik gewerkt met Nest.js en Node.js en heb ik ervaring opgedaan met agile sprints en tools zoals Jira en Harvest. Ik geniet ervan om efficiënte en schaalbare backendsystemen te bouwen en heb met veel enthousiasme aan verschillende projecten meegewerkt.</p>
                </div>
            </section>
        </>
    );
}
