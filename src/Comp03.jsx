function Comp03() {
    const photo = {
        src: "./logo192.png",
        alt: "Reactアイコン",
    };

    return(
        <img src={photo.src} alt={photo.alt}></img>
    );
}

export default Comp03;