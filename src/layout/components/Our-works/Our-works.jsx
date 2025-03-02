import './Our-works.css'
import {useState} from 'react'

const OurWorks = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [selectedWork, setSelectedWork] = useState(null)
    const [imagesLoaded, setImagesLoaded] = useState(false)
    
    const categories = ['all', 'кухні', 'корпусні меблі', 'санвузли']

    const works = [
        {
            id: 1,
            title: "Сучасна кухня",
            category: "кухні",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
            description: "Модернізація кухні з індивідуальними шафами"
        },
        {
            id: 2,
            title: "Класична кухня",
            category: "кухні",
            image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
            description: "Традиційний дизайн з сучасними зручностями"
        },
        {
            id: 3,
            title: "Шафа-купе",
            category: "корпусні меблі",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
            description: "Ергономічна шафа-купе з дзеркалами"
        },
        {
            id: 4,
            title: "Гардеробна",
            category: "корпусні меблі",
            image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
            description: "Простора гардеробна з системою зберігання"
        },
        {
            id: 5,
            title: "Сучасний санвузол",
            category: "санвузли",
            image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
            description: "Ванна кімната з функціональними меблями"
        },
        {
            id: 6,
            title: "Маленький санвузол",
            category: "санвузли",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
            description: "Компактне рішення для малогабаритних ванних кімнат"
        }
    ]

    const filteredWorks = selectedCategory === 'all'
        ? works
        : works.filter(work => work.category === selectedCategory)

    const closeGallery = () => {
        setSelectedWork(null);
        document.body.style.overflow = 'auto';
    }

    const openGallery = (work) => {
        setSelectedWork(work);
        document.body.style.overflow = 'hidden';
    }

    const handleModalClick = (e) => {
        if (e.target.classList.contains('gallery-modal')) {
            closeGallery();
        }
    }


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
                                    <div className="gallery-image" key={index}>
                                        <img src={img} alt={`${selectedWork.title} - фото ${index + 1}`}/>
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