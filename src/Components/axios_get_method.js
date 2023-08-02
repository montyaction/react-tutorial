import React from "react";
import axios from "axios";

class Axiosget extends React.Component {
    
    state = {
        responseData: []
    };

    componentDidMount() {
        const getResponse = async () => {
            try {
                return await axios.get("https://jsonplaceholder.typicode.com/users");
            }
            catch (error) {
                console.log(error);
            }
        };

        const getData = async () => {
            const res = await getResponse();

            if (res) {
                console.log("Response recieved");
                this.setState({
                    responseData: res.data
                });
                console.log("Response read");
            }
        };

        getData();
    }

    render() {
        const { responseData } = this.state;
        const responseDataList = responseData.length ? (
            responseData.map((user) => {
                return(
                    <div key={user.id}>
                        <p>
                            <strong>User ID:</strong> {user.id}
                        </p>
                        <p>
                            <strong>Name:</strong> {user.name}
                        </p>
                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>
                    </div>
                )
            })
        ) : (
            <div> No User Data Recieved Yet </div>
        );
        return (
            <div className="App">
                <h1> Users Data </h1>
                {responseDataList}
            </div>
        )
    }
}

export default Axiosget;