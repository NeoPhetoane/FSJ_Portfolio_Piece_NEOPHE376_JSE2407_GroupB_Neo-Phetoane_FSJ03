import { NextResponse } from 'next/server';
import { db } from '../../../firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  console.log("GET request received"); // Log the start of the request
  
  try {
    const categoriesCollection = collection(db, 'categories');
    console.log("Fetching documents from Firestore..."); // Log before fetching

    const querySnapshot = await getDocs(categoriesCollection);
    console.log("Documents fetched:", querySnapshot.docs.length); // Log number of docs fetched

    const categories = querySnapshot.docs.map(doc => {
      console.log('Document data:', doc.data()); // Log individual document data
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    console.log("categories prepared:", categories); // Log the final categories array

    return NextResponse.json({ categories });
  } catch (error) {
    console.error("Error fetching categories: ", error); // Log any error that occurs
    return NextResponse.json(
      { error: 'Failed to fetch categories', details: error.message },
      { status: 500 }
    );
  }
}
