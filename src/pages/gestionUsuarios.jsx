import Users from "../components/TableUsers";

const GestionUsuario = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((response) => response.json())
            .then(data => {
                console.log(data);
                setUsers(data)})
    });

    return (
        <>
            <Users data={users} />
        </>
    );
};

export default GestionUsuario;
