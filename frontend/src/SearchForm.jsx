function SearchForm() {
async function handelSearch(){
    const res = await fetch('http://localhost:5000/api/runpy')
    const data = await res.json()
    console.log(data)
}

    return <div>
        <div>
            Search Form
        </div>
        <button onClick={handelSearch}>Search</button>
    </div>
}

export default SearchForm