import {useEffect, useState} from 'react'
import './Our-works.css'
import modernKitchen from '../../../assets/modernKitchen/К Лар 1.jpg'
import classicKitchen from '../../../assets/classicKitchen/К А 2.jpg'
import livingRoom from '../../../assets/livingRoom/В Лар 4.jpg'
import childrenRoom from '../../../assets/childrenRoom/Д Мик 2.jpg'
import bathroom from '../../../assets/bathroom/Св П 2.jpg'
import vestibule from '../../../assets/vestibule/П Лук 1.jpg'
import closet from '../../../assets/шафи, гардеробні, спальні/Г П 2.jpg'

const OurWorks = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedWork, setSelectedWork] = useState(null)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const [folderImages, setFolderImages] = useState({})
    const [galleryImagesLoaded, setGalleryImagesLoaded] = useState({})
    const [slideIndex, setSlideIndex] = useState(null)
    const [isLoadingGallery, setIsLoadingGallery] = useState(false);
    const [imagesAreLoading, setImagesAreLoading] = useState(true);

    const categories = ['all', 'кухні', 'кімнати', 'шафи,гардеробні', 'санвузли']

    const works = [
        {
            id: 1,
            title: "Сучасна кухня",
            category: "кухні",
            image: modernKitchen,
            description: "Стильні кухні з ергономічним дизайном, функціональними шафами та сучасною техінкою",
            imageFolder: "modernKitchen"
        },
        {
            id: 2,
            title: "Класична кухня",
            category: "кухні",
            image: classicKitchen,
            description: "Елегантні та затишні кухні з натуральних матеріалів, що створюють теплу домашню атмосферу",
            imageFolder: "classicKitchen"
        },
        {
            id: 3,
            title: "Вітальні",
            category: "кімнати",
            image: livingRoom,
            description: "Комфортні вітальні з функціональними меблями для відпочинку та спілкування всією родиною",
            imageFolder: "livingRoom"
        },
        {
            id: 4,
            title: "Дитячі",
            category: "кімнати",
            image: childrenRoom,
            description: "Яскраві та практичні дитячі кімнати з безпечними матеріалами та продуманими рішеннями",
            imageFolder: "childrenRoom"
        },
        {
            id: 5,
            title: "Сучасний санвузол",
            category: "санвузли",
            image: bathroom,
            description: "Функціональні санвузли з вологостійкими меблями та зручними системами зберігання",
            imageFolder: "bathroom"
        },
        {
            id: 6,
            title: "Прихожі",
            category: "кімнати",
            image: vestibule,
            description: "Практичні прихожі з максимальним використанням простору для зберігання речей",
            imageFolder: "vestibule"
        },
        {
            id: 7,
            title: "Шафи, гардеробні, спальні",
            category: "шафи,гардеробні",
            image: closet,
            description: "Індивідуально спроектовані шафи-купе та гардеробні для зручного зберігання речей",
            imageFolder: "шафи, гардеробні, спальні"
        }
    ]

    // In your component
    const detectImageOrientation = (img) => {
        return new Promise((resolve) => {
            if (img.complete) {
                handleImageLoad(img);
                resolve();
            } else {
                img.onload = () => {
                    handleImageLoad(img);
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

        // Mark this specific gallery image as loaded
        const index = img.dataset.index;
        if (index !== undefined) {
            setGalleryImagesLoaded(prev => ({...prev, [index]: true}));
        }
    };

    const filteredWorks = selectedCategory === 'all'
        ? works
        : works.filter(work => work.category === selectedCategory)

    const closeGallery = () => {
        setSelectedWork(null);
        setGalleryImagesLoaded({});
        setSlideIndex(null);
        document.body.style.overflow = 'auto';
    }

    const openGallery = (work) => {
        // Always show loading indicator immediately
        setIsLoadingGallery(true);

        // Initialize with basic info and empty images array
        setSelectedWork({
            ...work,
            images: []
        });

        setGalleryImagesLoaded({});
        document.body.style.overflow = 'hidden';

        // Check if images for this work are already loaded
        if (folderImages[work.id]?.length > 0) {
            // Update images after a short delay to ensure loading state is visible
            setTimeout(() => {
                setSelectedWork(prev => ({
                    ...prev,
                    images: folderImages[work.id] || []
                }));
                setIsLoadingGallery(false);
            }, 300);
        }
        // If no images yet and we're still loading all folders, keep loading state
        // The useEffect below will update the images when they're available
    }

    const openSlideshow = (index) => {
        setSlideIndex(index);
        document.body.style.overflow = 'hidden';
    }

    const closeSlideshow = () => {
        setSlideIndex(null);
        document.body.style.overflow = 'auto';
    }

    const navigateSlide = (direction) => {
        if (!selectedWork?.images?.length) return;

        const totalImages = selectedWork.images.length;
        let newIndex;

        if (direction === 'next') {
            newIndex = (slideIndex + 1) % totalImages;
        } else {
            newIndex = (slideIndex - 1 + totalImages) % totalImages;
        }

        setSlideIndex(newIndex);
    }

    const handleModalClick = (e) => {
        if (e.target.classList.contains('gallery-modal')) {
            closeGallery();
        }
    }

    const handleSlideshowClick = (e) => {
        if (e.target.classList.contains('slideshow-modal')) {
            closeSlideshow();
        }
    }

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (slideIndex === null) return;

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                navigateSlide('next');
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                navigateSlide('prev');
            } else if (e.key === 'Escape') {
                closeSlideshow();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [slideIndex, selectedWork]);

    // Load all images from respective folders
    useEffect(() => {
        const loadFolderImages = async () => {
            setImagesAreLoading(true);
            const imageModules = import.meta.glob('/src/assets/**/*.{png,jpg,jpeg,webp,svg}');
            const allImages = {};

            for (const work of works) {
                if (work.imageFolder) {
                    const folderPath = `/src/assets/${work.imageFolder}/`;
                    const workImages = [];

                    // Find all images in this folder
                    for (const path in imageModules) {
                        if (path.startsWith(folderPath)) {
                            try {
                                const imageModule = await imageModules[path]();
                                workImages.push(imageModule.default);
                            } catch (error) {
                                console.error(`Failed to load image: ${path}`, error);
                            }
                        }
                    }

                    // Store all images for this work
                    if (workImages.length > 0) {
                        allImages[work.id] = workImages;
                    }
                }
            }

            setFolderImages(allImages);
            setImagesAreLoading(false);
        };

        loadFolderImages();
    }, []);

    // Update selected work with loaded images when they become available
    useEffect(() => {
        if (selectedWork && isLoadingGallery) {
            const workId = selectedWork.id;

            // Check if images for the selected work are now available
            if (folderImages[workId]?.length > 0) {
                setSelectedWork(prev => ({
                    ...prev,
                    images: folderImages[workId]
                }));
                setIsLoadingGallery(false);
            } else if (!imagesAreLoading) {
                // If all images are loaded but none for this work, stop loading state
                setIsLoadingGallery(false);
            }
            // If still loading overall, keep the loading state until the main loading completes
        }
    }, [folderImages, selectedWork, isLoadingGallery, imagesAreLoading]);

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

    // Preload first image from each folder for faster gallery loading
    useEffect(() => {
        const preloadFirstImages = () => {
            Object.values(folderImages).forEach(images => {
                if (images?.length > 0) {
                    const img = new Image();
                    img.src = images[0];
                }
            });
        };

        if (Object.keys(folderImages).length > 0) {
            preloadFirstImages();
        }
    }, [folderImages]);

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
                            <div className={`gallery-images ${selectedWork.images?.length <= 2 ? 'few-images' : ''}`}>
                                {isLoadingGallery ? (
                                    <div className="loading-gallery">Завантаження галереї...</div>
                                ) : selectedWork.images?.length ? (
                                    selectedWork.images.map((img, index) => (
                                        <div
                                            className="gallery-image"
                                            key={index}
                                            data-index={index}
                                            onClick={() => openSlideshow(index)}
                                        >
                                            {!galleryImagesLoaded[index] && <div className="image-skeleton"></div>}
                                            <img
                                                src={img}
                                                alt={`${selectedWork.title} - фото ${index + 1}`}
                                                loading="lazy"
                                                data-index={index}
                                                onLoad={(e) => handleImageLoad(e.target)}/>
                                        </div>
                                    ))
                                ) : (
                                    <p>Немає доступних фотографій</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Slideshow Modal */}
                {selectedWork && slideIndex !== null && (
                    <div className="slideshow-modal" onClick={handleSlideshowClick}>
                        <div className="slideshow-content">
                            <button className="close-slideshow" onClick={closeSlideshow}>&times;</button>
                            <button className="slide-nav prev" onClick={() => navigateSlide('prev')}>&#10094;</button>
                            <div className="slide-container">
                                <img
                                    src={selectedWork.images[slideIndex]}
                                    alt={`${selectedWork.title} - слайд ${slideIndex + 1}`}
                                    className="slide-image"
                                />
                                <div className="slide-counter">
                                    {slideIndex + 1} / {selectedWork.images.length}
                                </div>
                            </div>
                            <button className="slide-nav next" onClick={() => navigateSlide('next')}>&#10095;</button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default OurWorks