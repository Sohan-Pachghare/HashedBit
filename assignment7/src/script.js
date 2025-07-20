const getData = async() => {
    const res = await fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data");
    const data = await res.json();
    const sortedData = data.sort((a, b) => a.NRR - b.NRR);
    return sortedData;
}

export default getData;
