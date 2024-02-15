import React, { useState } from "react";
import "../index.css";

export default function Team1() {

    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const goalkeepers = [
        {
            name: "Menyan Mike",
            age: 28,
            minutesPlayed: 1800,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/191210/image",
            position: "Goalkeeper",
            matchesPlayed: 20
        },
        {
            name: "Mirante Antonio",
            age: 40,
            minutesPlayed: 90,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/27955/image",
            position: "Goalkeeper",
            matchesPlayed: 1
        },
        {
            name: "Sportiello Marco",
            age: 31,
            minutesPlayed: 180,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/176301/image",
            position: "Goalkeeper",
            matchesPlayed: 3
        }
    ];

    const defenders = [

        {
            name: "Bartezaghi Davide",
            age: 18,
            minutesPlayed: 70,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1390489/image",
            position: "Defender",
            matchesPlayed: 5
        },
        {
            name: "Gabbia Matteo",
            age: 24,
            minutesPlayed: 367,
            goals: 1,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/826195/image",
            position: "Defender",
            matchesPlayed: 5
        },
        {
            name: "Hernandez Theo",
            age: 26,
            minutesPlayed: 1787,
            goals: 3,
            yellowCards: 2,
            redCards: 0,
            assists: 7,
            photo: "https://api.sofascore.app/api/v1/player/788027/image",
            position: "Defender",
            matchesPlayed: 20
        },
        {
            name: "Kjaer Simon",
            age: 34,
            minutesPlayed: 932,
            goals: 0,
            yellowCards: 1,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/21535/image",
            position: "Defender",
            matchesPlayed: 11
        },
        {
            name: "Calabria Davide",
            age: 27,
            minutesPlayed: 1551,
            goals: 0,
            yellowCards: 3,
            redCards: 1,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/318607/image",
            position: "Defender",
            matchesPlayed: 16
        },
        {
            name: "Kalulu Pierre",
            age: 23,
            minutesPlayed: 110,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/965330/image",
            position: "Defender",
            matchesPlayed: 4
        },
        {
            name: "Tomori Fikayo",
            age: 26,
            minutesPlayed: 1384,
            goals: 3,
            yellowCards: 2,
            redCards: 1,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/788255/image",
            position: "Defender",
            matchesPlayed: 14
        },
        {
            name: "Thiaw Malick",
            age: 22,
            minutesPlayed: 924,
            goals: 0,
            yellowCards: 2,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/1014286/image",
            position: "Defender",
            matchesPlayed: 10
        },
        {
            name: "Florenzi Alessandro",
            age: 32,
            minutesPlayed: 945,
            goals: 0,
            yellowCards: 2,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/152420/image",
            position: "Defender",
            matchesPlayed: 15
        },
        {
            name: "Jimenez Alejandro",
            age: 18,
            minutesPlayed: 58,
            goals: 0,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1184308/image",
            position: "Defender",
            matchesPlayed: 3
        },
        {
            name: "Simic Jan-Carlo",
            age: 18,
            minutesPlayed: 121,
            goals: 1,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1214992/image",
            position: "Defender",
            matchesPlayed: 4
        }
    ];

    const midfielders = [

        {
            name: "Adli Yacine",
            age: 23,
            minutesPlayed: 858,
            goals: 1,
            yellowCards: 0,
            redCards: 1,
            assists: 4,
            photo: "https://api.sofascore.app/api/v1/player/859024/image",
            position: "Midfielder",
            matchesPlayed: 10
        },
        {
            name: "Bennacer Ismael",
            age: 26,
            minutesPlayed: 292,
            goals: 0,
            yellowCards: 1,
            redCards: 1,
            assists: 4,
            photo: "https://api.sofascore.app/api/v1/player/823733/image",
            position: "Midfielder",
            matchesPlayed: 6
        },
        {
            name: "Loftus-Cheek Ruben",
            age: 28,
            minutesPlayed: 1352,
            goals: 5,
            yellowCards: 3,
            redCards: 0,
            assists: 3,
            photo: "https://api.sofascore.app/api/v1/player/284441/image",
            position: "Midfielder",
            matchesPlayed: 15
        },
        {
            name: "Musah Yunus",
            age: 21,
            minutesPlayed: 970,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/983815/image",
            position: "Midfielder",
            matchesPlayed: 13
        },
        {
            name: "Pobega Tommaso",
            age: 24,
            minutesPlayed: 300,
            goals: 0,
            yellowCards: 2,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/928796/image",
            position: "Midfielder",
            matchesPlayed: 7
        },
        {
            name: "Reijnders Tijjani",
            age: 25,
            minutesPlayed: 1921,
            goals: 2,
            yellowCards: 4,
            redCards: 1,
            assists: 3,
            photo: "https://api.sofascore.app/api/v1/player/893549/image",
            position: "Midfielder",
            matchesPlayed: 23

        },
        {
            name: "Terracciano Filippo",
            age: 21,
            minutesPlayed: 4,
            goals: 0,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1034303/image",
            position: "Midfielder",
            matchesPlayed: 1
        },
        {
            name: "Zeroli Kevin",
            age: 19,
            minutesPlayed: 19,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1397348/image",
            position: "Midfielder",
            matchesPlayed: 2
        }
    ];

    const forwards = [

        {
            name: "Giroud Olivier",
            age: 37,
            minutesPlayed: 1504,
            goals: 11,
            yellowCards: 1,
            redCards: 1,
            assists: 8,
            photo: "https://api.sofascore.app/api/v1/player/39070/image",
            position: "Forward",
            matchesPlayed: 20
        },
        {
            name: "Jovic Luka",
            age: 26,
            minutesPlayed: 520,
            goals: 6,
            yellowCards: 2,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/319129/image",
            position: "Forward",
            matchesPlayed: 11
        },
        {
            name: "Kamarda Francesco",
            age: 15,
            minutesPlayed: 14,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1520771/image",
            position: "Forward",
            matchesPlayed: 1
        },
        {
            name: "Leao Rafael",
            age: 24,
            minutesPlayed: 1488,
            goals: 4,
            yellowCards: 4,
            redCards: 0,
            assists: 6,
            photo: "https://api.sofascore.app/api/v1/player/851284/image",
            position: "Forward",
            matchesPlayed: 16
        },
        {
            name: "Okafor Noah",
            age: 23,
            minutesPlayed: 457,
            goals: 4,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/865523/image",
            position: "Forward",
            matchesPlayed: 8
        },
        {
            name: "Pulisic Christian",
            age: 25,
            minutesPlayed: 1536,
            goals: 6,
            yellowCards: 3,
            redCards: 0,
            assists: 7,
            photo: "https://api.sofascore.app/api/v1/player/817957/image",
            position: "Forward",
            matchesPlayed: 21
        },
        {
            name: "Chukwueze Samuel",
            age: 24,
            minutesPlayed: 545,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/822470/image",
            position: "Forward",
            matchesPlayed: 9
        }

    ];

    const coach = [

        {
            name: "Stefano Pioli",
            age: 58,
            position: "Coach",
            photo: "https://api.sofascore.app/api/v1/manager/76039/image"
        }
    ];

    const openPlayerModal = (player) => {
        if (player.position !== "Coach") {
            setSelectedPlayer(player);
        }
    };

    const closePlayerModal = () => {
        setSelectedPlayer(null);
    };
    const handleModalBackgroundClick = (event) => {
        if (event.target.classList.contains("modal")) {
            closePlayerModal();
        }
    };


    return (
        <div>
            <div className="team-header">
                <h1>Основна команда</h1>
            </div>

            <div className="players-container" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/11/23/15/08/wooden-floor-1853417_1280.jpg")' }}>
                {coach.map((coach, index) => (
                    <div className="player-card coach" key={index} onClick={() => openPlayerModal(coach)}>
                        <div className="player-photo-frame">
                            <img src={coach.photo} alt={coach.name} />
                        </div>
                        <div className="player-info">
                            <h2>{coach.name.split(' ')[0]}</h2>
                            <h2>{coach.name.split(' ')[1]}</h2>
                            <p>{coach.position}</p>
                        </div>
                    </div>
                ))}
                {goalkeepers.map((player, index) => (
                    <div className="player-card goalkeeper" key={index} onClick={() => openPlayerModal(player)}>
                        <div className="player-photo-frame">
                            <img src={player.photo} alt={player.name} />
                        </div>
                        <div className="player-info">
                            <h2>{player.name.split(' ')[0]}</h2>
                            <h2>{player.name.split(' ')[1]}</h2>
                            <p>{player.position}</p>
                        </div>
                    </div>
                ))}
                {defenders.map((player, index) => (
                    <div className="player-card defender" key={index} onClick={() => openPlayerModal(player)}>
                        <div className="player-photo-frame">
                            <img src={player.photo} alt={player.name} />
                        </div>
                        <div className="player-info">
                            <h2>{player.name.split(' ')[0]}</h2>
                            <h2>{player.name.split(' ')[1]}</h2>
                            <p>{player.position}</p>
                        </div>
                    </div>
                ))}
                {midfielders.map((player, index) => (
                    <div className="player-card midfielder" key={index} onClick={() => openPlayerModal(player)}>
                        <div className="player-photo-frame">
                            <img src={player.photo} alt={player.name} />
                        </div>
                        <div className="player-info">
                            <h2>{player.name.split(' ')[0]}</h2>
                            <h2>{player.name.split(' ')[1]}</h2>
                            <p>{player.position}</p>
                        </div>
                    </div>
                ))}
                {forwards.map((player, index) => (
                    <div className="player-card forward" key={index} onClick={() => openPlayerModal(player)}>
                        <div className="player-photo-frame">
                            <img src={player.photo} alt={player.name} />
                        </div>
                        <div className="player-info">
                            <h2>{player.name.split(' ')[0]}</h2>
                            <h2>{player.name.split(' ')[1]}</h2>
                            <p>{player.position}</p>
                        </div>
                    </div>
                ))}
                {selectedPlayer && (
                    <div className="modal" onClick={handleModalBackgroundClick}>
                        <div className="modal-content">
                            <span className="close" onClick={closePlayerModal}>&times;</span>
                            <div className="player-photo-frame">
                                <img src={selectedPlayer.photo} alt={selectedPlayer.name} />
                            </div>
                            <div className="player-info">
                                <h2>{selectedPlayer.name}</h2>
                                <p>Age: {selectedPlayer.age}</p>
                                <p>Matches Played: {selectedPlayer.matchesPlayed}</p>
                                <p>Minutes Played: {selectedPlayer.minutesPlayed}</p>
                                <p>Goals: {selectedPlayer.goals}</p>
                                <p>Assists: {selectedPlayer.assists}</p>
                                <p>Yellow Cards: {selectedPlayer.yellowCards}</p>
                                <p>Red Cards: {selectedPlayer.redCards}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}
