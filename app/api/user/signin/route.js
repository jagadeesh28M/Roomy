const connectDB = require("../../../../lib/config/db");
const User = require("../../../../lib/models/User");

export async function POST(request) {
  try {
    await connectDB();

    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const user = await User.findOne({ email, password });

    if (user) {
      return new Response(
        JSON.stringify({
          message: "Login successful",
          user: { email: user.email, name: user.name, role: user.role },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to sign in",
        details: error.message,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
