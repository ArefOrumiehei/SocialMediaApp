//Style
import "../Scss/Share.scss";

//Icons
import { IconMapPinPlus, IconPhotoPlus, IconUserPlus } from "@tabler/icons-react";


const Share = () => {

    return (
        <div className="share">
            <div className="container">
            <div className="top">
                <img
                src='https://images.pexels.com/photos/2152/sky-earth-space-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                alt=""
                />
                <input type="text" placeholder={`What's on your mind Aref ?`} />
            </div>
            <hr />
            <div className="bottom">
                <div className="left">
                <input type="file" id="file" style={{display:"none"}} />
                <label htmlFor="file">
                    <div className="item">
                    <IconPhotoPlus/>
                        <span>Add Image</span>
                    </div>
                </label>
                <div className="item">
                    <IconMapPinPlus/>
                    <span>Add Place</span>
                </div>
                <div className="item">
                    <IconUserPlus/>
                    <span>Tag Friends</span>
                </div>
                </div>
                    <div className="right">
                    <button>Share</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Share;