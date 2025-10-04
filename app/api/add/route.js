import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const res = await request.json();

  const client = await clientPromise;
  const db = client.db("LinkHive");

  const links_data = db.collection("links");

  const handleExist = await links_data.findOne({ handle: res.handle });

  if (handleExist) {
    return Response.json({
      success: false,
      error: true,
      message: "Handle already exists",
      result: null,
    });
  } 
  else {
    const result = await links_data.insertOne(res);
    return Response.json({
      success: true,
      error: false,
      message: "LinkHive created successfully",
      result: result,
    });
  }
}
