import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="flex justify-center items-center my-10 ">
        <div className="flex items-center">
          <button
            onClick={() => {
              this.setState({
                count: this.state.count - 1,
              });
            }}
            className="border-orange-500 border-2 rounded-full px-3  bg-orange-500 text-white mr-4"
          >
            -
          </button>

          <h1 className="text-3xl ">
            Counter: {}
            {count}
          </h1>

          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
            className="border-orange-500 border-2 rounded-full px-3  bg-orange-500 text-white ml-4"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
export default About;
