import React from "react";
import './style.css'; 
import userImage from './images/user.png'; // Import the image from src folder
import starEmpty from './images/star-empty.png'; // Import the star image from src folder

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    });
    
    function toggleFavorite() {
        console.log("Toggle Favorite");
    }
    
    return (
        <main>
            <article className="card">
                {/* Use the imported user image */}
                <img src={userImage} className="card--image" alt="User" />
                <div className="card--info">
                    {/* Use the imported star-empty image */}
                    <img 
                        src={starEmpty} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                        alt="Favorite Star"
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
            </article>
        </main>
    );
}
