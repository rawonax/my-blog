import React, { useState } from "react";
import "./App.css";

const pets = [
  {
    id: "nasus",
    name: "나서스",
    species: "강아지",
    breed: "골든 리트리버",
    gender: "공주님",
    birth: "2024년 3월 13일생",
    hobby: "땅 파기, 휴지 물어뜯기",
    thumb: "/react-build/img/nasus.jpg",
    full: "/react-build/img/nasus-full.jpg",
  },
  {
    id: "renek",
    name: "레넥",
    species: "고양이",
    breed: "코리안 숏헤어",
    gender: "왕자님",
    birth: "2024년 10월 18일 만남",
    hobby: "밖에 나가고 싶다고 찡찡 → 열어주면 안 나감",
    thumb: "/react-build/img/renek.jpg",
    full: "/react-build/img/renek-full.jpg",
  },
  {
    id: "tan",
    name: "탄",
    species: "강아지",
    breed: "말티푸",
    gender: "왕자님",
    birth: "2024년 10월 28일생",
    hobby: "후루랑 껴안기",
    thumb: "/react-build/img/tan.jpg",
    full: "/react-build/img/tan-full.jpg",
  },
  {
    id: "huru",
    name: "후루",
    species: "강아지",
    breed: "테디비숑",
    gender: "공주님",
    birth: "2024년 10월 9일생",
    hobby: "탄이랑 껴안기",
    thumb: "/react-build/img/huru.jpg",
    full: "/react-build/img/huru-full.jpg",
  },
];


function PetCard({ pet, onBack }) {
  const isCouple = pet.id === "tan" || pet.id === "huru";
  const coupleImage = "/react-build/img/tan-huru.jpg";

  return (
    <div className="card">
      <img
        src={pet.full}
        alt={pet.name}
        className="main-img"
      />
      <h2>{pet.name}</h2>
      <p><strong>종:</strong> {pet.species}</p>
      <p><strong>품종:</strong> {pet.breed}</p>
      <p><strong>성별:</strong> {pet.gender}</p>
      <p><strong>생일:</strong> {pet.birth}</p>
      <p><strong>취미:</strong> {pet.hobby}</p>
      {isCouple && (
        <p style={{ fontWeight: "bold", color: "#ff7b7b" }}>
          💞 탄이와 후루는 서로 껴안는 걸 제일 좋아해요!
        </p>
      )}
      <button onClick={onBack}>돌아가기</button>
    </div>
  );
}

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div
      className="App"
      style={{
        cursor: "url(/mouseimg.png) 16 16, auto"
      }}
    >
      {selected === null ? (
        <>
          <h1>🐾 우리 가족을 소개합니다 🐾</h1>
          <div className="grid">
            {pets.map((pet) => (
              <div
                key={pet.id}
                className="card-thumb"
                onClick={() => setSelected(pet)}
              >
                <img src={pet.thumb} alt={pet.name} />
                <p>{pet.name}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <PetCard pet={selected} onBack={() => setSelected(null)} />
      )}
    </div>
  );
}

export default App;
