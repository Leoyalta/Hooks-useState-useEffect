import css from "./App.module.css";
import Description from "../Description/Description.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Options from "../Options/Options.jsx";
import { useEffect, useState } from "react";

function App() {
  const [reviews, setReviews] = useState(() => {
    const savedReviews = localStorage.getItem("reviews");
    return savedReviews
      ? JSON.parse(savedReviews)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }, [reviews]);

  // const savedReviews = localStorage.getItem("reviews");
  // if (savedReviews) {
  //   setReviews(JSON.parse(savedReviews));
  // }

  // Функція для оновлення відгуків
  const updateFeedback = (type) => {
    setReviews((reviews) => ({
      ...reviews,
      [type]: reviews[type] + 1, // Збільшуємо конкретний тип на 1
    }));
  };

  const resetFeedback = () => {
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const positiveFeedback = Math.round((reviews.good / totalFeedback) * 100);
  return (
    <div className={css.container}>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
        positive={positiveFeedback}
      />
      {totalFeedback ? (
        <Feedback
          values={reviews}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        "No feedback yet"
      )}
    </div>
  );
}

export default App;
