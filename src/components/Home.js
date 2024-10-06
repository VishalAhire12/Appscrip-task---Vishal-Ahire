import React, { useState, useEffect } from 'react';
import '../styles/home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [sortOption, setSortOption] = useState('recommended');
    const [selectedCategories, setSelectedCategories] = useState({
        men: false,
        women: false,
        kids: false,
    });

    // Fetch product data from the API
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                setSortedProducts(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    // Handle sorting logic
    useEffect(() => {
        let sorted = [...products];

        switch (sortOption) {
            case 'newest':
                sorted = sorted.sort((a, b) => b.id - a.id);
                break;
            case 'popular':
                sorted = sorted.sort((a, b) => b.rating.count - a.rating.count);
                break;
            case 'priceHighToLow':
                sorted = sorted.sort((a, b) => b.price - a.price);
                break;
            case 'priceLowToHigh':
                sorted = sorted.sort((a, b) => a.price - b.price);
                break;
            default:
                sorted = products;
        }

        setSortedProducts(sorted);
    }, [sortOption, products]);

    // Filter products based on selected categories
    const filteredProducts = sortedProducts.filter((product) => {
        if (!selectedCategories.men && !selectedCategories.women && !selectedCategories.kids) {
            return true; 
        }
        if (selectedCategories.men && product.category === "men's clothing") {
            return true;
        }
        if (selectedCategories.women && product.category === "women's clothing") {
            return true;
        }
        if (selectedCategories.kids && product.category === "baby's clothing") {
            return true;
        }
        return false;
    });

    // Handle the sorting option change
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    // Handle category checkbox change
    const handleCategoryChange = (e) => {
        const { name, checked } = e.target;
        setSelectedCategories((prevCategories) => ({
            ...prevCategories,
            [name]: checked,
        }));
    };

    // Toggle dropdown visibility
    const toggleDropdown = (e) => {
        e.target.classList.toggle('active');
        const content = e.target.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    };

    return (
        <div>
            <div className='front'>
                <h1>
                DISCOVER OUR PRODUCTS
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br/>scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
            <div className='recommended'>
                <select value={sortOption} onChange={handleSortChange} className="sort-select">
                    <option value="recommended">Recommended</option>
                    <option value="newest">Newest First</option>
                    <option value="popular">Popular</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                </select>
            </div>
            <div className="home-container">
                <div className="filter-section">
                    
                    <h2>Customizable</h2>
                    <h3 className="dropdown" onClick={toggleDropdown}>Ideal For</h3>
                    <div className="dropdown-content">
                        <label>
                            <input 
                                type="checkbox" 
                                name="men" 
                                checked={selectedCategories.men} 
                                onChange={handleCategoryChange} 
                            /> Men
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="women" 
                                checked={selectedCategories.women} 
                                onChange={handleCategoryChange} 
                            /> Women
                        </label>
                        <label>
                            <input 
                                type="checkbox" 
                                name="kids" 
                                checked={selectedCategories.kids} 
                                onChange={handleCategoryChange} 
                            /> Baby & Kids
                        </label>
                    </div>

                    {/* Other dropdown sections */}
                    <h3 className="dropdown" onClick={toggleDropdown}>Occasion</h3>
                    <div className="dropdown-content">All</div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Work</h3>
                    <div className="dropdown-content">All</div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Fabric</h3>
                    <div className="dropdown-content">All</div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Segment</h3>
                    <div className="dropdown-content">All</div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Suitable For</h3>
                    <div className="dropdown-content">
                        <label><input type="checkbox" /> Summer</label>
                        <label><input type="checkbox" /> Winter</label>
                    </div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Raw Materials</h3>
                    <div className="dropdown-content">All</div>

                    <h3 className="dropdown" onClick={toggleDropdown}>Pattern</h3>
                    <div className="dropdown-content">All</div>
                </div>

                {/* displaying products */}
                <div className="products-section">
                    <h1>Products</h1>
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.title} className="product-image" />
                                <h3 className="product-title">{product.title}</h3>
                                <p><strong>Price: </strong>${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
