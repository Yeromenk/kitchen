import './Our-works.css'
import {useEffect, useState} from 'react'

const OurWorks = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedWork, setSelectedWork] = useState(null)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [folderImages, setFolderImages] = useState({})
    
    const categories = ['all', 'кухні', 'корпусні меблі', 'санвузли']

    const works = [
        {
            id: 1,
            title: "Сучасна кухня",
            category: "кухні",
            image: "20241223_115719.jpg",
            description: "Модернізація кухні з індивідуальними шафами",
            imageFolder: "Petro Crystal"
        },
        {
            id: 2,
            title: "Класична кухня",
            category: "кухні",
            image: "20241028_191835.jpg",
            description: "Традиційний дизайн з сучасними зручностями",
            imageFolder: "Bogdan"
        },
        {
            id: 3,
            title: "Шафа-купе",
            category: "корпусні меблі",
            image: "20240115_200402.jpg",
            description: "Ергономічна шафа-купе з дзеркалами",
            imageFolder: "Oksana"
        },
        {
            id: 4,
            title: "Гардеробна",
            category: "корпусні меблі",
            image: "20231212_184220.jpg",
            description: "Простора гардеробна з системою зберігання",
            imageFolder: "Oleksander"
        },
        {
            id: 5,
            title: "Сучасний санвузол",
            category: "санвузли",
            image: "/src/assets/Tatiana/20231221_213305.jpg",
            description: "Ванна кімната з функціональними меблями",
            imageFolder: "Tatiana"
        },
        // {
        //     id: 6,
        //     title: "Маленький санвузол",
        //     category: "санвузли",
        //     image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
        //     description: "Компактне рішення для малогабаритних ванних кімнат"
        // }
    ]

    // In your component
    const detectImageOrientation = (img, index) => {
        return new Promise((resolve) => {
            if (img.complete) {
                handleImageLoad(img, index);
                resolve();
            } else {
                img.onload = () => {
                    handleImageLoad(img, index);
                    resolve();
                };
            }
        });
    };

    const handleImageLoad = (img) => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const container = img.parentElement;

        // Remove any existing classes
        container.classList.remove('portrait', 'landscape');

        // Add appropriate class based on orientation
        if (aspectRatio < 0.8) {
            container.classList.add('portrait');
        } else if (aspectRatio > 1.2) {
            container.classList.add('landscape');
        }
    };

    const filteredWorks = selectedCategory === 'all'
        ? works
        : works.filter(work => work.category === selectedCategory)

    const closeGallery = () => {
        setSelectedWork(null);
        document.body.style.overflow = 'auto';
    }

    const openGallery = (work) => {
        setSelectedWork({
            ...work,
            images: folderImages[work.id] || []
        });
        document.body.style.overflow = 'hidden';
    }

    const handleModalClick = (e) => {
        if (e.target.classList.contains('gallery-modal')) {
            closeGallery();
        }
    }

    // Also update the useEffect to fix the dependency array
    useEffect(() => {
        const loadFeaturedImages = async () => {
            const imageModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,svg}');
            const images = {};

            for (const work of works) {
                if (work.imageFolder && work.featuredImageName) {
                    const expectedPath = `/src/assets/${work.imageFolder}/${work.featuredImageName}`;

                    // Find the exact path that matches our expected path pattern
                    for (const path in imageModules) {
                        if (path === expectedPath) {
                            const imageModule = await imageModules[path]();
                            images[work.id] = imageModule.default;
                            break;
                        }
                    }
                }
            }

            setFolderImages(images);

        };

        loadFeaturedImages();
    }, []);

// Keep the separate useEffect for image orientation
    useEffect(() => {
        if (selectedWork?.images?.length) {
            setTimeout(() => {
                const imgElements = document.querySelectorAll('.gallery-image img');
                imgElements.forEach(img => {
                    detectImageOrientation(img);
                });
            }, 100);
        }
    }, [selectedWork])


    return (
        <section className="works-section" id="our-works">
            <div className="works-container">
                <h2 className="works-title">Наші роботи</h2>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === 'all' ? 'Усі' : category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="works-grid">
                    {filteredWorks.map(work => (
                        <div key={work.id} className="work-card">
                            <div className="work-image">
                                {!imagesLoaded && <div className="image-placeholder"></div>}
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    onLoad={() => setImagesLoaded(true)}
                                    style={{visibility: imagesLoaded ? 'visible' : 'hidden'}}
                                />
                            </div>
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="work-footer">
                                    <span className="category-tag">{work.category}</span>
                                    <button
                                        className="view-all-btn"
                                        onClick={() => openGallery(work)}
                                    >
                                        Усі фото
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gallery Modal */}
                {selectedWork && (
                    <div className="gallery-modal" onClick={handleModalClick}>
                        <div className="gallery-content">
                            <button className="close-gallery" onClick={closeGallery}>&times;</button>
                            <h2>{selectedWork.title}</h2>
                            <div className="gallery-images">
                                {selectedWork.images?.map((img, index) => (
                                    <div
                                        className="gallery-image"
                                        key={index}
                                        data-index={index}
                                    >
                                        <img
                                            src={img}
                                            alt={`${selectedWork.title} - фото ${index + 1}`}
                                            loading="lazy" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OurWorks