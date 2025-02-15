import './App.css';

const cinema = {
  name: "AMB Cinemas",
  location: "HiTech City",
  movies: [
    {
      title: "Chavva",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4zLzEwICAxOC4ySyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00408691-wefbnyucnt-portrait.jpg",
      shows: ["10AM", "3PM"],
      seats: [20, 10]
    },
    {
      title: "Captain America: Brave New World",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4xLzEwICAyLjRLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00399765-lxpecsqysh-portrait.jpg",
      shows: ["8AM", "12AM", "4PM", "5PM", "8PM", "10PM", "12PM"],
      seats: [20, 10, 9, 22, 44, 13, 4]
    },
    {
      title: "Raja Saab",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MTAsIEFwciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00383697-ylkctsgxqw-portrait.jpg",
      shows: ["11AM", "4PM", "6PM", "8PM", "10PM"],
      seats: [6, 16, 26, 16, 6]
    },
    {
      title: "Hari Hara Veeramallu",
      imageUrl: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-MjgsIE1hciAyMDI1,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00308207-uzkhshyusd-portrait.jpg",
      shows: ["11AM", "4PM"],
      seats: [200, 300]
    },
    {
      title: "Kalki 2898AD",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg",
      shows: ["10AM", "3PM"],
      seats: [20, 10]
    },
    {
      title: "Thandel",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thandel-et00384012-1705486794.jpg",
      shows: ["8AM", "12AM", "4PM", "5PM", "8PM", "10PM", "12PM"],
      seats: [20, 10, 9, 22, 44, 13, 4]
    },
    {
      title: "Interstellar",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/interstellar-et00019066-19-02-2021-02-25-12.jpg",
      shows: ["11AM", "4PM", "6PM", "8PM", "10PM"],
      seats: [6, 16, 26, 16, 6]
    },
    {
      title: "Pushpa 2: The Rule",
      imageUrl: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/pushpa-2-the-rule-et00356724-1737184762.jpg",
      shows: ["11AM", "4PM"],
      seats: [200, 300]
    }
  ]
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <nav class="col-12 navbar navbar-light bg-white">
        <img src='https://www.myhoardings.com/ads/wp-content/uploads/2024/06/bookmyshow-logo-vector.png' alt="logo" className="logo" />
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search movies" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        <h1 className='col-12 mb-5'>Now Showing</h1>


        {cinema.movies.map((eachObj, index) => (
          <div className='col-3'>
            <div className="card movie-card shadow p-1" key={index}>
              <img src={eachObj.imageUrl} alt="movie" className="movie-image" />
              <h2>{eachObj.title}</h2>
              <div>
                {eachObj.shows.map((eachTime, i) => (
                  <button className='btn btn-primary custom-button m-1' key={i}>{eachTime} <br /> ({eachObj.seats[i]}-seates left)</button>
                ))}
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App;


