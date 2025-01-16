import React, { useState } from "react";
import "./App.css";

import Footer from "./Footer";
import Header from "./Header";
import TripList from "./components/TripList";
import Wishlist from "./components/Wishlist";

export default function App() {
    const [wishlist, setWishlist] = useState([]); // Wishlist state
    const [selectedMonth, setSelectedMonth] = useState(""); // Selected month state

    const trips = [
        // Beispiel-Daten
        { id: 1, title: "Trip A", description: "Beach vacation", startTrip: "2025-01-10", endTrip: "2025-01-20" },
        { id: 2, title: "Trip B", description: "Mountain adventure", startTrip: "2025-02-15", endTrip: "2025-02-22" },
        { id: 3, title: "Trip C", description: "City tour", startTrip: "2025-03-05", endTrip: "2025-03-12" },
    ];

    // Wishlist functions
    function addToWishlist(trip) {
        const { id, title, description, startTrip, endTrip } = trip;
        setWishlist((currentWishlist) => {
            const tripInWishlist = currentWishlist.find((t) => t.id === id);
            if (tripInWishlist) {
                return currentWishlist;
            } else {
                return [...currentWishlist, { id, title, description, startTrip, endTrip }];
            }
        });
    }

    function removeFromWishlist(item) {
        setWishlist((currentWishlist) =>
            currentWishlist.filter((trip) => trip.id !== item.id)
        );
    }

    function clearWishlist() {
        setWishlist([]);
    }

    // Handle month filter
    function handleMonthChange(event) {
        setSelectedMonth(event.target.value);
    }

    const filteredTrips = trips.filter((trip) => {
        const tripMonth = new Date(trip.startTrip).getMonth() + 1; // Monat von 0-11 zu 1-12
        return selectedMonth === "" || tripMonth === parseInt(selectedMonth, 10);
    });

    return (
        <div className="App">
            <Header />
            <div>
                <label htmlFor="month">Filter by month:</label>
                <select id="month" value={selectedMonth} onChange={handleMonthChange}>
                    <option value="">All</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
            </div>
            <TripList trips={filteredTrips} onAddToWishlist={addToWishlist} />
            <Wishlist
                wishlist={wishlist}
                onRemoveFromWishlist={removeFromWishlist}
                onClearWishlist={clearWishlist}
            />
            <Footer />
        </div>
    );
}


// if error then throw the error

// shorthand for react fragment
return (
    <>
        <div>
            <Header />
            <main>
                <h1>Welcome to biztrips-App</h1>

                <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} clearWishlist={clearWishlist} />

                <TripList addToWishlist={addToWishlist} />

            </main>
        </div>
        <Footer />
    </>
);

