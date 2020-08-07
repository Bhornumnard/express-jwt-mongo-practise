import React from 'react'
import axios from 'axios'


export default class Form extends React.Component {
    state = {
        username: "",
        password: "",
        profilePic: "",
        name: "",
        skill: "",
        data: []
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            password: this.state.password,
            profilePic: this.state.profilePic,
            name: this.state.name,
            skill: this.state.skill
        }

        axios.post('http://localhost:8080/home', newUser).then(() => {
            this.setState({
                data: [...this.state.data, newUser],
                username: "",
                password: "",
                profilePic: "",
                name: "",
                skill: ""
            })
            
        }).catch(err => {
            alert ("password too short")
            console.log(err)
        })

    }

    async componentDidMount() {
        const data = await axios.get("http://localhost:8080/home")
        const newData = data.data.data.data
        console.log(newData)
        this.setState((state, props) => {
            //    console.log(state.data)
            return { data: [...state.data, ...newData] }
        })
        //    console.log(this.state.data)
    }
    async componentDidUpdate(props, state) {
        if (state !== this.state) {
            console.log("hi")
            const data = await axios.get("http://localhost:8080/home")
            const newUpdateData = data.data.data.data
            console.log(newUpdateData)
            // this.setState( (state ,props)=> {
            //  //    console.log(state.data)
            //      return {data: [...state.data, ...newUpdateData]}
            // })
            // console.log(this.state.data)  
            // this.setState({data: newUpdateData})
        }

    }

    render() {
        return (<>
            <form onSubmit={this.handleSubmit}>
                <input type="text"
                    placeholder="username"
                    value={this.state.username}
                    onChange={(e) => this.setState({ username: e.target.value })} /><br />
                <input type="text"
                    placeholder="password"
                    value={this.state.password}
                    onChange={(e) => this.setState({ password: e.target.value })} /><br />
                <input type="text"
                    placeholder="profilePic"
                    value={this.state.profilePic}
                    onChange={(e) => this.setState({ profilePic: e.target.value })} /><br />
                <input type="text"
                    placeholder="name"
                    value={this.state.name}
                    onChange={(e) => this.setState({ name: e.target.value })} /><br />
                <input type="text"
                    placeholder="skill"
                    value={this.state.skill}
                    onChange={(e) => this.setState({ skill: e.target.value })} /><br />
                <button type="submit">submit</button><br />

            </form>
            <table>
                <tr>
                    <th>usarname</th>
                    <th>password</th>
                    <th>picture</th>
                    <th>name</th>
                    <th>skill</th>
                </tr>
                {this.state.data.map(obj =>
                    (
                        <tr>
                            <td>{obj.username}</td>
                            <td>{obj.password}</td>
                            <td>{obj.profilePic}</td>
                            <td>{obj.name}</td>
                            <td>{obj.skill}</td>

                        </tr>
                    )
                )}
            </table>

        </>)
    }

}


