import React from 'react';

const Udaje = () => {

    function handleSubmit(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const meno = formData.get("meno");
        const priezvisko = formData.get("priezvisko");
        const email = formData.get("email");
        const telefonneCislo = formData.get("telefonneCislo");

        // Spracovanie údajov, napr. zobrazenie v alerte
        alert(`Meno: ${meno}\nPriezvisko: ${priezvisko}\nEmail: ${email}\nTelefónne číslo: ${telefonneCislo}`);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Meno:
                    <input type="text" name="meno" required />
                </label>
                <br />
                <label>
                    Priezvisko:
                    <input type="text" name="priezvisko" required />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <br />
                <label>
                    Telefónne číslo:
                    <input type="tel" name="telefonneCislo" required />
                </label>
                <br />
                <button type="submit">Odoslať</button>
            </form>
        </div>
    )
}

export default Udaje;