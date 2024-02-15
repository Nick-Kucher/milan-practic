import React, { useState } from "react";
import "../index.css";

export default function YouthTeam() {

    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const youthGoalkeepers = [
        {
            name: "Bartocchioni Andrea",
            age: 19,
            minutesPlayed: 180,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1175941/image",
            position: "Goalkeeper",
            matchesPlayed: 2
        },
        {
            name: "Nava Lapo",
            age: 20,
            minutesPlayed: 90,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1141168/image",
            position: "Goalkeeper",
            matchesPlayed: 1
        },
        {
            name: "Raver Noah",
            age: 18,
            minutesPlayed: 900,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1214870/image",
            position: "Goalkeeper",
            matchesPlayed: 10
        }
    ];

    const youthDefenders = [
        {
            name: "Nsiala Clinton",
            age: 20,
            minutesPlayed: 1579,
            goals: 0,
            yellowCards: 2,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/1141169/image",
            position: "Defender",
            matchesPlayed: 18
        },
        {
            name: "Bakun Adam",
            age: 18,
            minutesPlayed: 1303,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 1,
            photo: "https://api.sofascore.app/api/v1/player/1397353/image",
            position: "Defender",
            matchesPlayed: 20
        },
        {
            name: "Gausu Estevan",
            age: 17,
            minutesPlayed: 45,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Defender",
            matchesPlayed: 1
        },
        {
            name: "Kappelletti Mattia",
            age: 16,
            minutesPlayed: 14,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Defender",
            matchesPlayed: 2
        },
        {
            name: "Malaspina Mattia",
            age: 18,
            minutesPlayed: 240,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1463850/image",
            position: "Defender",
            matchesPlayed: 5
        },
        {
            name: "Mani Vittorio",
            age: 17,
            minutesPlayed: 1007,
            goals: 1,
            yellowCards: 5,
            redCards: 0,
            assists: 0,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Defender",
            matchesPlayed: 16
        },
        {
            name: "Nissen Fredrik",
            age: 18,
            minutesPlayed: 438,
            goals: 2,
            yellowCards: 3,
            redCards: 2,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1149095/image",
            position: "Defender",
            matchesPlayed: 6
        },
        {
            name: "Paloski Dorian",
            age: 18,
            minutesPlayed: 181,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1397357/image",
            position: "Defender",
            matchesPlayed: 3
        },
        {
            name: "Parmigiani Pietro",
            age: 18,
            minutesPlayed: 824,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1415433/image",
            position: "Defender",
            matchesPlayed: 10
        },
        {
            name: "Bartezzaghi Davide",
            age: 18,
            minutesPlayed: 860,
            goals: 0,
            yellowCards: 3,
            redCards: 0,
            assists: 2,
            photo: "https://api.sofascore.app/api/v1/player/1390489/image",
            position: "Defender",
            matchesPlayed: 10
        },
        {
            name: "Perera Nirash",
            age: 17,
            minutesPlayed: 118,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Defender",
            matchesPlayed: 3
        },
        {
            name: "Jimenez Alejandro",
            age: 18,
            minutesPlayed: 503,
            goals: 0,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1184308/image",
            position: "Defender",
            matchesPlayed: 8
        },
        {
            name: "Simic Jan-Carlo",
            age: 18,
            minutesPlayed: 810,
            goals: 1,
            yellowCards: 2,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1214992/image",
            position: "Defender",
            matchesPlayed: 9
        }

    ];

    const youthMidfielders = [
        {
            name: "Perina Joele",
            age: 18,
            minutesPlayed: 65,
            goals: 0,
            yellowCards: 1,
            redCards: 0,
            assists: 1,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Midfielder",
            matchesPlayed: 4
        },
        {
            name: "Bonomi Alessandro",
            age: 17,
            minutesPlayed: 340,
            goals: 1,
            yellowCards: 2,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1525650/image",
            position: "Midfielder",
            matchesPlayed: 8
        },
        {
            name: "Eletu Victor Ehuwa",
            age: 18,
            minutesPlayed: 1141,
            goals: 0,
            yellowCards: 1,
            redCards: 2,
            assists: 0,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Midfielder",
            matchesPlayed: 15
        },
        {
            name: "Cuenca Martinez Hugo Francisco",
            age: 19,
            minutesPlayed: 982,
            goals: 5,
            yellowCards: 1,
            redCards: 0,
            assists: 3,
            photo: "https://api.sofascore.app/api/v1/player/1397355/image",
            position: "Midfielder",
            matchesPlayed: 14
        },
        {
            name: "Perrucci Vincenzo",
            age: 18,
            minutesPlayed: 405,
            goals: 2,
            yellowCards: 4,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1461435/image",
            position: "Midfielder",
            matchesPlayed: 7
        },
        {
            name: "Sala Emanuele",
            age: 16,
            minutesPlayed: 780,
            goals: 1,
            yellowCards: 0,
            redCards: 0,
            assists: 4,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Midfielder",
            matchesPlayed: 13
        },
        {
            name: "Skochylas Mateusz",
            age: 17,
            minutesPlayed: 5,
            goals: 0,
            yellowCards: 0,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1405613/image",
            position: "Midfielder",
            matchesPlayed: 1
        },
        {
            name: "Stalmasz Dariusz",
            age: 18,
            minutesPlayed: 781,
            goals: 0,
            yellowCards: 1,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1141977/image",
            position: "Midfielder",
            matchesPlayed: 14
        },
        {
            name: "Zeroli Kevin",
            age: 19,
            minutesPlayed: 1155,
            goals: 2,
            yellowCards: 0,
            redCards: 0,
            assists: 4,
            photo: "https://api.sofascore.app/api/v1/player/1397348/image",
            position: "Midfielder",
            matchesPlayed: 13
        },

    ];

    const youthForwards = [
        {
            name: "Simmelhack Alexander",
            age: 18,
            minutesPlayed: 467,
            goals: 2,
            yellowCards: 1,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1186047/image",
            position: "Forward",
            matchesPlayed: 8
        },
        {
            name: "Kamarda Francesco",
            age: 15,
            minutesPlayed: 1005,
            goals: 24,
            yellowCards: 2,
            redCards: 1,
            assists: 3,
            photo: "https://api.sofascore.app/api/v1/player/1520771/image",
            position: "Forward",
            matchesPlayed: 13
        },
        {
            name: "Liberati Mattia",
            age: 16,
            minutesPlayed: 806,
            goals: 4,
            yellowCards: 3,
            redCards: 1,
            assists: 2,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Forward",
            matchesPlayed: 11
        },
        {
            name: "Martinez Luca",
            age: 18,
            minutesPlayed: 1050,
            goals: 3,
            yellowCards: 2,
            redCards: 0,
            assists: 3,
            photo: "https://www.sofascore.com/static/images/placeholders/player.svg",
            position: "Forward",
            matchesPlayed: 12
        },
        {
            name: "Scotti Filippo",
            age: 17,
            minutesPlayed: 213,
            goals: 0,
            yellowCards: 2,
            redCards: 0,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1403295/image",
            position: "Forward",
            matchesPlayed: 4
        },
        {
            name: "Sia Diego",
            age: 17,
            minutesPlayed: 110,
            goals: 1,
            yellowCards: 0,
            redCards: 1,
            assists: 0,
            photo: "https://api.sofascore.app/api/v1/player/1428531/image",
            position: "Forward",
            matchesPlayed: 3
        },
        {
            name: "Traore Shaka",
            age: 19,
            minutesPlayed: 845,
            goals: 3,
            yellowCards: 1,
            redCards: 0,
            assists: 2,
            photo: "https://api.sofascore.app/api/v1/player/1099371/image",
            position: "Forward",
            matchesPlayed: 10
        }

    ];


    const coach = [
        {
            name: "Ignacio Abate",
            age: 37,
            position: "Coach",
            photo: "https://api.sofascore.app/api/v1/manager/798682/image"
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
                <h1>Молодіжна команда</h1>
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
                {youthGoalkeepers.map((player, index) => (
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
                {youthDefenders.map((player, index) => (
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
                {youthMidfielders.map((player, index) => (
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
                {youthForwards.map((player, index) => (
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

