import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@fsctaskmanagercluster.5suuage.mongodb.net/?retryWrites=true&w=majority&appName=fscTaskManagerCluster`
    );
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error("❌ Erro ao conectar no MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToDatabase;