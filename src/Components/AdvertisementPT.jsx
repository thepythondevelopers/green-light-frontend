import React from "react";

const AdvertisementPT = () => {
    return (
        <>
            <div className="advertisement-landscape">
                <picture>
                    <source media="(min-width:768px)" type="image/webp" datasrcset="/assets/images/advertisement-portrait.png" />
                    <source media="(min-width:768px)" type="image/jpg" datasrcset="/assets/images/advertisement-portrait.png" />
                    <source media="(max-width:767px)" type="image/webp" datasrcset="/assets/images/advertisement-portrait.png" />
                    <source media="(max-width:767px)" type="image/jpg" datasrcset="/assets/images/advertisement-portrait.png" />
                    <img src="/assets/images/advertisement-portrait.png" className="img-fluid" alt="login" />
                </picture>
            </div>
        </>
    )
}

export default AdvertisementPT;