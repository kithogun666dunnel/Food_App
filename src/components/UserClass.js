import React from "react";
import { GiDiceSixFacesSix } from "react-icons/gi";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/kithogun666dunnel");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("component Did Update");
  }

  componentWillUnmount() {
    console.log("component Will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card max-w-xs mx-auto p-6 bg-white shadow-xl rounded-lg flex flex-col items-center">
        <img
          src={avatar_url}
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
        <h3 className="text-lg text-gray-700 mb-1">{location}</h3>
        <h4 className="text-sm text-gray-500 italic">
          Contact: @pankajkumarrko05@gmail.com
        </h4>
        <div className="mt-4">
          <GiDiceSixFacesSix className="text-blue-500 text-3xl hover:scale-125 transition-transform duration-300" />
        </div>
      </div>
    );
  }
}

export default UserClass;
