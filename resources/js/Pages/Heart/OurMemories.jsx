import { Head } from '@inertiajs/react';
import { useState } from 'react';

import CircularGallery from '@/Components/CircularGallery';
import TrueFocus from '@/Components/TrueFocus';
import Particles from '@/Components/Particles'; // dari reactbits
import FlowingMenu from '@/Components/FlowingMenu';
import BlurText from '@/Components/BlurText';
import SplitText from '@/Components/SplitText';

export default function OurMemories() {
    const [isOverlayVisible, setIsOverlayVisible] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const spinningStyle = `
@keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
}
`;
    const timeline = [
        {
            year: "2021 Februari",
            title: "Pertama kali main bareng (Klik aku :>)",
            content: "Waktu itu masih awkward tapi seru banget, karena kamu selalu ketawa duluan walau hal receh.",
        },
        {
            year: "2021 Ramadhan",
            title: "Masih maen bareng",
            content: "Kita maen bareng tapi maen game tolol,",
        },
        {
            year: "2025 Sekarang",
            title: "Ketawa sampai lupa waktu",
            content: "Main obby bareng, gagal mulu tapi gak berhenti ketawa. Rasanya pengen waktu berhenti di sana aja.",
        },
    ];

    const [openIndex, setOpenIndex] = useState(null);


    const demoItems = [
        { text: 'KENANGAN', image: '/images/awal.png' },
        { text: 'INDAH', image: '/images/a.png' }
    ];

    const handleOverlayClick = () => {
        setIsLoading(true);
        setIsPlaying(true); // Tampilkan loading
        setTimeout(() => {
            setIsLoading(false); // Sembunyikan loading setelah 2 detik (atau sesuai durasi animasi)
            setIsOverlayVisible(false); // Hilangkan overlay
            // Putar audio
        }, 2000); // Ganti durasi sesuai kebutuhanmu
    };

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <>



            <Head title="Kenangan Roblox" />

            <style>{spinningStyle}</style>
            {isPlaying && (
                <>
                    <style>{spinningStyle}</style>
                    <div
                        style={{
                            position: 'fixed',
                            bottom: '1rem',
                            right: '1rem',
                            zIndex: 2000,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.6)',
                            padding: '0.5rem 0.75rem',
                            borderRadius: '1rem',
                            boxShadow: '0 0 8px rgba(0,255,255,0.5)',
                        }}
                    >
                        <img
                            src="/images/cd.png"
                            alt="Kaset"
                            style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                animation: 'spin 4s linear infinite',
                            }}
                        />
                        <span
                            style={{
                                color: 'white',
                                fontSize: '0.875rem',
                                fontWeight: '500',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            🎶 Sedang Memutar Kenangan Indah...
                        </span>
                    </div>
                </>
            )}


            {isLoading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000',
                        color: '#00ffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1100,
                        flexDirection: 'column',
                    }}
                >
                    <h2 className="text-3xl font-semibold animate-pulse">Memuat Kenangan...</h2>
                </div>
            )}

            {/* Overlay Awal */}
            {isOverlayVisible && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        flexDirection: 'column',
                        textAlign: 'center',
                        padding: '2rem'
                    }}
                >
                    <h1 className="text-4xl font-bold mb-4 text-cyan-300">Sebuah Perjalanan di Dunia Roblox</h1>
                    <p className="text-lg mb-8 text-gray-400 italic">Kenangan ini sederhana, tapi artinya sangat mendalam.</p>
                    <button
                        onClick={handleOverlayClick}
                        className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                    >
                        Mulai Perjalanan
                    </button>
                </div>
            )}
            {/* Background Hitam */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    zIndex: -1,
                }}
            >
                <Particles
                    particleColors={['#00d1ff', '#ffffff']}
                    particleCount={30}
                    particleSpread={5}
                    speed={0.1}
                    particleBaseSize={60}
                    moveParticlesOnHover={false}
                    alphaParticles
                    disableRotation={false}
                />
            </div>

            {/* Konten */}
            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: '#fff',
                    paddingTop: '4rem',
                }}
            >
                <TrueFocus
                    sentence="Roblox Journey"
                    manualMode={false}
                    blurAmount={5}
                    borderColor="cyan"
                    animationDuration={1}
                    pauseBetweenAnimations={2}
                />

                <div
                    style={{
                        marginTop: '2rem',
                        textAlign: 'center',
                        maxWidth: '800px',
                    }}
                >
                    <img
                        src="/images/together.png"
                        alt="Gambar Awal"
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '12px',
                            boxShadow: '0 0 20px rgba(0,255,255,0.3)',
                            margin: '0 auto',
                        }}
                        className="max-w-md md:max-w-xl lg:max-w-2xl w-full h-auto mx-auto rounded-xl shadow-lg"
                    />
                    <BlurText
                        text="Dalam dunia kotak-kotak itu, kita tumbuh bersama — tertawa, bertengkar, lalu saling diam… tapi semua itu masih ada, hidup diam-diam di dalam ingatan.  "
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mt-8 mb-8"
                    />
                </div>
            </div>


            <div
                style={{
                    width: '100%',
                    padding: '2rem 0',
                    backgroundColor: '#000',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <FlowingMenu items={demoItems} />
            </div>


            <div
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    backgroundColor: '#000',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <SplitText
                    text="Mungkin Ini Hanya Sementara, Tapi Bisa Juga Untuk Selamanya :')"
                    className="text-3xl font-semibold text-cyan-400"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '4rem 0',
                    color: '#fff',
                    maxWidth: '1000px',
                    margin: '0 auto',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '3rem',
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '2rem' }}>
                        <img
                            src="/images/j.png"
                            alt="Foto 1"
                            className="rounded-lg shadow-lg"
                            style={{ width: '80%', height: 'auto', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
                        />
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                        <BlurText
                            text="Masa itu telah berlalu, tapi tidak dari ingatanku."
                            delay={450}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-1xl mt-8 mb-8 mr-3"
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '3rem',
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'left', paddingLeft: '2rem' }}>
                        <BlurText
                            text="Kita hanya bisa mengenang, karena mengulang bukan pilihan."
                            delay={450}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-1xl mt-8 mb-8 mr-3"
                        />
                    </div>
                    <div style={{ flex: 1, textAlign: 'right' }}>
                        <img
                            src="/images/m.png"
                            alt="Foto 2"
                            className="rounded-lg shadow-lg"
                            style={{ width: '80%', height: 'auto', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
                        />
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div style={{ flex: 1, textAlign: 'right', paddingRight: '2rem' }}>
                        <img
                            src="/images/l.png"
                            alt="Foto 3"
                            className="rounded-lg shadow-lg"
                            style={{ width: '80%', height: 'auto', boxShadow: '0 0 20px rgba(0,255,255,0.3)' }}
                        />
                    </div>
                    <div style={{ flex: 1, textAlign: 'left' }}>
                        <BlurText
                            text="Terlalu indah untuk dilupakan, terlalu sakit untuk diulang."
                            delay={450}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-1xl mt-8 mb-8 mr-3"
                        />
                    </div>
                </div>
            </div>

            <div
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    backgroundColor: '#000',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <SplitText
                    text="Have Fun :)"
                    className="text-6xl font-semibold text-cyan-400"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>

            <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>

            <div
                style={{
                    width: '100%',
                    padding: '1rem 0',
                    backgroundColor: '#000',
                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <SplitText
                    text="RANDOM AJA HEHE :)"
                    className="text-5xl font-extrabold text-cyan-400"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>

            <div
                style={{

                    padding: '4rem 1rem',
                    textAlign: 'center',
                    color: '#fff',
                }}
            >
                <div className="w-full max-w-3xl mx-auto aspect-video">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/obrPUirPzrQ?si=1qMG6P09kHoBoC-x"

                        title="Random Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                    ></iframe>
                </div>
            </div>

            {/* Hidden YouTube Audio */}
            {isPlaying && (
                <div style={{ display: 'none' }}>
                    <iframe
                        width="0"
                        height="0"
                        src="https://www.youtube.com/embed/RU8Je4Ylc7Y?autoplay=1&start=2&loop=1"
                        allow="autoplay"
                        allowFullScreen
                        title="Audio Player"
                    />
                </div>

            )}

            <div
                style={{
                    width: '100%',
                    padding: '2rem 0',

                    position: 'relative',
                    zIndex: 1,
                    textAlign: 'center',
                }}
            >
                <div className="bg-black text-white py-12 px-4 md:px-8 flex flex-col items-center">
                    <h2 className="text-3xl font-bold text-cyan-400 mb-8">Our Timeline</h2>
                    <div className="w-full max-w-xl border-l-4 border-cyan-400 pl-6">
                        {timeline.map((item, index) => (
                            <div key={index} className="mb-6">
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="text-left focus:outline-none w-full"
                                >
                                    <div className="flex items-left gap-4">
                                        <div className="w-4 h-4 bg-cyan-400 rounded-full" />
                                        <p className="text-lg font-semibold">
                                            {item.year} – {item.title}
                                        </p>
                                    </div>
                                </button>
                                {openIndex === index && (
                                    <div className="mt-2 ml-8 text-gray-300 italic transition-all duration-300">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        padding: '2rem 1rem',
                        textAlign: 'center',
                        color: '#00ffff',
                        fontSize: '1.25rem',
                        fontStyle: 'italic',
                    }}
                >
                    
                    "Kadang aku mikir, lucu ya… dari game seaneh itu, bisa jadi kenangan yang nggak hilang-hilang dan masih membekas ingatannya hingga sekarang."
                </div>
                <SplitText
                    text="Terima kasih telah mengunjungi, semoga kenangan ini tetap abadi."
                    className="text-4xl font-semibold text-cyan-400"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                />
            </div>


            <div
                style={{
                    width: '100%',
                    padding: '3rem 0',

                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <p className="text-lg italic">
                    *Catatan: ini tidak lagi sedih karena emang temanya aja wkwkwk. Kalau suka, jangan rlupa kunjungi ini lagi  ya! :)*
                </p>
            </div>

            {/* Ajakan Interaktif */}
            <div
                style={{
                    width: '100%',
                    padding: '3rem 0',

                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <h2 className="text-3xl font-semibold text-cyan-500">Mau Lihat Kenangan Lainnya?</h2>
                <button
                    onClick={() => alert('Kepo anjay, heheh canda mungkin ada lagi :) wkwkwk')}
                    className="px-8 py-4 mt-4 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
                >
                    Klik Disini
                </button>
            </div>


        </>
    );
}
