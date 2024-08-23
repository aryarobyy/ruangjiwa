const DokterDetail = ({params}) => {
    const username = params.username;
    return (
        <>
            <h1>{username}</h1>
        </>
    )
};

export default DokterDetail;