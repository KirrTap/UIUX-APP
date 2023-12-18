import React, { useState } from 'react';
import "./Udaje.css"; 


const Udaje = ({selected, setSelected}) => {
    const [ulozene, setUlozene] = useState(false);

    const [isActive, setIsActive] = useState(false);
    const option = ["VŠETKY DESTINÁCIE", "AUSTRÁLIA", "BAHAMY", "INDONÉZIA", "ISLAND", "KARIBIK","TALIANSKO"]
    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const meno = formData.get("meno");
        const priezvisko = formData.get("priezvisko");
        const email = formData.get("email");
        const telefonneCislo = formData.get("telefonneCislo");
        setUlozene(true);
    }
    
    return (
            <div className="blue-rectangle">
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className="label-text">Meno: *</span>
                        <br />
                        <input type="text" name="meno" className="input-field" required />
                    </label>
                    <br />
                    <label>
                        <span className="label-text">Priezvisko: *</span>
                        <br />
                        <input type="text" name="priezvisko" className="input-field" required />
                    </label>
                    <br />
                    <label>
                        <span className="label-text">Email: *</span>
                        <br />
                        <input type="email" name="email" className="input-field" required />
                    </label>
                    <br />
                    <label>
                        <span className="label-text">Telefónne číslo: *</span>
                        <br />
                        <input type="tel" name="telefonneCislo" className="input-field" required />
                    </label>
                    <p>* povinne polia</p>
                    <br />
                    <button type="submit" className='green-button'>ULOŽIŤ</button>
                    {ulozene && <p>Vaše údaje boli uložené.</p>}
                </form>
            </div>
    )
}

export default Udaje;