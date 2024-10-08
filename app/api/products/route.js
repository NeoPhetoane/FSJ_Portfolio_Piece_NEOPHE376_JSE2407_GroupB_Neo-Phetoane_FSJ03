import { NextResponse } from 'next/server';
import { db } from '../../../firebaseConfig'; // Make sure this path is correct
import { collection, getDocs } from 'firebase/firestore';

export async function GET() {
  console.log("GET request received"); // Log the start of the request
  
  try {
    const productsCollection = collection(db, 'products');
    console.log("Fetching documents from Firestore..."); // Log before fetching

    const querySnapshot = await getDocs(productsCollection);
    console.log("Documents fetched:", querySnapshot.docs.length); // Log number of docs fetched

    const products = querySnapshot.docs.map(doc => {
      console.log('Document data:', doc.data()); // Log individual document data
      return {
        id: doc.id,
        ...doc.data()
      };
    });

    console.log("Products prepared:", products); // Log the final products array

    return NextResponse.json({ products });
  } catch (error) {
    console.error("Error fetching products: ", error); // Log any error that occurs
    return NextResponse.json(
      { error: 'Failed to fetch products', details: error.message },
      { status: 500 }
    );
  }
}
