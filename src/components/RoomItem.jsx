export default function RoomItem({img, onClick, classname}) {
    return (
        <img className={`${classname} room-item`}
             src={img}
             onClick={onClick}
             style={{imageRendering: "pixelated"}}
             alt={"item"}/>
    );
}