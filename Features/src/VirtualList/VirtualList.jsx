import React, { useState } from "react";

function List({ items, itemHeight, containerHeight }) {
    const [scrollTop, setScrollTop] = useState(0);

    // How many items can fit in the visible area
    const visibleCount = Math.ceil(containerHeight / itemHeight);

    // Figure out which items to show based on scroll
    const startIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = startIndex + visibleCount;

    // Only render the items that are visible
    const visibleItems = items.slice(startIndex, endIndex);

    // Handle scroll updates
    const onScroll = (e) => {
        setScrollTop(e.target.scrollTop);
    };

    return (
        <div
            onScroll={onScroll}
            style={{
                height: containerHeight,
                overflowY: "auto",
                border: "1px solid gray",
                position: "relative",
            }}
        >
            {/* This empty div gives the illusion of full height */}
            <div style={{ height: items.length * itemHeight }}>
                {visibleItems.map((item, i) => (
                    <div
                        key={startIndex + i}
                        style={{
                            position: "absolute",
                            top: (startIndex + i) * itemHeight,
                            height: itemHeight,
                            left: 0,
                            right: 0,
                            padding: "8px",
                            boxSizing: "border-box",
                            borderBottom: "1px solid #eee",
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

const VirtualList = () => {
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    return (
        <div style={{ width: 300, margin: "20px auto" }}>
            <h3>Virtualized List (No Library)</h3>
            <List items={items} itemHeight={30} containerHeight={300} />
        </div>
    );
}

export default VirtualList