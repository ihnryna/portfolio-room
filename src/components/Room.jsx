import RoomItem from "../components/RoomItem";
import notebook from "../assets/notebook.png";
import cat from "../assets/cat.png";
import computer from "../assets/computer.png";
import board from "../assets/board.png";
import room from "../assets/room.png";

export default function Room() {
    return (
        <div className="room">
            <img src={room}
                 alt={"room"}
                 style={{imageRendering: "pixelated"}}
            />

            <RoomItem img={board}
                      classname={"board"}
                      onClick={() => (window.location.href = "/board")}
            />

            <RoomItem img={notebook}
                      classname={"notebook"}
                      onClick={() => (window.location.href = "/notebook")}
            />

            <RoomItem img={cat}
                      classname={"cat"}
                      onClick={() => window.open("https://pet-round-cat.irihskaa.workers.dev/", "_blank")}
            />

            <RoomItem img={computer}
                      classname={"computer"}
                      onClick={() => (window.location.href = "/computer")}
            />
        </div>
    );
}