import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";


export const useInsertDocument = (docCollection) => {
  
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);


  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);
  
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }


  const insertDocument = async (document) => {
    checkIfIsCancelled();

    setLoading(true);

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );
      
      setResponse(insertedDocument)
      setLoading(false);
    } catch (error) {
        setResponse(error.message)
        setLoading(false);
    }
  };
  
  
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, response, loading };
};