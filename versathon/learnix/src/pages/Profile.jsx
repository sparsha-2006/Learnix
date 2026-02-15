import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Profile() {
  const navigate = useNavigate();
  const userId = auth.currentUser?.uid;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const [errors, setErrors] = useState({ name: "", email: "" });

  useEffect(() => {
    const fetchProfile = async () => {
      if (userId) {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setName(data.name || "");
          setEmail(data.email || "");
          setBio(data.bio || "");
        }
      }
    };
    fetchProfile();
  }, [userId]);

  const handleSave = async () => {
    const newErrors = { name: "", email: "" };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = "Name cannot be empty";
      hasError = true;
    }

    if (!email.trim()) {
      newErrors.email = "Email cannot be empty";
      hasError = true;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError && userId) {
      try {
        await setDoc(
          doc(db, "users", userId),
          { name, email, bio },
          { merge: true } // merge with existing document
        );
        console.log("Profile saved in Firestore");
        navigate("/dashboard"); // redirect after save
      } catch (error) {
        console.error("Error saving profile:", error);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 m-10 bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-3xl space-y-8">

        {/* Profile Form */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-4 text-center text-[#075985]">
            Profile Settings
          </h1>

          <label className="block mb-2 font-medium text-gray-600">Name</label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm -mt-3 mb-3">{errors.name}</p>}

          <label className="block mb-2 font-medium text-gray-600">Email</label>
          <input
            type="email"
            placeholder="user@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm -mt-3 mb-3">{errors.email}</p>}

          <label className="block mb-2 font-medium text-gray-600">Bio</label>
          <textarea
            value={bio}
            placeholder="Add a short bio"
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 resize-none focus:ring-blue-400"
          />

          <button
            onClick={handleSave}
            className="w-full bg-[#075985] text-white py-3 rounded-lg font-semibold hover:bg-sky-900 transition"
          >
            Save Changes
          </button>
        </div>

        {/* Profile Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Achievement Badges */}
          <div className="bg-sky-50 hover:bg-sky-100 transition rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transform">
            <h2 className="text-lg font-semibold text-sky-800 mb-4">Achievement Badges</h2>
            <div className="flex space-x-3">
              <p className="opacity-40">No badges earned yet</p>
            </div>
          </div>

          {/* Daily Challenge Streak */}
          <div className="bg-sky-50 hover:bg-sky-100 transition rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transform">
            <h2 className="text-lg font-semibold text-sky-800 mb-2">Daily Challenge Streak</h2>
            <p className="opacity-40">No current streak</p>
          </div>

          {/* Total XP Earned */}
          <div className="bg-yellow-50 hover:bg-yellow-100 transition rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transform">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Total XP Earned</h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-yellow-700">200</span>
              <img src="https://cdn-icons-png.flaticon.com/128/7334/7334113.png" className="h-10" alt="XP"/>
            </div>
            <p className="text-yellow-600 mt-1 text-sm">Experience points</p>
          </div>

          {/* Current Level */}
          <div className="bg-yellow-50 hover:bg-yellow-100 transition rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transform">
            <h2 className="text-lg font-semibold text-yellow-800 mb-2">Current Level</h2>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-yellow-700">1</span>
              <img src="https://cdn-icons-png.flaticon.com/128/616/616490.png" className="h-10" alt="Level"/>
            </div>
            <p className="text-yellow-600 mt-1 text-sm">Keep going!</p>
          </div>

        </div>
      </div>
    </div>
  );
}