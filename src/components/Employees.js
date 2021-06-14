const Employees = (props) => {
    return (
        <tr key={props.index}>
            <td><img src={props.picture.thumbnail} /></td>
            <td>{props.name.first} {props.name.last}</td>
            <td><a href={`mailto${props.email}`}>{this.props.email}</a></td>
            <td>{props.phone}</td>
        </tr>
    )
}

export default Employees