import { Icons, PublicImages } from 'common';
import { Input } from 'components/input';
import React from 'react';
import "./index.scss";

const Login: React.FC = () => {
    return <div className="container">
        <div className="left">

            <div className="header">
                <p className="title">Welcome</p>
                <p className="sub_title">
                    We are glad to see you back with us
                </p>
            </div>

            <form className="form">
                <Input placeHolder="Username" name="username" type="text" value="" onChange={() => { }} headIcon={Icons.UserIcon} containerStyle={{
                    width: "60%",
                    marginTop: 20
                }} />
                <Input placeHolder="Password" name="password" type="password" value="" onChange={() => { }} headIcon={Icons.PasswordIcon} containerStyle={{
                    width: "60%",
                    marginTop: 20
                }} />
            </form>

        </div>
        <div className="right">
            <img src={PublicImages.LoginWallpaper} alt="" className="image_fit" />
        </div>
    </div>
}

export default Login;