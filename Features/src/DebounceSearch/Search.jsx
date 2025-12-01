import React, { useState, useEffect, useRef } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    // Refs for input and dropdown
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);

    // Fetch products on mount
    useEffect(() => {
        async function loadProducts() {
            const res = await fetch("https://dummyjson.com/products?limit=10");
            const data = await res.json();
            setProducts(data.products);
        }
        loadProducts();
    }, []);

    // Debouncing: wait 500ms after typing
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);

    // Filter products when debounced query changes
    useEffect(() => {
        if (!debouncedQuery.trim()) {
            setFiltered([]);
            setShowDropdown(false);
            return;
        }

        const result = products.filter((p) =>
            p.title.toLowerCase().includes(debouncedQuery.toLowerCase())
        );

        setFiltered(result);
        setShowDropdown(true);
    }, [debouncedQuery, products]);

    // Handle selecting a product
    const handleSelect = (title) => {
        setQuery(title);
        setShowDropdown(false);
        inputRef.current.blur(); // Blur the input after selection
    };

    // Handle clicks outside the dropdown to close it
    const handleClickOutside = (event) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target) &&
            inputRef.current && !inputRef.current.contains(event.target)
        ) {
            setShowDropdown(false);
        }
    };

    // Add event listener when the component mounts
    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside); // Clean up on unmount
        };
    }, []);

    return (
        <div style={{ width: "300px", margin: "40px auto", fontFamily: "sans-serif" }}>
            <h3>Product Search</h3>

            <input
                ref={inputRef}
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => query && setShowDropdown(true)}
                style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    boxSizing: "border-box", // Ensure padding doesn't affect layout
                }}
            />

            {/* DROPDOWN */}
            {showDropdown && filtered.length > 0 && (
                <ul
                    ref={dropdownRef}
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        border: "1px solid #ccc",
                        borderTop: "none",
                        maxHeight: "200px",
                        overflowY: "auto",
                        position: "absolute", // Absolutely position the dropdown
                        top: "120px", // Position it right below the input (adjust as needed)
                        left: "50%", // Set the left edge to the center
                        transform: "translateX(-50%)", // Center the dropdown horizontally
                        width: "40%", // Set the dropdown width to 40%
                        backgroundColor: "white", // White background
                        zIndex: 1000, // Ensure dropdown is above other content
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Optional: adds a shadow for better visibility
                    }}
                >
                    {filtered.map((item) => (
                        <li
                            key={item.id}
                            onClick={() => handleSelect(item.title)}
                            style={{
                                padding: "10px",
                                cursor: "pointer",
                                borderBottom: "1px solid #eee",
                                background: "#fff",
                            }}
                            onMouseDown={(e) => e.preventDefault()} // Prevent input blur before click
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            )}

            {/* If no results */}
            {showDropdown && filtered.length === 0 && (
                <div
                    ref={dropdownRef}
                    style={{
                        border: "1px solid #ccc",
                        borderTop: "none",
                        padding: "10px",
                        background: "#fff",
                        position: "absolute",
                        top: "120px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "40%",
                        zIndex: 1000,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    No results found
                </div>
            )}
        </div>
    );
}

export default App;
