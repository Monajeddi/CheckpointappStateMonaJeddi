import React from 'react'
import { Button, Form } from 'react-bootstrap'
import  Image  from "../assets/Jennifer-Aniston.jpg";
import Timer from './Timer.js';


class Profil extends React.Component {

    state ={
        person:{
        fullName: "Jennifer Aniston",
        bio: "Après une formation dans l'école de « Fame », elle obtient son 1er rôle en 1989 dans la série télé « Molloy ». Sa carrière stagne jusqu'en 1994,date à laquelle elle auditionne pour le pilote d'une série sur NBC et devient pour 10 ans la Rachel Green de « Friends » aux côtés de Courteney Cox. Son rôle dans la série lui permet de remporter un Emmy Award et un Golden Globe. Au cinéma, elle devient de plus en plus populaire et enchaîne les bons résultats au box-office : « Marley et moi » avec Owen Wilson, « Le mytho » avec Adam Sandler et « Comment tuer son boss ? » avec Colin Farrell. Surnommée « La fiancée de l'Amérique », elle a également débuté une activité de productrice. ",
        imgSrc: <img src={Image} alt="Jennifer" width="200px"/>,
        profession: "Actrice/Réalisatrice/Productrice",
        
        }
         }

    updateTime = () => {
        this.setState({

        })

    }
    render() {
        return (
            <div className="Person">
                
                <p>{this.state.person.fullName}</p>
                <p> {this.state.person.bio}</p>
                <p> {this.state.person.imgSrc} </p>
                <p> {this.state.person.profession}</p>
                <Timer/>
            </div>
        )
    }
}
export default Profil