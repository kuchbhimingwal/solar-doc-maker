import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-8">Sunrise Solar Solutions</h1>
        
        <div className="space-y-4">
          {/* Button for About Page */}
          <Link to="/ppa">
            <button className="w-48 py-2 px-4 mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              Make PPA
            </button>
          </Link>
          {/* Button for Authority letter Page */}
          <Link to="/authority">
            <button className="w-48 py-2 px-4 mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              Make Authority letter
            </button>
          </Link>
          <Link to="/model">
            <button className="w-48 py-2 px-4 mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              Model Aggrement
            </button>
          </Link>
          <Link to="/commision">
            <button className="w-48 py-2 px-4 mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              Commisioning report
            </button>
          </Link>
          <Link to="/joininspection">
            <button className="w-48 py-2 px-4 mx-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
              Join Inspection report
            </button>
          </Link>
          
        </div>
      </div>
    </div>
  )
}

export default Home