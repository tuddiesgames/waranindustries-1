import React from "react";
import { IonButton, IonPage } from "@ionic/react";
import './Home.css'
import Header from '../common/Header.tsx'

const Home  = ()=>{

    return(
            <IonPage className="page p-10 w-full h-full bg-cover bg-center" id="Home">

                <Header />

                <div className="h-40"></div>

                    <div className="p-10 mb-10 mx-auto rounded-2xl text-center" style={{ maxWidth: '600px', backgroundColor: 'rgba(217, 217, 217, 0.9)' }}>
                        <p>Welcome to our collaboration space! Here, we're working 
                        together to create a better future. 
                        We use creativity and teamwork to reach our goals. </p>
                        <p className="text-blue-700">Come join us to shape the future!</p>

                        <IonButton className="mt-5">Contact Us</IonButton>
                    </div>

                <div className="h-80"></div>

            </IonPage>

    

    )
}

export default Home;