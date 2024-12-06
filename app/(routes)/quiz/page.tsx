"use client";
import { Progress } from "@radix-ui/react-progress";
import { useState } from "react";

export default function Quiz() {
  const [step, setStep] = useState(-1);
  const [questions, setQuestions] = useState([
    {
      question:
        "Quelle est la ressemblance entre les récifs coralliens et les forêts tropicales?",
      options: [
        { label: "Les deux sont des écosystèmes terrestres", correct: false },
        { label: "Les deux sont des écosystèmes marins", correct: true },
        { label: "Les deux sont des écosystèmes désertiques", correct: false },
        { label: "Les deux sont des écosystèmes polaires", correct: false },
      ],
    },
    {
      question:
        "Quelle est la ressemblance entre les récifs coralliens et les forêts tropicales?",
      options: [
        { label: "Les deux sont des écosystèmes terrestres", correct: false },
        { label: "Les deux sont des écosystèmes marins", correct: true },
        { label: "Les deux sont des écosystèmes désertiques", correct: false },
        { label: "Les deux sont des écosystèmes polaires", correct: false },
      ],
    },
  ]);
  return (
    <div className="relative w-full h-screen bg-[#1F86AA] flex items-center justify-center">
      {/* Initial state */}
      {step === -1 && (
        <div className="flex flex-col items-center justify-center space-y-4 bg-[#bfe8f6] text-[#0862a9] w-full max-w-[800px] p-16 rounded-2xl border border-black">
          <h1 className=" text-2xl font-bold">Bienvenue sur AquaQuiz</h1>
          <p className="text-xl">
            Explorez les fascinantes ressemblances entre les écosystèmes
            océaniques et les systèmes humains à travers un quiz interactif et
            éducatif.
          </p>
          <button
            onClick={() => setStep(0)}
            className="text-white px-4 py-2 rounded-3xl bg-[#d9886b] "
          >
            Commencez!
          </button>
        </div>
      )}
      {step >= 0 && step < questions.length && (
        <div className="flex flex-col items-center justify-center space-y-4 bg-[#bfe8f6] text-[#0862a9] w-full max-w-[800px] p-16 rounded-2xl border border-black">
          <div className="w-full h-4 rounded-md overflow-hidden bg-blue-400">
            <div
              className="h-full bg-blue-600"
              style={{ width: `${(step / questions.length) * 100}%` }}
            ></div>
          </div>
          <h1 className=" text-2xl font-bold">{questions[step].question}</h1>
          <div className="flex flex-col space-y-4">
            {questions[step].options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  if (option.correct) {
                    setStep(step + 1);
                  } else {
                    alert("Mauvaise réponse! Essayez encore.");
                  }
                }}
                className="text-white px-4 py-2 rounded-3xl bg-[#d9886b] "
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
      {step >= questions.length && (
        <div className="flex flex-col items-center justify-center space-y-4 bg-[#bfe8f6] text-[#0862a9] w-full max-w-[800px] p-16 rounded-2xl border border-black">
          <h1 className=" text-2xl font-bold">Félicitations!</h1>
          <p className="text-xl">
            Vous avez terminé le quiz. Merci d'avoir participé!
          </p>
        </div>
      )}
    </div>
  );
}
