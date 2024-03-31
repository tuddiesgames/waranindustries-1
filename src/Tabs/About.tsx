import { IonInput, IonItem, IonLabel, IonList } from "@ionic/react"
import React from "react"

const About = ()=>{
    return(
        <div className="softwares w-full h-full bg-cover bg-center" id="About">
                    <div className="h-80">
        </div>

        <div className="flex justify-between m-10 ">
        <IonList >
            <IonItem>
                <IonInput label="Name:" placeholder="Enter your name"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Phone No:" placeholder="Enter your Phone"></IonInput>
            </IonItem>
            <IonItem>
                <IonInput label="Email:" placeholder="Enter your Email"></IonInput>
            </IonItem>
            
            </IonList>

            <IonList className="ion-no-padding">
    <IonItem>
        <IonLabel>Whatsapp</IonLabel>
    </IonItem>
    <IonItem>
        <IonLabel>Instagram</IonLabel>
    </IonItem>
    <IonItem>
        <IonLabel>Youtube</IonLabel>   
    </IonItem>
    <IonItem>
        <IonLabel>X</IonLabel>   
    </IonItem>
</IonList>


        </div>
        <div className="h-60 "></div>
        <div className="h-60 bg-slate-100 flex flex-col justify-end">
            <h4 className="text-center mb-5 underline">Copyright © 2024 WaranIndustries</h4>
        </div>
        </div>

    )
}

export default About