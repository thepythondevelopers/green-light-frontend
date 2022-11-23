import React from "react";

const AdvertisementLS = () => {
    return (
        <>
            <div className="advertisement-landscape">
                <picture>
                    <source media="(min-width:768px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                    <source media="(min-width:768px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                    <source media="(max-width:767px)" type="image/webp" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                    <source media="(max-width:767px)" type="image/jpg" datasrcset="/assets/images/auth-sidebar-bottom.png" />
                    <img src="/assets/images/auth-sidebar-bottom.png" className="img-fluid" alt="login" />
                </picture>
            </div>
        </>
    )
}

export default AdvertisementLS;