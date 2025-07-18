const connectDB = require("../../../../lib/config/db");
const User = require("../../../../lib/models/User");

export async function POST(request) {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;
  try {
    await connectDB();
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const role = formData.get("role") || "user";

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    return new Response(
      JSON.stringify({ message: "User created", name, email, role }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to create user",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
