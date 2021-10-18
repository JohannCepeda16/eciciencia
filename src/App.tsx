import { useEffect } from "react";
import "./App.css";
import { colors } from "./commons";
import Home from "./modules/home/Home";
import * as admin from "firebase-admin";

const firebaseConfig = {
    apiKey: "AIzaSyD598YK3KtCNw8ADXSnHTGqTx-qRcKuwYQ",
    authDomain: "eciciencia-posters.firebaseapp.com",
    databaseURL: "https://eciciencia-posters-default-rtdb.firebaseio.com",
    projectId: "eciciencia-posters",
    storageBucket: "eciciencia-posters.appspot.com",
    messagingSenderId: "1098853679403",
    appId: "1:1098853679403:web:f7091b23fe61945300056e",
    measurementId: "G-46BHD3CFYR",
};

function App() {
    // useEffect(() => {
    //     // Initialize Firebase
    //     if (!admin.apps.length) admin.initializeApp(firebaseConfig);
    //     // Get a database reference to our posts
    //     const db = admin.database();
    //     const ref = db.ref();

    //     // Attach an asynchronous callback to read the data at our posts reference
    //     ref.on(
    //         "value",
    //         (snapshot: any) => {
    //             console.log(snapshot.val());
    //         },
    //         (errorObject: any) => {
    //             console.log("The read failed: " + errorObject.name);
    //         }
    //     );
    // }, []);

    return (
        <div className="App" style={{ backgroundColor: colors.PRIMARY }}>
            <Home />
        </div>
    );
}

export default App;
