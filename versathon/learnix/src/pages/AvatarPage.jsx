import { useState, useEffect } from "react";
import { auth, db } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import maleAvatar from "../assets/Male.png";
import femaleAvatar from "../assets/Female.png";
import { useNavigate } from "react-router-dom";

export default function AvatarPage() {
  const [selected, setSelected] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAvatar = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.avatar) setSelected(data.avatar);
      }
    };

    fetchAvatar();
  }, []);

  const saveAvatar = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    if (!selected) {
      alert("Please select an avatar");
      return;
    }

    try {
      await setDoc(
        doc(db, "users", user.uid),
        { avatar: selected },
        { merge: true }
      );
      navigate("/dashboard");
    } catch (error) {
      console.error("Error saving avatar:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-10 px-4 text-center">
      <h1 className="text-2xl font-bold text-[#075985]">Choose Your Avatar</h1>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center">
        {/* Male Avatar */}
        <div
          onClick={() => setSelected("male")}
          className={`p-5 border cursor-pointer rounded-lg transition-transform duration-300 hover:scale-110 ${
            selected === "male" ? "border-[#075985] border-4" : ""
          }`}
        >
          <img
            src={maleAvatar}
            alt="Male Avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
          />
        </div>

        {/* Female Avatar */}
        <div
          onClick={() => setSelected("female")}
          className={`p-5 border cursor-pointer rounded-lg transition-transform duration-300 hover:scale-110 ${
            selected === "female" ? "border-[#075985] border-4" : ""
          }`}
        >
          <img
            src={femaleAvatar}
            alt="Female Avatar"
            className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowPopup(true)}
          className="px-6 py-2 bg-white text-black border border-black cursor-pointer rounded-lg"
        >
          Avatar Shop
        </button>

        <button
          onClick={saveAvatar}
          className="px-6 py-2 bg-[#075985] text-white cursor-pointer rounded-lg"
        >
          Confirm
        </button>
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-lg font-semibold mb-4">Coming Soon!</h2>
            <button
              onClick={() => setShowPopup(false)}
              className="px-4 py-2 bg-[#075985] text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
