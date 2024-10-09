import { NextResponse } from 'next/server';
import { db } from '../../../../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(request, { params }) {
  const { id } = params; // Get the ID from the URL parameters
  console.log(`GET request received for product ID: ${id}`); // Log the start of the request

  try {
    // Reference to the specific document in the 'products' collection
    const productDocRef = doc(db, 'products', id);
    console.log(`Fetching document from Firestore for ID: ${id}`); // Log before fetching

    const docSnapshot = await getDoc(productDocRef); // Fetch the document

    // Check if the document exists
    if (!docSnapshot.exists()) {
      console.log(`No document found for ID: ${id}`); // Log if document does not exist
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 } // Not found status
      );
    }

    // Log individual document data
    const product = {
      id: docSnapshot.id,
      ...docSnapshot.data(),
    };

    console.log("Product prepared:", product); // Log the fetched product

    return NextResponse.json(product); // Return the product data
  } catch (error) {
    console.error("Error fetching product: ", error); // Log any error that occurs
    return NextResponse.json(
      { error: 'Failed to fetch product', details: error.message },
      { status: 500 }
    );
  }
}