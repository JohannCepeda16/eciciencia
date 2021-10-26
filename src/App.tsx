import { useEffect, useState } from "react";
import "./App.css";
import { colors } from "./commons";
import Home from "./modules/home/Home";
import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

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

export default function App() {
    let app: any = undefined;
    const [likes, setLikes] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        // Initialize Firebase
        if (!getApps().length) app = initializeApp(firebaseConfig);
        // Get a database reference to our posts
        fetchLikes();
    }, []);

    const fetchLikes = async () => {
        setLoading(true);
        const db = getFirestore(app);
        const response = collection(db, "likes");
        const data = await getDocs(response);
        const docs = data.docs.map((doc) => doc.data());
        setLikes(docs[0].likes);
        setLoading(false);
    };

    if(!loading){

        return (
            <div className="App" style={{ backgroundColor: colors.PRIMARY }}>
                <Home likes={likes} fetchLikes={fetchLikes}/>
            </div>
        );
    }else{
        return(
            <div>Cargando...</div>
        )
    }
}

