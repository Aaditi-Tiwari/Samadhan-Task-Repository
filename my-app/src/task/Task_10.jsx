import React, { useState } from "react";

export default function Task_10() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: "₹1,25,000",
      category: "Phones",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: "₹1,15,000",
      category: "Laptops",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      name: "Apple Watch Ultra",
      price: "₹85,000",
      category: "Watches",
      image:
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      name: "iPad Pro",
      price: "₹95,000",
      category: "Tablets",
      image:
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 5,
      name: "Sony WH-1000XM5",
      price: "₹29,990",
      category: "Headphones",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 6,
      name: "Dell XPS 15",
      price: "₹1,80,000",
      category: "Laptops",
      image:
        "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const filteredProducts = products.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      {/* Normal CSS yaha likh di hai */}
      <style>{`
        body {
          font-family: Arial, sans-serif;
          background-color: #f9fafb;
        }
        .app {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        header {
          text-align: center;
          margin-bottom: 20px;
        }
        header h1 {
          font-size: 2.5rem;
          color: #333;
        }
        header p {
          color: #666;
          font-size: 1.1rem;
        }
        .filters {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 20px;
          background: #fff;
          padding: 10px;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.1);
          flex-wrap: wrap;
        }
        .filters input,
        .filters select {
          padding: 8px 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          flex: 1;
          min-width: 200px;
        }
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .card {
          background: #fff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          display: flex;
          flex-direction: column;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }
        .card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-content h2 {
          font-size: 1.2rem;
          margin: 5px 0;
          color: #333;
        }
        .card-content p {
          margin: 5px 0;
          color: #555;
        }
        .category {
          font-size: 0.8rem;
          font-weight: bold;
          color: #4f46e5;
          text-transform: uppercase;
        }
        .price {
          font-size: 1.1rem;
          font-weight: bold;
          margin-top: auto;
        }
        .btn {
          margin-top: 10px;
          padding: 10px;
          background: #4f46e5;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .btn:hover {
          background: #3730a3;
        }
        .no-products {
          text-align: center;
          font-size: 1.2rem;
          color: #777;
          padding: 40px 0;
        }
      `}</style>

      {/* --- Page Header --- */}
      <header>
        <h1>Our Products</h1>
        <p>Find the perfect tech for you.</p>
      </header>

      {/* --- Filters Section --- */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Phones">Phones</option>
          <option value="Laptops">Laptops</option>
          <option value="Watches">Watches</option>
          <option value="Tablets">Tablets</option>
          <option value="Headphones">Headphones</option>
        </select>
      </div>

      {/* --- Product Grid --- */}
      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <div className="card-content">
                <p className="category">{product.category}</p>
                <h2>{product.name}</h2>
                <p className="price">{product.price}</p>
                <button className="btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          No products found. Try adjusting your search or filters!
        </div>
      )}
    </div>
  );
}
