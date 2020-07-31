import React  from 'react';
import './Ninjas.css';

const Ninjas = ({ninjas, deleteNinja}) =>{ 
            const ninjaList = ninjas.map(ninja => {
              return ninjas.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                 <div>Name: {ninja.name}</div>
                 <div>Age: {ninja.age}</div>
                 <div>Belt: {ninja.belt}</div>
                 <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                </div>


                ) : null;
            })
            return(
                <div className="ninja-list">
                    {
                     ninjas.map(ninja => {
              return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                 <div>Name: {ninja.name}</div>
                 <div>Age: {ninja.age}</div>
                 <div>Belt: {ninja.belt}</div>
                </div>


                ) : null;
            })
        }
                </div>
            )
        
}

export default Ninjas;