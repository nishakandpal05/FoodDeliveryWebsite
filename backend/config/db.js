import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nishakandpal:HieimNish5@cluster0.pzbdoiy.mongodb.net/fooddeliveryapplication', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB connection failed:", error.message);
        process.exit(1); 
    }
};
