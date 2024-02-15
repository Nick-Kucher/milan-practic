import React from 'react';
import Sponsor from './Sponsor';

function Footer() {
    const sponsors = [
        {
            name: 'Sponsor 1',
            website: 'https://ua.puma.com/uk/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/28aa448e-19f1-4c27-8ec2-2af25c679693/Puma_Resize_2.png'
        },
        {
            name: 'Sponsor 2',
            website: 'https://www.emirates.com/us/english/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/a54a6f36-c71a-498e-8879-80f5005a87a7/Emirates_Resize_2.png'
        },
        {
            name: 'Sponsor 3',
            website: 'https://www.konami.com/efootball/en/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6e1546a9-08c4-42c1-b988-04f23e86514a/Konami.png'
        },
        {
            name: 'Sponsor 4',
            website: 'https://www.msccrociere.it/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/f3cd4bb7-5477-4e9f-bb37-031b5ab6e773/MSC.png'
        },
        {
            name: 'Sponsor 5',
            website: 'https://www.bancobpm.it/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/e963e03e-98d5-4402-957a-7ebd532a8a63/Banco-BPM.png'
        },
        {
            name: 'Sponsor 6',
            website: 'https://www.bitmex.com/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6c7f6491-3a5d-4041-9f90-7f8c7532aedb/BitMEX.png'
        },
        {
            name: 'Sponsor 7',
            website: 'https://www.bmw.com/en/index.html',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/176ebdff-5600-4278-9c18-433319654c72/BMW.png'
        },
        {
            name: 'Sponsor 8',
            website: 'https://www.kumhotire.com/en/index.do',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/2ca5af8d-ac0f-4ed3-bf61-016f9d5c1645/Kumho-Tire.png'
        },
        {
            name: 'Sponsor 9',
            website: 'https://drinkboem.com/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/51797474-a15a-41bd-87ed-b1d46c81fadd/BOEM.png'
        },
        {
            name: 'Sponsor 10',
            website: 'https://www.hally-son.com/en/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/58b3901c-23b9-449c-8428-b6c6ee9e903d/Hally%26Son.png'
        },
        {
            name: 'Sponsor 11',
            website: 'https://www.acqualete.com/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/2df877a5-7770-475b-93b8-1ee38ee80078/Lete.png'
        },
        {
            name: 'Sponsor 12',
            website: 'https://www.wefox.com/en-de',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6c48be6f-51a3-46ee-a148-e9ce24fa7551/Wefox.png'
        },
        {
            name: 'Sponsor 13',
            website: 'https://www.lamolisana.it/en/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/2abda508-ab82-4d19-9fc0-78824887905d/La-Molisana.png'
        },
        {
            name: 'Sponsor 14',
            website: 'https://www.gatorade.com/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/be75abf0-104f-49a0-b436-4fc67c21b0f1/Gatorade.png'
        },
        {
            name: 'Sponsor 15',
            website: 'https://onefootball.com/en/home',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/32639350-7d25-4eac-9137-2795dbdafafa/OneFootball.png'
        },
        {
            name: 'Sponsor 16',
            website: 'https://tamias.com/',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/6604d669-740e-4e91-928c-2d0098ac5695/Tamias.png'
        },
        {
            name: 'Sponsor 17',
            website: 'https://www.celly.com/en/home',
            image: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/cafcbae4-e8e0-4555-a011-5b075709e512/Celly.png'
        },
    ];

    const renderSponsors = () => {
        const rows = [];
        let remainingSponsors = sponsors;
        let logoCount = 5;
        while (remainingSponsors.length > 0) {
            const rowSponsors = remainingSponsors.slice(0, logoCount);
            const row = (
                <div key={rows.length} className="sponsor-row">
                    {rowSponsors.map((sponsor, index) => (
                        <Sponsor
                            key={index}
                            name={sponsor.name}
                            website={sponsor.website}
                            image={sponsor.image}
                        />
                    ))}
                </div>
            );
            rows.push(row);
            remainingSponsors = remainingSponsors.slice(logoCount);
            logoCount = 6;
        }
        return rows;
    };

    return (
        <footer>
            <h2 className="sponsors-header">Спонсори</h2>
            <div className="sponsor-pyramid">
                {renderSponsors()}
            </div>
            <p className="footer-text">Всі права захищені &copy;</p>
        </footer>
    );
}

export default Footer;
