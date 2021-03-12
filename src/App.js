import "./app.scss";
import Mahasiswa from './components/Mahasiswa';
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const jumlahMahasiswa = [
    'Mahasiswa 1', 'Mahasiswa 2', 'Mahasiswa 3', 'Mahasiswa 4', 'Mahasiswa 5', 'Mahasiswa 6',
    'Mahasiswa 7', 'Mahasiswa 8', 'Mahasiswa 9', 'Mahasiswa 10'      
  ];

  const data = useSelector(state => state);
  const [output, setOutput] = useState('none');

  const printData = JSON.stringify(data)
  .replace(/{/g, " { <br>")
  .replace(/,/g, ", <br>" )
  .replace(/}/g, ", <br> }" )

  const save = () => {
    setOutput('block');
  }

  return (
      <div className="App container">
        <h1 className="title">Aplikasi Penilaian Mahasiswa</h1>

        <div className="title-column">
          <div className="column">Aspek 1</div>
          <div className="column">Aspek 2</div>
          <div className="column">Aspek 3</div>
          <div className="column">Aspek 4</div>
        </div>

        <div className="form-mahasiswa">
          {jumlahMahasiswa.map( (nama, i) => (
              <Mahasiswa key={i} nama={nama} />
          ))}
        </div>

        <div className="btn-wrapper">
          <button type="submit" onClick={save}>save</button>
        </div>

        <div className="output" style={{display: output}}>
          <h2><b>Output in JSON : </b></h2>
          <div className="output-data" dangerouslySetInnerHTML={{__html: `${printData}`}}></div>
          <button className="btn-output-close" onClick={() => setOutput('none')}>X</button>
        </div>
      </div>
  );
}

export default App;
